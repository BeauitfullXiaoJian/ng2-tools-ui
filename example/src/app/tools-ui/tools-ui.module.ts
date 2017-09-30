import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*modules*/
import { PirsmCodeModule } from './modules/pirsm-code.module';
import { LoadingDirectiveModule } from './modules/loading-directive.module';
import { InputComponentModule } from './modules/input-component.module';

@NgModule({
  imports: [
    CommonModule,
    PirsmCodeModule,
    LoadingDirectiveModule,
    InputComponentModule,
  ],
  declarations: [],
  exports: [
    PirsmCodeModule,
    LoadingDirectiveModule,
    InputComponentModule,
  ]
})
export class ToolsUiModule { }
