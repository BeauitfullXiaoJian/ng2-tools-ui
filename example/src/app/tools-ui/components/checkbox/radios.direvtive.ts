import { Directive, Input, Output, EventEmitter, QueryList, ContentChildren, forwardRef, AfterContentInit } from '@angular/core';
import { RadioComponent } from './radio.component';
@Directive({
  selector: 'ts-radio-group',
  inputs: ['values'],
})
export class RadioDirective implements AfterContentInit {

  @Input() value: any
  @Output() valueChange = new EventEmitter<any>()
  @ContentChildren(forwardRef(() => RadioComponent)) radioList: QueryList<RadioComponent>

  constructor() { }

  ngAfterContentInit() {
    const radioList = this.radioList.toArray()
    for (let i = 0; i < this.radioList.length; i++) {
      if (radioList[i].value === this.value) {
        radioList[i].checked = true
      }
      else {
        radioList[i].checked = false
      }
      radioList[i].checkedChange.subscribe(status => this.setRadiosStatus(i, status))
    }
  }


  setRadiosStatus(i: number, status: boolean) {
    const radioList = this.radioList.toArray()
    if (status === false) {
      this.valueChange.emit()
    }
    else {
      radioList.forEach((radio, index) => {
        if (index != i) radio.checked = false
      })
      this.valueChange.emit(radioList[i].value)
    }
  }

}
