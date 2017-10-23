import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TSPrismModule, TSIconModule, TSTabModule, TSDateModule } from './../../tools-ui';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    TSPrismModule,
    TSIconModule,
    TSTabModule,
    TSDateModule,
    RouterModule.forChild([
      { path: 'calendar', component: CalendarComponent }
    ])
  ],
  declarations: [CalendarComponent]
})
export class DatepickerModule { }