import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  fooData : Foo[];
  oFoo : Observable<Foo[]>;
  data: Object;
  loading: boolean;
  o: Observable<Object>;
  constructor(public http: HttpClient) { }
  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }
  getData = (d: Object) => {
    this.data = new Object(d);
    this.loading = false;
  }

  makeCompactPost(): void {
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => { console.log('dovrebbe entrare qui ')
        this.data = data;
        this.loading = false;
      });
  }

makeTypedRequest() : void
{
  //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe 
  this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
  this.oFoo.subscribe(data => {this.fooData = data;});
}

ngOnInit() {
}

}
