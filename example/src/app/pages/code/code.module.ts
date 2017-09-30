import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolsUiModule } from './../../tools-ui/tools-ui.module'
import { CodeComponent } from './pad/code.component';

@NgModule({
  imports: [
    CommonModule,
    ToolsUiModule,
    RouterModule.forChild([
      { path: 'pad', component: CodeComponent }
    ])
  ],
  declarations: [
    CodeComponent,
  ]
})
export class CodeModule { }
