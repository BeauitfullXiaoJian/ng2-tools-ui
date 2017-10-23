
import { Component, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
declare const Prism: any;

const LANGUAGE = {
  html: Prism.languages.html,
  typescript: Prism.languages.typescript,
  javascript: Prism.languages.javascript,
  xml: Prism.languages.xml,
  php: Prism.languages.php,
}

export const CODE_LANGUAGE = {
  html: 'html',
  typescript: 'typescript',
  javascript: 'javascript',
  xml: 'xml',
  php: 'php',
}

@Component({
  selector: 'ts-prism-code',
  templateUrl: './prism-code.component.html',
  styleUrls: ['./prism-code.component.css']
})
export class PrismCodeComponent implements OnChanges {

  @Input() language: string
  @Input() code: string
  @Input() codeStyle: { [key: string]: string }
  @ViewChild('pad') codePad: any

  constructor() {
    this.language = "html"
  }

  ngOnChanges(changes: SimpleChanges) {

    const language = changes.language ? changes.language.currentValue : 'html'

    const html: string = Prism.highlight(this.code || '', LANGUAGE[language])

    this.codePad.nativeElement.innerHTML = html

  }

}
