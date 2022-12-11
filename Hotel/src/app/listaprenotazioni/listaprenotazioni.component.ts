import { Component,Input,OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.css']
})
export class ListaprenotazioniComponent {

  constructor() {}
  @Input() listaPreno : Booking[]= undefined!;
  room : Room = undefined!;
  ngOnInit():void {
  
  }
  mostarDett(room: Room)
  {
    this.room=room;
  }
}
