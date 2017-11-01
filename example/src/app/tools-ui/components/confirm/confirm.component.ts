
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ts-confirm',
  template: `
  <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-header">Header
    <button type="button" class="close pull-right text-light" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="card-body">
      <h4 class="card-title">Primary card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  `,
})
export class ConfirmComponent {
  @Input() name: string
  @Input() size: string
}
