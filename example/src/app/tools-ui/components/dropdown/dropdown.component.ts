import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() open: boolean
  @Input() btnClass: string
  @Input() items: Array<string | { value: any, text: string }>
  @Input() title: string
  @Input() select: boolean
  @Input() useNumber: number
  @Input() value: any
  @Output() valueChange = new EventEmitter<any>()


  @ViewChild('DropdownToggle') dropdownToggle: ElementRef
  @ViewChild('DropdownMenu') dropdownMenu: ElementRef

  constructor() {
    this.open = false
    this.btnClass = 'btn-dark'
    this.title = "Dropdown"
    this.items = []
    this.select = false
    this.useNumber = -1
  }

  openDropdown() {
    this.open = true
    this.dropdownMenu.nativeElement.style.transform = `translate3d(0px, ${this.dropdownToggle.nativeElement.clientHeight + 4}px, 0px)`
  }

  closeDropdown() {
    if (this.open == false) return
    this.open = false
  }

  trycloseDropdown($event) {
    if ($event.explicitOriginalTarget.className === "dropdown-item") {
      $event.explicitOriginalTarget.click()
      return
    }
    this.closeDropdown()
  }

  setValue(item: { value: any, text: string }) {
    if (this.select) {
      this.title = item.text
    }
    this.value = item.value
    this.valueChange.emit(item.value)
  }

  get itemsList(): Array<{ value: any, text: string }> {
    let items = []
    if (this.useNumber >= 0) {
      let i = this.useNumber
      this.items.forEach(e => {
        if (typeof e != 'string') {
          console.error('useNumber>=0,items element must be a string')
        }
        else {
          items.push({ value: i++, text: e })
        }
      })
    }
    else if (this.items.length > 0) {
      this.items.forEach(e => {
        items.push(typeof e === 'string' ? { value: e, text: e } : e)
      })
    }
    return items
  }

  get realTitle(): string {
    if (this.select === true) {
      return (this.value!=undefined&&this.value!=null) ? function (that:any) {
        let title = ""
        let items = that.itemsList
        for (let i = 0; i < items.length; i++) {
          if (items[i].value == that.value) {
            title = items[i].text
          }
        }
        return title
      }(this) : this.title
    }
    return this.title
  }

}
