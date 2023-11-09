import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl = 'https://localhost:7088/';
  myApiUrl = 'api/Clientes';
  myApiGet = 'api/ClientesEmail/'
  constructor(private http: HttpClient) { }

  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.myAppUrl + this.myApiUrl, cliente);
  }

  obteneterCliente(email: string) {
    return this.http.get(this.myAppUrl + this.myApiGet + email).toPromise();
  }

}
