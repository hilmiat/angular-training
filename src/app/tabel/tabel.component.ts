import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabel',
  template: 
  `
  <h1>Ini komponen table {{ nama }}</h1>
  <img src="{{angularLogo}}"  width="{{sizeImg}}">
  <img [src]="angularLogo" >
  <img bind-src="angularLogo">
  <input type="submit" [disabled]="isActive"/>
  <input type="submit" (click)="perbesar()"/>
  <input type="submit" (mouseover)="testOver()" />

  <table>
    <tr>
      <td>AAA</td>
    </tr>
  </table>
  `,
})
export class TabelComponent{
  nama = 'Hilmi';
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png'
  isActive=true;
  sizeImg='100';

  perbesar(){
    console.log('perbesar..');
    this.sizeImg='200';
  }
  testOver(){
    console.log('Mouse over me');
  }
}
