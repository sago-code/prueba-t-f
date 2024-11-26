import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  cliente?: Cliente;
  error: string = '';
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipoDocumento = params['tipo'];
      this.numeroDocumento = params['numero'];
      if (this.tipoDocumento && this.numeroDocumento) {
        this.buscarCliente();
      }
    });
  }

  buscarCliente() {
    this.loading = true;
    this.error = '';
    
    this.clienteService.getCliente(this.tipoDocumento, this.numeroDocumento)
      .subscribe({
        next: (data) => {
          this.cliente = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = error.status === 404 
            ? 'Cliente no encontrado' 
            : 'Cliente no existe o no encontrado';
          this.loading = false;
        }
      });
  }

  volver() {
    this.router.navigate(['/search']);
  }
}
