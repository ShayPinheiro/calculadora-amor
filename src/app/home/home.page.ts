import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  public  nome1 = '';
  public  nome2 = '';
  url = 'http://lucasreno.kinghost.net/love-calculator/';
  resultado = 0;
  msg ='';
  img = '';
  calculando = false;

    constructor(public http: HttpClient,){}

    async enviarDados(){
      let soma = 0;
      while (soma !== 10){

        this.resultado = Math.floor(Math.random() * 100 + 1);
        this.calculando = true;
        soma += 1;
        //await this.dalay(75);
       this.resultado = 0;
      }
  console.log(this.url + this.nome1 + '/' + this.nome2);

  this.img='';

  this.http.get<any>(this.url + this.nome1 + '/' + this.nome2).subscribe(
    (resposta) =>{
      this.resultado = resposta;
      console.log(this.resultado);
      if(this.resultado<20){
        this.msg = 'Não prossiga !!!';
        this.img = 'menos20.jpg';
      }
      else if(this.resultado<40){
        this.msg = 'Ache outra cremosa !';
        this.img = '40.jpg';
      }
      else if(this.resultado<60){
        this.msg = 'Não vai se apaixonar !';
        this.img = '60.jpg';
      }
      else if(this.resultado<80){
        this.msg = ' Pendente !';
        this.img = '80.jpg';
      }
      else {
        this.msg = 'Chega junto !!!';
        this.img = '100.jpg';
      }

    }
  );
  }

  limpar(){
    this.nome1 = null;
    this.nome2= null;
    this.resultado =null;
  }
}


