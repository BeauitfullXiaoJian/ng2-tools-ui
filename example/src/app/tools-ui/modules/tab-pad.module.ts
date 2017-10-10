import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPadComponent } from './../components/tab-pad/tab-pad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabPadComponent
  ],
  exports: [
    TabPadComponent
  ]
})
export class TabPadModule { }
