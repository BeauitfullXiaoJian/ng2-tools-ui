import { Component } from '@angular/core';
import { CODE_LANGUAGE } from './../../../tools-ui';

@Component({
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

  // code language
  language = CODE_LANGUAGE

  // code string
  codes = [
    `<ts-pirsm-code language="html" [code]="code"></ts-pirsm-code>`,
    `code=\`<div>a code pad</div>\``,
    `<div>a code pad</div>`,
  ]

}
