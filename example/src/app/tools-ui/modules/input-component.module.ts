import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './../components/input-text/input-text.component';
import { InputVideoComponent } from './../components/input-video/input-video.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputTextComponent,
    InputVideoComponent,
  ],
  exports: [
    InputTextComponent,
    InputVideoComponent,
  ]
})
export class InputModule { }
