import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCardComponent } from './../components/open-card/open-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OpenCardComponent
  ],
  exports: [
    CommonModule,
    OpenCardComponent
  ]
})
export class OpenCardModule { }
