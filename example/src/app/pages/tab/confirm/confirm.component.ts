import { Component, OnInit } from '@angular/core';
import { TSConfirmService, TSToastService } from './../../../tools-ui';

@Component({
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnInit {

  log = ''

  constructor(private confirmService: TSConfirmService, private toastService: TSToastService) { }

  ngOnInit() { }

  showPrimaryConfirm() {
    const listener = this.confirmService.primary('primary', '...')
    listener.next(_ => this.addLog('primary'))
  }
  showSecondaryConfirm() {
    const listener = this.confirmService.secondary('secondary', '...')
    listener.next(_ => this.addLog('secondary'))
  }
  showSuccessConfirm() {
    const listener = this.confirmService.success('success', '...')
    listener.next(_ => this.addLog('success'))
  }
  showDangerConfirm() {
    const listener = this.confirmService.danger('danger', '...')
    listener.next(_ => this.addLog('danger'))
  }
  showWarningConfirm() {
    const listener = this.confirmService.warning('warning', '...')
    listener.next(_ => this.addLog('warning'))
  }
  showInfoConfirm() {
    const listener = this.confirmService.info('info', '...')
    listener.next(_ => this.addLog('info'))
  }
  showLightConfirm() {
    const listener = this.confirmService.light('light', '...')
    listener.next(_ => this.addLog('light'))
  }
  showDarkConfirm() {
    const listener = this.confirmService.dark('dark', '...')
    listener.next(_ => this.addLog('dark'))
  }

  addLog(type: string) {
    this.log += `
    ${type}:confirm
    `
  }

  showToast() {
    this.toastService.success("Success", "Aww yeah, you successfully read this important alert message .")
  }

}
