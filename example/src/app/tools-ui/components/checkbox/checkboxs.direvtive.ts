import { Directive, Input, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
@Directive({
  selector: 'ts-checkbox-group',
  host: {
    '(click)': 'test()'
  },
})
export class CheckboxsComponent {

  @Input() values: Array<any>
  @Output() valuesChange = new EventEmitter<any>()
  // contentChildren: QueryList<CheckboxComponent>,

  constructor() { }

  test() {
    // console.log(this.templateRef)
  }

}
