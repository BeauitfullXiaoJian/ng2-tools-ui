import { Component } from '@angular/core';
import { Pagination } from './../../../tools-ui';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  pagination: Pagination

  constructor() {
    this.pagination = new Pagination(100, 3)
    console.log(this.pagination.page)
  }


  codes = [
    `<ts-pagination themes="btn-primary" prevTitle="PREV" nextTitle="NEXT" startTitle="START" endTitle="END" (pageChange)="pageChanged($event)" [collectionSize]="pagination.total" [ellipses]="true"></ts-pagination>
  <ts-pagination themes="btn-primary,btn-secondary" prevTitle="PREV" nextTitle="NEXT" startTitle="START" endTitle="END" (pageChange)="pageChanged($event)" [collectionSize]="pagination.total" [ellipses]="true"></ts-pagination>
  <ts-pagination themes="btn-primary,btn-secondary,btn-warning" prevTitle="PREV" nextTitle="NEXT" startTitle="START" endTitle="END"(pageChange)="pageChanged($event)" [collectionSize]="pagination.total" [ellipses]="true"></ts-pagination>
  <ts-pagination themes="btn-primary,btn-secondary,btn-warning,btn-danger,btn-info" prevTitle="PREV" nextTitle="NEXT" startTitle="START" endTitle="END" (pageChange)="pageChanged($event)" [collectionSize]="pagination.total" [ellipses]="true"></ts-pagination>
  <pre>{{pagination|json}}</pre>`,
    `...
  pagination = new Pagination(100)
  ...
  pageChanged(page: number) {
    this.pagination.page = page
  }`
  ]

  pageChanged(page: number) {
    this.pagination.page = page
  }

}