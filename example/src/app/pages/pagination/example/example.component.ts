import { Component } from '@angular/core';
import { Pagination } from './../../../tools-ui';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  constructor() { }

  pagination = new Pagination(100)

  pageChanged(page: number) {
    
  }

}