import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TSPrismModule, TSTabModule, TSMarkdownModule } from './../../tools-ui'
import { CodeComponent } from './pad/code.component';
import { MarkdownComponent } from './markdown/markdown.component';

@NgModule({
  imports: [
    TSMarkdownModule,
    TSPrismModule,
    TSTabModule,
    RouterModule.forChild([
      { path: 'pad', component: CodeComponent },
      { path: 'markdown', component: MarkdownComponent }
    ])
  ],
  declarations: [
    CodeComponent,
    MarkdownComponent,
  ]
})
export class CodeModule { }
