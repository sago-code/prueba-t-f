import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private apiUrl = '/api/clientes';

    constructor(private http: HttpClient) { }

    getCliente(tipoDocumento: string, numeroDocumento: string): Observable<Cliente> {
        return this.http.get<Cliente>(this.apiUrl, {
        params: {
            tipoDocumento,
            numeroDocumento
        }
        });
    }
} 