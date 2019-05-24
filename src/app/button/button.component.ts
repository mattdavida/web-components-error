import { Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-button',
  template: `
    <p class="" [ngClass]="{ test: test }">
     ngClass works with
     <code>
     {{script1}}
     </code>
     <code>
     {{script2}}
     </code>
    </p>
  `,
  styles: ['.test {font-size: 100px;}']
})
export class ButtonComponent implements OnInit {
  test = false;
  script1 =
  `  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/custom-elements-es5-adapter.js"></script>`
  script2 =`<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/webcomponents-bundle.js"></script>`
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.test = !this.test;
    }, 5000);
  }
}
