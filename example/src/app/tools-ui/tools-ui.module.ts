import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*modules*/
import { PirsmCodeModule} from './modules/pirsm-code.module';

import { BtnLoadingComponent } from './directives/btn-loading.directive';



@NgModule({
  imports: [
    CommonModule,
    PirsmCodeModule,
  ],
  declarations: [
    BtnLoadingComponent,
  ],
  exports: [
    BtnLoadingComponent,
    PirsmCodeModule,
  ]
})
export class ToolsUiModule { }
