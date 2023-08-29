import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaConselhos = new Array<any>();

  constructor(private apiService: ApiService) {
    //this.getData();
    //this.createData();
    //this.uptData();
    this.delData();

  }
  // exclusão de dados
  delData() {
    this.apiService.delData().subscribe(data=>{
      console.log(data);
    })
  }

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

  getData() {
    this.apiService.getData().subscribe(data => {
      console.log(data);
    });

  }
}


