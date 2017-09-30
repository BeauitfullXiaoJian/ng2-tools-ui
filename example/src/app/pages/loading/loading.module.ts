import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolsUiModule } from './../../tools-ui/tools-ui.module'
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    ToolsUiModule,
    RouterModule.forChild([
      { path: 'button', component: ButtonComponent }
    ])
  ],
  declarations: [
    ButtonComponent,
  ]
})
export class LoadingModule { }
