import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './../components/datepicker/datepicker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatepickerComponent
  ],
  exports: [
    DatepickerComponent
  ]
})
export class DatePickerModule { }