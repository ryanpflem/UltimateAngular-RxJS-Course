import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <button #right md-raised-button color="accent">Move Right</button>
  <div class="container">
    <div #ball class="ball"
      [style.left]="position.x + 'px'"
      [style.top]="position.y + 'px'">
    </div>
  </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('right') right;
  position: any;

  ngOnInit() {
    Observable.fromEvent(this.getNativeElement(this.right), 'click')
      .startWith({x: 200, y: 200})
      .map(event => 10)
      .do(console.log)
      .scan((acc: any, curr: any) => Object.assign({}, acc, {x: acc.x + curr}))
      .do(console.log)
      .subscribe(position => this.position = position);
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
