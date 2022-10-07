import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  mdc: string[]; //Creiamo il nostro vettore di stringhe
  constructor() { 
    this.mdc = ['Escavatori', 'Terne', 'Pale', 'Minipale','Dumpers', 'Bulldozer', 'Motolivellatrici', 'Rulli compattatori','Finitrice', 'Fresa a freddo']; //Riempiamo il vettore

  }

  ngOnInit(): void {
  }

}
