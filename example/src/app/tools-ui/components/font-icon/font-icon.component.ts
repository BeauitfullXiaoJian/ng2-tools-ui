
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ts-icon',
  template: `<i class="fa fa-fw {{name}}"></i>`,
})
export class IconComponent {
  @Input() name: string
}
