import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Dani';
  public gender: 'male'|'female' = 'male';
  public invitationMAP = {
    'male': 'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name = 'Jesica';
    this.gender = 'female';
  }

  //i18Plural
  public clients : string[] = ['Dani','Jesi','Maria','Juan'];
  public clientsMAP = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  deleteCliente():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:',value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
    }, 3500);
  }
  )

}
