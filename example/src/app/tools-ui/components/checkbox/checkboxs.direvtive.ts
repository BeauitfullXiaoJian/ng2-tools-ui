import { Directive, Input, Output, EventEmitter, QueryList, ContentChildren, forwardRef } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
@Directive({
  selector: 'ts-checkbox-group',
  inputs: ['values'],
  host: {
    '(click)': 'getGroupValue()'
  },
})
export class CheckboxsComponent {

  @Input() values: Array<any>
  @Output() valuesChange = new EventEmitter<any>()
  @ContentChildren(forwardRef(() => CheckboxComponent)) checkboxList: QueryList<CheckboxComponent>

  constructor() { }

  ngDoCheck() {

    // if (!!simpleChanges.values) {
    console.log(this.checkboxList)
    // const defaultValues = this.getDefaultValues()
    // this.values = simpleChanges.checked.currentValue
    // this.values.forEach(value => {
    //   let i = defaultValues.indexOf(value)
    //   if (i >= 0) {
    //     this.checkboxList[i].checked = true
    //   }
    // })
    // }

  }

  getGroupValue() {
    this.values = []
    let checkboxList = this.checkboxList.toArray()
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
