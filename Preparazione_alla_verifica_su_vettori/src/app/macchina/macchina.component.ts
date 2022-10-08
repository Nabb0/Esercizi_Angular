import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() pluto: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
