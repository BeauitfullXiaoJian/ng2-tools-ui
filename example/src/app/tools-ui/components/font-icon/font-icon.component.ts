
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ts-icon',
  template: `<i class="fa fa-fw fa-{{name}} {{!size?'':'fa-'+size}}"></i>`,
})
export class IconComponent {
  @Input() name: string
  @Input() size: string
}
