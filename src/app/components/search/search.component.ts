import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';

  constructor(private router: Router) {}

  esFormularioValido(): boolean {
    return this.tipoDocumento !== '' && 
          this.numeroDocumento !== '' &&
          this.numeroDocumento.length >= 8 &&
          this.numeroDocumento.length <= 11 &&
          /^\d+$/.test(this.numeroDocumento);
  }

  buscarCliente(): void {
    if (this.esFormularioValido()) {
      this.router.navigate(['/summary'], { 
        queryParams: { 
          tipo: this.tipoDocumento, 
          numero: this.numeroDocumento 
        }
      });
    }
  }
}
