import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './../components/font-icon/font-icon.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent,
  ],
  exports: [
    IconComponent,
  ]
})
export class IconModule { }
