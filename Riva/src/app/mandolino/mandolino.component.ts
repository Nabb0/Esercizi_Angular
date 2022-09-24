import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mandolino',
  templateUrl: './mandolino.component.html',
  styleUrls: ['./mandolino.component.css']
})
export class MandolinoComponent implements OnInit {
  name: string;
  constructor() {
    this.name='quarto'
   }

  ngOnInit(): void {
  }

}
