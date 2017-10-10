import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './../components/checkbox/checkbox.component';
import { CheckboxsComponent } from './../components/checkbox/checkboxs.direvtive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckboxComponent,
    CheckboxsComponent,
  ],
  exports: [
    CheckboxComponent,
    CheckboxsComponent,
  ]
})
export class CheckboxModule { }
