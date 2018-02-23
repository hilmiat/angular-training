import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class RumahSakitService {
  DATA:any[]
  constructor(private http:HttpClient) {}
  // endcpointURL='http://api.jakarta.go.id/v1/rumahsakitumum';
  endpointURL='http://jsonplaceholder.typicode.com/posts';
  headers = new HttpHeaders(
    {
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers,Authorization',
      'Access-Control-Allow-Methods':'GET,PUT',  
      'authorization':
        'F3bxMaKA53ghpbNKxchlBx7apJuWx2KOkSF6qLr8hTT5na78mgc7W/b3KzFwSWHe'
    }
  );
  getData(){
    this.DATA=[
      {position:1,nama:'Tarakan'},
      {position:2,nama:'Budi Asih'},
      {position:3,nama:'Dharmais'}
    ]
    return this.DATA;
  };

  getDataFromWs():Observable<any[]>{
    return this.http.get<any[]>(this.endpointURL,{headers:this.headers});
  }


}
