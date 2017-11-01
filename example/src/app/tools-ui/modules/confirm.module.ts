import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './../components/confirm/confirm.component';
import { ConfirmDirective } from './../components/confirm/confirm.directive';
import { ConfirmService } from './../components/confirm/confirm.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConfirmComponent,
    ConfirmDirective
  ],
  entryComponents: [
    ConfirmComponent,
  ],
  providers: [
    ConfirmService,
  ],
  exports: [
    CommonModule
  ]
})
export class ConfirmModule { }
