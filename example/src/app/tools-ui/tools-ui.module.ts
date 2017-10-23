import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*modules*/
import { PrismCodeModule } from './modules/prism-code.module';
import { LoadingModule } from './modules/loading-directive.module';
import { InputModule } from './modules/input-component.module';
import { IconModule } from './modules/icon-component.module';
import { TabPadModule } from './modules/tab-pad.module';
import { DatePickerModule } from './modules/datepicker.module';
import { ModalModule } from './modules/modal.module';
import { CheckboxModule } from './modules/checkbox-component.module';
import { PaginationModule } from './modules/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    PrismCodeModule,
    LoadingModule,
    InputModule,
    TabPadModule,
    DatePickerModule,
    ModalModule,
    CheckboxModule,
    PaginationModule,
  ],
  declarations: [],
  exports: [
    PrismCodeModule,
    LoadingModule,
    InputModule,
    DatePickerModule,
    TabPadModule,
    ModalModule,
    CheckboxModule,
    PaginationModule,
  ]
})
export class ToolsUiModule { }
