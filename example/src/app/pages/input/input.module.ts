import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PirsmCodeModule, InputModule as Itd } from './../../tools-ui'

import { TextComponent } from './text/text.component';


@NgModule({
  imports: [
    CommonModule,
    PirsmCodeModule,
    Itd,
    RouterModule.forChild([
      { path: 'text', component: TextComponent },
    ])
  ],
  declarations: [
    TextComponent,
  ]
})
export class InputModule { }
