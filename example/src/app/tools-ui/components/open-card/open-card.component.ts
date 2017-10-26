import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'ts-open-card',
  template: `
  <div class="text-center"><img [@sizeState]="status" [@cardRotate]="status" [@flyInOut]="status" (click)="toggle()" src="/assets/images/1.jpg"></div>
  `,
  animations: [trigger('sizeState', [
    state('active', style({
      width: "10%",
      height: "10%"
    })),
    state('default', style({
      width: "100%",
      height: "100%"
    })),
    transition('default <=> active', animate('100ms ease-in')),
  ]),trigger('cardRotate', [
    state('active', style({
      transform:"rotate(0deg)",
    })),
    state('default', style({
      transform:"rotate(90deg)",
    })),
    transition('default <=> active', animate('100ms ease-in')),
  ]),
  trigger('flyInOut', [
    state('active', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])]
})
export class OpenCardComponent {

  constructor() { }

  status = "active"

  toggle() {
    this.status = this.status === 'active' ? 'default' : 'active'
  }

}
