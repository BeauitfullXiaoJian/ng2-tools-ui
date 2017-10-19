
import { Component, Input } from '@angular/core';
declare const window: any

@Component({
  selector: 'ts-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent {

  content: string

  get makerdownHtml(): string {
    return window.marked(this.content || '')
  }

  constructor() { }


}
