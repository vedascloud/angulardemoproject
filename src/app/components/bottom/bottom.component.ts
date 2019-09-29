import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-bottom]',
  selector: `.app-bottom`,
  //selector: `app-bottom`,
  template: `
    <app-header></app-header>
    <h1>Hi</h1>
    <app-header></app-header>`,
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
