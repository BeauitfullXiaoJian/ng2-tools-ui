import { Directive, Input, Output, EventEmitter, QueryList, ContentChildren, forwardRef, AfterContentInit } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
@Directive({
  selector: 'ts-checkbox-group',
  inputs: ['values'],
  host: {
    '(click)': 'getGroupValue()'
  },
})
export class CheckboxsDirective implements AfterContentInit {

  @Input() values: Array<any>
  @Output() valuesChange = new EventEmitter<any>()
  @ContentChildren(forwardRef(() => CheckboxComponent)) checkboxList: QueryList<CheckboxComponent>

  constructor() { }

  ngAfterContentInit() {
    const defaultValues = this.getDefaultValues()
    this.values.forEach(value => {
      const checkboxList = this.checkboxList.toArray()
      let i = defaultValues.indexOf(value)
      if (i >= 0) {
        checkboxList[i].checked = true
      }
    })
  }

  getGroupValue() {
    this.values = []
    this.checkboxList.forEach(checkbox => {
      if (checkbox.checked === true) {
        this.values.push(checkbox.value)
      }
    })
    this.valuesChange.emit(this.values)
  }

  getDefaultValues(): Array<any> {
    let values = new Array<any>()
    this.checkboxList.forEach(checkbox => {
      values.push(checkbox.value)
    })
    return values
  }
}
