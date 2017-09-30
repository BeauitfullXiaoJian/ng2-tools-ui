import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TSPirsmModule, TSInputModule } from './../../tools-ui'

import { TextComponent } from './text/text.component';


@NgModule({
  imports: [
    CommonModule,
    TSPirsmModule,
    TSInputModule,
    RouterModule.forChild([
      { path: 'text', component: TextComponent },
    ])
  ],
  declarations: [
    TextComponent,
  ]
})
export class InputModule { }