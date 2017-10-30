import { Component } from '@angular/core';
import { Pagination } from './../../../tools-ui';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  pagination: Pagination

  constructor() {
    this.pagination = new Pagination(100, 3)
  }


  codes = [
    `<ts-pagination colors="btn-dark" [(pagination)]="pagination" startTitle="Start" prevTitle="Prev" nextTitle="Next" endTitle="End" (pageChange)="pageChanged($event)"></ts-pagination>
  <ts-pagination colors="btn-primary,btn-secondary" [(pagination)]="pagination" startTitle="Start" prevTitle="Prev" nextTitle="Next" endTitle="End" (pageChange)="pageChanged($event)"></ts-pagination>
  <ts-pagination colors="btn-primary,btn-secondary,btn-warning" [(pagination)]="pagination" startTitle="Start" prevTitle="Prev" nextTitle="Next" endTitle="End" (pageChange)="pageChanged($event)"></ts-pagination>
  <ts-pagination colors="btn-primary,btn-secondary,btn-warning,btn-danger,btn-info" [(pagination)]="pagination" startTitle="Start" prevTitle="Prev" nextTitle="Next" endTitle="End" (pageChange)="pageChanged($event)"></ts-pagination>
  <pre>{{pagination|json}}</pre>`,
    `...
  pagination = new Pagination(100)
  ...
  pageChanged(page: pagination) {
    
  }`,
    `export class Pagination {
    
    constructor(public total: number = 0, public page: number = 1, public limit = 10) { }

    //get pagination offset
    get offset(): number

    //get pagination params
    get pageData(): { [key: string]: number }

    //get pagination params with search params or other params
    getpageDataWith(params: any = {}): { limit: number, offset: number, [key: string]: string | number }

    //max page number value
    get maxPage(): number
      
    //clean object,setting default value
    reset(): void {}

    //has next page
    hasNext(): boolean {}

    //has previous page
    hasPrev(): boolean {}

    //copy object
    clone(): Pagination {}
  }`
  ]

  pageChanged(pagination: Pagination) {

  }

}