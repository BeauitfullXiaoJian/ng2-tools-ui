import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import 'assets/prism/prism.js';
import { PirsmCodeComponent } from './../components/pirsm-code/pirsm-code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PirsmCodeComponent
  ],
  exports: [
    PirsmCodeComponent
  ]
})
export class PirsmCodeModule { }
