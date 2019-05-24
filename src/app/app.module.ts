import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  entryComponents: [ButtonComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    window.addEventListener('WebComponentsReady', () => {
      const customEl = createCustomElement(ButtonComponent, {injector: this.injector})
      customElements.define('app-button', customEl);
    })
  }
}
