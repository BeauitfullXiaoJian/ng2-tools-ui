import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ts-input',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() tstyle: string

  @Input() title: string

  @Input() type: string

  @Input() placeholder: string

  @Input() disabled: boolean

  @Input() name: string

  @Input() errorText: string

  @Input() valid: boolean

  @Input() value: string

  @Output() valueChange: EventEmitter<string>

  constructor() {

    this.valueChange = new EventEmitter<string>()

  }

  setValue(value: string) {
    this.value = value
    this.valueChange.emit(value)
  }

}
