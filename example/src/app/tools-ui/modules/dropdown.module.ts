import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './../components/dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownComponent,
  ],
  exports: [
    CommonModule,
    DropdownComponent,
  ]
})
export class DropdownModule { }
