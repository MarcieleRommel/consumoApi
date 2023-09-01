import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listaConselhos: any[] = []

  constructor(private apiService: ApiService) {
    this.getData();
    //this.createData();
    //this.uptData();
    //this.delData();

  }

  ngOnInit(): void {
    this.apiService();
  }

  //pega os dados
  getData() {
    this.apiService.getData().subscribe((data: any) => this.listaConselhos = data.results);

  }

  // exclusão de dados
  delData() {
    this.apiService.delData().subscribe(data => {
      console.log(data);
    })
  }

  // atualização
  uptData() {
    const data: any = {
      id: 1,
      title: 'teste',
      body: 'nome',
      userId: 1
    };
    this.apiService.uptData(data).subscribe(data => {
      console.log(data);
    });
  }

  //criação
  createData() {
    const data: any = {
      "userId": 1,
      "id": 1,
      "title": "Teste de postagem",
      //"concluído": falso,
    };
    this.apiService.createData(data).subscribe(data => {
      console.log(data);
    });
  }

  // testando via console.log
  /*getData() {
    this.apiService.getData().subscribe(data => {
      console.log(data);
    });*/

}