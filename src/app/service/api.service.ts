import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // passa o link numa string mantendo a privacidade dos dados
  //"https://api.adviceslip.com/"
  private url: string = "https://jsonplaceholder.typicode.com/"
  private options: any = { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }) };

  // monta o link e pega os dados
  constructor(private HTTP: HttpClient) { }
  //metodo para pegar os dados GET
  // colocar o path aqui
  getData() {
    return this.HTTP.get(`${this.url}todos`)
  }

  // Simula criação do WS
  createData(data: any) {
    return this.HTTP.post(`${this.url}posts`, JSON.stringify(data), this.options);
  }

  //Simula atualização de dados
  uptData() {
    return this.HTTP.put(`${this.url}posts/1`, JSON.stringify(data),this.options);
  }

  //Simula que vai apagar os dados
  delData() {
    return this.HTTP.delete(`${this.url}posts/1`);
  }
}

