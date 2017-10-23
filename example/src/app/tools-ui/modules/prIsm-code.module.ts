import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import 'assets/prism/prism.js';
import { PrismCodeComponent } from './../components/prism-code/prism-code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrismCodeComponent
  ],
  exports: [
    PrismCodeComponent
  ]
})
export class PrismCodeModule { }
