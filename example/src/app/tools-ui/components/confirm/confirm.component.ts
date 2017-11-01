
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ts-confirm',
  template: `
  <div class="d-flex fixed-top h-100 w-100" [ngStyle]="{'background-color':bgColor}">
    <div class="align-self-center w-100">
      <div class="card {{cardClass}}" style="max-width: 20rem;margin:auto;">
        <div class="card-header">{{title}}
          <button type="button" class="close pull-right {{closeClass}}" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="card-body">
          <p class="card-text">{{message}}</p>
        </div>
      </div>
    </div>
  </div>
      
  `,
  styles: [
    '.close {cursor:pointer;}'
  ]
})
export class ConfirmComponent {

  @Input() title: string

  @Input() message: string

  @Input() bgColor: string

  @Input() cardClass: string

  @Input() closeClass: string


  constructor() {
    this.title = "Title"
    this.message = "Some quick example text to build on the card title and make up the bulk of the card's content."
    this.bgColor = "rgba(0,0,0,0.2)"
    this.cardClass = "bg-primary text-white"
    this.closeClass = ""
  }
}
