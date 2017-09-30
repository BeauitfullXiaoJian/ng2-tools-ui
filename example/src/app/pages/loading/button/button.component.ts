import { Component } from '@angular/core';
import { CODE_LANGUAGE } from './../../../tools-ui';

@Component({
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  language = CODE_LANGUAGE

  // code string
  codes = [
    `<button (click)="showLoading(loadingButton1)" ts-loading class="btn btn-primary" title="加载按钮" #loadingButton1="tsLoading"></button>
  <button (click)="showLoading(loadingButton2)" ts-loading class="btn btn-secondary" title="加载按钮" #loadingButton2="tsLoading"></button>
  <button (click)="showLoading(loadingButton3)" ts-loading class="btn btn-danger" title="加载按钮" #loadingButton3="tsLoading"></button>
  <button (click)="showLoading(loadingButton4)" ts-loading class="btn btn-warning" title="加载按钮" #loadingButton4="tsLoading"></button>
  <button (click)="showLoading(loadingButton5)" ts-loading class="btn btn-info" title="加载按钮" #loadingButton5="tsLoading"></button>
  <button (click)="showLoading(loadingButton6)" ts-loading class="btn btn-light" title="加载按钮" #loadingButton6="tsLoading"></button>
  <button (click)="showLoading(loadingButton7)" ts-loading class="btn btn-dark" title="加载按钮" #loadingButton7="tsLoading"></button>
  <button (click)="showLoading(loadingButton8)" ts-loading class="btn btn-link" title="加载按钮" #loadingButton8="tsLoading"></button>`,
    `showLoading(tsLoadingCom: any): void {
    setTimeout(_ => {
      tsLoadingCom.complete = true
    }, 2000)
  }`,
    `<button (click)="showLoading(loadingButton9)" ts-loading class="btn btn-sm btn-primary" title="加载按钮" #loadingButton9="tsLoading"></button>
  <button (click)="showLoading(loadingButton10)" ts-loading class="btn btn-sm btn-secondary" title="加载按钮" #loadingButton10="tsLoading"></button>
  <button (click)="showLoading(loadingButton11)" ts-loading class="btn btn-sm btn-danger" title="加载按钮" #loadingButton11="tsLoading"></button>
  <button (click)="showLoading(loadingButton12)" ts-loading class="btn btn-sm btn-warning" title="加载按钮" #loadingButton12="tsLoading"></button>
  <button (click)="showLoading(loadingButton13)" ts-loading class="btn btn-sm btn-info" title="加载按钮" #loadingButton13="tsLoading"></button>
  <button (click)="showLoading(loadingButton14)" ts-loading class="btn btn-sm btn-light" title="加载按钮" #loadingButton14="tsLoading"></button>
  <button (click)="showLoading(loadingButton15)" ts-loading class="btn btn-sm btn-dark" title="加载按钮" #loadingButton15="tsLoading"></button>
  <button (click)="showLoading(loadingButton16)" ts-loading class="btn btn-sm btn-link" title="加载按钮" #loadingButton16="tsLoading"></button>`,
    `<button (click)="showLoading(loadingButton17)" ts-loading class="btn btn-lg btn-outline-primary" title="Primary" #loadingButton17="tsLoading"></button>
  <button (click)="showLoading(loadingButton18)" ts-loading class="btn btn-lg btn-outline-secondary" title="Secondary" #loadingButton18="tsLoading"></button>
  <button (click)="showLoading(loadingButton19)" ts-loading class="btn btn-lg btn-outline-danger" title="Danger" #loadingButton19="tsLoading"></button>
  <button (click)="showLoading(loadingButton20)" ts-loading class="btn btn-lg btn-outline-warning" title="Warning" #loadingButton20="tsLoading"></button>
  <button (click)="showLoading(loadingButton21)" ts-loading class="btn btn-lg btn-outline-info" title="Info" #loadingButton21="tsLoading"></button>
  <button (click)="showLoading(loadingButton22)" ts-loading class="btn btn-lg btn-outline-light" title="Light" #loadingButton22="tsLoading"></button>
  <button (click)="showLoading(loadingButton23)" ts-loading class="btn btn-lg btn-outline-dark" title="Dark" #loadingButton23="tsLoading"></button>`,
  ]

  // show button loading
  showLoading(tsLoadingCom: any): void {
    setTimeout(_ => {
      tsLoadingCom.complete = true
    }, 2000)
  }
}
