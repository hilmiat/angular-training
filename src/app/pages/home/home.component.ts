import { Component, OnInit } from '@angular/core';
import { RumahSakitService } from '../../service/rumah-sakit.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RumahSakitService]
})
export class HomeComponent implements OnInit {
  dataSource:any[];
  displayedColumns = ['id','title'];

  constructor(private rsService:RumahSakitService) { 
  }

  ngOnInit() {
    // console.log(this.rsService.getData());
    // this.dataSource = this.rsService.getData();

    this.rsService.getDataFromWs().subscribe(
      result=>{
        console.log(result);
        this.dataSource = result;
      },
      error=>{console.log(error)}
    );
  }
 
  
}
