import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hotel';
  obsRooms! : Observable<object>
  data! : object;
  constructor(private http :HttpClient)
  {

  }
  ngOnInit(): void {
    this.obsRooms =this.http.get('https://my-json-server.typicode.com/malizia-g/hotel/booking');
    this.obsRooms.subscribe(this.fatiqualcosa)
  }

  fatiqualcosa=(data: object)=> {
    this.data=data
  }
}
