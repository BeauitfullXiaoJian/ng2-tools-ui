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
  <div class="text-center"><img [@sizeState]="size" (click)="toggleSize()" src="/assets/images/1.jpg"></div>
  <div class="text-center"><img [@cardRotate]="rotate" (click)="toggleRotate()" src="/assets/images/2.jpg"></div>
  
  <!--<div style="width:1000px;height:500px;overflow:hidden;white-space :nowrap;">
  <img *ngIf="cardStats[0]=='active'" style="height:500px;width:600px;"  [@flyInOut]="cardStats[0]" src="/assets/images/1.jpg">
  <img *ngIf="cardStats[1]=='active'" style="height:500px;width:600px;"  [@flyInOut]="cardStats[1]" src="/assets/images/2.jpg">
  <img *ngIf="cardStats[2]=='active'" style="height:500px;width:600px;"  [@flyInOut]="cardStats[2]" src="/assets/images/3.jpg">
  </div>  -->
  <button class="btn btn-dark" (click)="next()">Next</button>
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
  ]), trigger('cardRotate', [
    state('active', style({
      transform: "rotate(0deg)",
    })),
    state('default', style({
      transform: "rotate(90deg)",
    })),
    transition('default <=> active', animate('100ms ease-in')),
  ]),
  trigger('flyInOut', [
    // state('default', style({ transform: 'translateX(100%)' })),
    // state('active', style({ transform: 'translateX(-100%)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(1000)
    ]),
    transition('* => void', [
      animate(1000, style({ transform: 'translateX(100%)' }))
    ])
  ])]
})
export class OpenCardComponent {

  constructor() { }

  status = "active"

  size = "active"

  rotate = "active"

  toggleRotate() {
    this.rotate = this.rotate === 'active' ? 'default' : 'active'
  }

  toggleSize() {
    this.size = this.size === 'active' ? 'default' : 'active'

  }

  cardStats = ['active', 'default', 'default']

  next() {
    let activeIndex = 0
    this.cardStats.forEach((e, index) => {
      if (e === 'active') {
        activeIndex = index
      }
      this.cardStats[index] = 'default'
    })
    this.cardStats[activeIndex + 1 > 2 ? 0 : activeIndex + 1] = 'active'
    console.log(this.cardStats)
  }

}
