
import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  template: `
  <div *ngIf="show" [@toastAnimate] class="d-flex fixed-top h-100 w-100">
    <div class="d-flex" [ngClass]="{'align-self-centerd-flex w-100':position==='center'}">
      <div class="alert alert-success" role="alert" style="width:20rem;" *ngIf="show" [@toastAnimate] [ngClass]="{'m-auto':position==='center'}">
        <h4 class="alert-heading">{{title}}
          <button (click)="show = false" type="button" class="close pull-right {{closeClass}}" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </h4>
        <hr class="mb-0">
        <p class="mb-0 mt-0">{{message}}</p>
      </div>
    </div>
  </div>
  `,
  styles: [
    '.close {cursor:pointer;}',
    '.btn-link {text-decoration:none;cursor:pointer;}',
  ],
  animations: [
    trigger('toastAnimate', [
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])]
})
export class ToastComponent {

  @Input() title: string

  @Input() message: string

  @Input() bgClass: string

  @Input() closeClass: string

  @Input() position: string

  @Input() timeOut: number

  show = true

  constructor() {
    this.position = 'center'
  }

  play() {
    this.show = true
    // setTimeout(_ => this.show = false, this.timeOut)
  }

}
