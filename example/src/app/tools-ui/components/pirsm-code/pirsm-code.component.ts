
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
  selector: 'ts-pirsm-code',
  templateUrl: './pirsm-code.component.html',
  styleUrls: ['./pirsm-code.component.css']
})
export class PirsmCodeComponent implements OnChanges {

  @Input() language: string
  @Input() code: string
  @ViewChild('pad') codePad: any

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    const language = changes.language ? changes.language.currentValue : 'html'

    const html: string = Prism.highlight(this.code || '', LANGUAGE[language])

    this.codePad.nativeElement.innerHTML = html

  }

}
