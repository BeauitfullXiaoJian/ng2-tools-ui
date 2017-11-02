import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCardComponent } from './../components/open-card/open-card.component';
import { RotateDirective } from './../components/open-card/rotate.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OpenCardComponent,
    RotateDirective,
  ],
  exports: [
    CommonModule,
    OpenCardComponent,
    RotateDirective,
  ]
})
export class OpenCardModule { }
