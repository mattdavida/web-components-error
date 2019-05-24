import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'app-button',
  template: `
    <p class="" [ngClass]="{test: true}">
      button works!
    </p>
  `,
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
