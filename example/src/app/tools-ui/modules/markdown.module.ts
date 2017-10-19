import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from './../components/markdown/markdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MarkdownComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MarkdownComponent,
  ]
})
export class MarkdownModule { }
