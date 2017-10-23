import { Component, ElementRef, Directive, AfterViewInit } from '@angular/core';

@Directive({
  selector: `[ts-dropdown]`,
  host: {

  },
  inputs: [

  ],
  exportAs: 'tsDropdown'
})
export class DropdownDirective implements AfterViewInit {

  menusDom: HTMLDivElement

  buttonDom: HTMLButtonElement

  show: boolean

  constructor(private elementRef: ElementRef) {
    this.show = false
  }

  ngAfterViewInit() {
    this.buttonDom = this.elementRef.nativeElement.children[0]
    this.menusDom = this.elementRef.nativeElement.children[1]
    this.buttonDom.addEventListener('click', event => {
      this.toggle()
    })
    this.buttonDom.addEventListener('blur', (event: any) => {
      if (event.explicitOriginalTarget.parentNode != this.menusDom) {
        this.closeMenu()
      }
    })
    this.menusDom.addEventListener('click', event => {
      this.closeMenu()
    })
  }

  toggle() {
    if (this.show === true) {
      this.closeMenu()
    }
    else {
      this.openMenu()
    }
  }

  openMenu() {
    this.show = true
    this.menusDom.style.display = "block"
  }

  closeMenu() {
    this.show = false
    this.menusDom.style.display = "none"
  }

}