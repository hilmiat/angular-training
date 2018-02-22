import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasiswa',
  // templateUrl: './datasiswa.component.html',
  template:
  `
  <button (click)="toggleList()">Toggle List</button>
  <button (click)="tampilList=!tampilList">sToggle List</button>
   <div *ngIf="tampilList; else tampilText"> 
    <ul>
      <li *ngFor="let siswa of kelas">{{siswa}}</li>
    </ul>
   </div>
  <ng-template #tampilText>
    <h3 [ngStyle]="{'background-color':'blue'}">List sedang di hide</h3>
  </ng-template>

  <div [ngSwitch]="status">
    <template *ngSwitchCase="satu"><h4>Status satu</h4></template>
    <template *ngSwitchCase="'dua'"><h4>Status dua</h4></template>
    <template *ngSwitchCase="tiga"><h4>Status tiga</h4></template>
    <template *ngSwitchDefault><h4>Status default</h4></template>
  </div>


    <table>
      <tr><td>Nama</td><td>Alamat</td></tr>
      <tr *ngFor="let x of objKelas | slice:1:3">
        <td>{{x.nama | uppercase}}</td>
        <td>{{x.alamat}}</td>
      </tr>
    </table>

  `,
  styleUrls: ['./datasiswa.component.css']
})
export class DatasiswaComponent implements OnInit {
  status='dua';
  tampilList = false;
  kelas:string[];
  objKelas=[
    {nama:'Adi',alamat:'bogor'},
    {nama:'Adu',alamat:'bojong'},
    {nama:'Ade',alamat:'depok'},
  ]
  constructor() { }

  ngOnInit() {
    this.kelas = ['Adi','Ade','Adu','Ado'];
  }

  toggleList(){
    this.tampilList = ! this.tampilList;
  }

}
