import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {
  name: string;
  constructor() { 
    this.name='terzo'
  }

  ngOnInit(): void {
  }

}
