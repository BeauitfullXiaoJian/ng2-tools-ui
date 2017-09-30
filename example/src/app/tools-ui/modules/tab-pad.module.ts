import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'assets/prism/prism.js';
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
