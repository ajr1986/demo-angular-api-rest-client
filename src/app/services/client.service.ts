import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../components/clients/client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {

    return this.httpClient.get(this.url).pipe(
      map(response => response as Client[])
    );
  }

  create(client: Client): Observable<Client> {

    return this.httpClient.post(this.url, client, { headers: this.httpHeaders }).pipe(
      map(response => response as Client)
    );
  }

  getClient(id): Observable<Client> {

    return this.httpClient.get(`${this.url}/${id}`).pipe(
      map(response => response as Client)
    );
  }

  update(client: Client): Observable<Client> {

    return this.httpClient.put(`${this.url}/${client.id}`, client, { headers: this.httpHeaders }).pipe(
      map(response => response as Client)
    );
  }

  delete(id) {

    return this.httpClient.delete(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
}
