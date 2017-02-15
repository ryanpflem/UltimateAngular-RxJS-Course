import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <button #btn md-raised-button color="accent">Click me!</button>
  <div class="container">
    <h1>{{message}}</h1>
  </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('btn') btn;
  message: string;

  ngOnInit() {
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
