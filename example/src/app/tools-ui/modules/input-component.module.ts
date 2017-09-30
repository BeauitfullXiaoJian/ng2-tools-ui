import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './../components/input-text/input-text.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputTextComponent,
  ],
  exports: [
    InputTextComponent,
  ]
})
export class InputComponentModule { }
