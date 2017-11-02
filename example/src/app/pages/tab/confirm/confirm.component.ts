import { Component, OnInit } from '@angular/core';
import { TSConfirmService, TSToastService } from './../../../tools-ui';

@Component({
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnInit {

  log = ''

  codes = [
    `import { TSConfirmService } from '<path>/tools-ui'
  ...
  constructor(private confirmService: TSConfirmService) { }
  showConfirm(){
    const listener = this.confirmService.primary('primary', 'Aww yeah, you successfully read this important alert message .')
    listener.next( () =>{
      //do some when confirm
    })
  }`,
    `import { TSToastService } from '<path>/tools-ui'
  ...
  constructor(private toastService: TSToastService) { }
  showToast(){
    this.toastService.primary("Primary", "Aww yeah, you successfully read this important alert message .")
  }`,
    `create(
      title: string, //confirm tilte
      message: string, //confirm message
      options?: { 
        bgColor?: string, //confirm window background color , example: 'rgba(0,0,0,0.2)'
        cardClass?: string, //confirm card class
        closeClass?: string, //confirm card close button class
        btnClass?: string // confirm card cancle/confirm button class
      }
  ) => Task `,
    `primary(title: string, message: string, bgColor?: string) => Task`
    ,
    `create(
    title: string, //toast title
    message: string, //toast message
    options?: { 
       bgClass?: string, //toast background class
       positionClass?: string, //toast position class ,example: 'top-0','bottom-0','left-0','right-0'
       closeClass?: string, //toast close button class
       timeOut?: number //toast show time
    }
  ) => void
    `
    ,
    `primary(
      title: string, 
      message: string, 
      options: { 
        positionClass?: string 
      } = {}
    ) => void
      `,
    `config(
        options: {
           timeOut: number, 
           positionClass: string 
          }
        ) => ToastService 
        `,
    `setTimeOut(timeOut: number) => ToastService`,
    `setPositionClass(positionClass: string) => ToastService`
  ]

  constructor(private confirmService: TSConfirmService, private toastService: TSToastService) { }

  ngOnInit() {
    this.toastService.setTimeOut(2000)
  }

  showPrimaryConfirm() {
    const listener = this.confirmService.primary('primary', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('primary'))
  }
  showSecondaryConfirm() {
    const listener = this.confirmService.secondary('secondary', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('secondary'))
  }
  showSuccessConfirm() {
    const listener = this.confirmService.success('success', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('success'))
  }
  showDangerConfirm() {
    const listener = this.confirmService.danger('danger', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('danger'))
  }
  showWarningConfirm() {
    const listener = this.confirmService.warning('warning', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('warning'))
  }
  showInfoConfirm() {
    const listener = this.confirmService.info('info', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('info'))
  }
  showLightConfirm() {
    const listener = this.confirmService.light('light', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('light'))
  }
  showDarkConfirm() {
    const listener = this.confirmService.dark('dark', 'Aww yeah, you successfully read this important alert message .')
    listener.next(_ => this.addLog('dark'))
  }

  showPrimaryToast() {
    this.toastService.primary("Primary", "Aww yeah, you successfully read this important alert message .")
  }
  showSecondaryToast() {
    this.toastService.secondary("Secondary", "Aww yeah, you successfully read this important alert message .")
  }
  showSuccessToast() {
    this.toastService.success("Success", "Aww yeah, you successfully read this important alert message .")
  }
  showDangerToast() {
    this.toastService.danger("Danger", "Aww yeah, you successfully read this important alert message .")
  }
  showWarningToast() {
    this.toastService.warning("Warning", "Aww yeah, you successfully read this important alert message .")
  }
  showInfoToast() {
    this.toastService.info("Info", "Aww yeah, you successfully read this important alert message .")
  }
  showLightToast() {
    this.toastService.light("Light", "Aww yeah, you successfully read this important alert message .")
  }
  showDarkToast() {
    this.toastService.dark("Dark", "Aww yeah, you successfully read this important alert message .")
  }
  showToast(bgClass) {
    this.toastService.create('Diy Toast', 'Aww yeah, you successfully read this important alert message .', { bgClass: `${bgClass} text-light`, positionClass: 'bottom-0 right-0', closeClass: 'text-light' })
  }

  addLog(type: string) {
    this.log += `
    ${type}:confirm
    `
  }

}
