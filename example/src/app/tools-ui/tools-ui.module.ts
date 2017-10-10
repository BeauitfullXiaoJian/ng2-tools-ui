import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*modules*/
import { PirsmCodeModule } from './modules/pirsm-code.module';
import { LoadingModule } from './modules/loading-directive.module';
import { InputModule } from './modules/input-component.module';
import { IconModule } from './modules/icon-component.module';
import { TabPadModule } from './modules/tab-pad.module';
import { DatePickerModule } from './modules/datepicker.module';
import { ModalModule } from './modules/modal.module';

@NgModule({
  imports: [
    CommonModule,
    PirsmCodeModule,
    LoadingModule,
    InputModule,
    TabPadModule,
    DatePickerModule,
    ModalModule,
  ],
  declarations: [],
  exports: [
    PirsmCodeModule,
    LoadingModule,
    InputModule,
    DatePickerModule,
    TabPadModule,
    ModalModule,
  ]
})
export class ToolsUiModule { }
