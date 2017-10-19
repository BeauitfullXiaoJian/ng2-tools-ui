
import { Component, Input, ViewChild } from '@angular/core';
declare const window: any
declare const Prism: any;

const LANGUAGE = {
  html: Prism.languages.html,
  typescript: Prism.languages.typescript,
  javascript: Prism.languages.javascript,
  xml: Prism.languages.xml,
  php: Prism.languages.php,
}

@Component({
  selector: 'ts-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent {

  @Input() content: string

  @Input() preview: boolean

  @Input() height: string

  @Input() width: string

  @Input() btnClass: string

  @ViewChild('editor') editor: any

  showPreviewPad: boolean

  get makerdownHtml(): string {

    let renderer = new window.marked.Renderer();

    renderer.code = (code: string, language: string):string => {
      return `<pre class='language-${language}'><code>${Prism.highlight(code, LANGUAGE[language])}</code></pre>`
    }

    renderer.blockquote = (quote: string):string => {
      return `<blockquote class="markdown-blockquote">${quote}</blockquote>`
    }

    return window.marked(this.content || '', { renderer: renderer })
  }

  constructor() {
    this.content = ''
    this.preview = false
    this.height = '400px'
    this.width = '600px'
    this.btnClass = 'btn-dark'
    this.showPreviewPad = false
  }

  insertHeader() {
    this.insertText('# H1')
  }

  insertBold() {
    this.insertText('**Bold**')
  }

  insertItalic() {
    this.insertText('*Italic*')
  }

  insertQuote() {
    this.insertText('>Quote')
  }

  insertStrikethrough() {
    this.insertText('~~Striket~~')
  }

  insertCode() {
    this.insertText(`\`\`\`language
    ...
    \`\`\``)
  }


  insertText(str: string) {

    if (this.showPreviewPad) return

    let obj = this.editor.nativeElement

    if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {

      let startPos = obj.selectionStart
      let endPos = obj.selectionEnd
      let cursorPos = startPos
      let tmpStr = obj.value
      obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length)
      cursorPos += str.length
      obj.selectionStart = obj.selectionEnd = cursorPos

    } else {
      obj.value += str
    }

    this.content = obj.value
  }

}
