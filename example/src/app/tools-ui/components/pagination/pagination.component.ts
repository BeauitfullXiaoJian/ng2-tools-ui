import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Pagination } from "./../../classes/pagination.class";
@Component({
  selector: 'ts-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  @Input() nextTitle: string

  @Input() prevTitle: string

  @Input() endTitle: string

  @Input() startTitle: string

  @Input() pagination: Pagination

  @Input() btnNum: number

  @Input() collectionSize: number

  @Input() ellipses: boolean

  @Input() page: number

  @Input() pageSize: number


  pages: number[]

  constructor() {

    this.nextTitle = "Next"

    this.prevTitle = "Previous"

    this.endTitle = "End"

    this.startTitle = "Start"

    this.btnNum = 5

    this.pagination = new Pagination()
  }

  ngOnInit() { this.setPages() }

  setPages() {
    this.pages = []
    let pagination = this.pagination.clone()
    let right = 0
    let left = 0
    const maxLeftNum = Math.ceil(this.btnNum / 2)
    if ((pagination.page - maxLeftNum) > 0) {
      left = maxLeftNum
    }
    else {
      left = pagination.page - 1
    }

    const maxRighNum = this.btnNum - left - 1

    if ((pagination.page + maxRighNum) > pagination.maxPage) {
      right = (pagination.maxPage - pagination.page) > 0 ? (pagination.maxPage - pagination.page) : 0
    }
    else {
      right = maxRighNum
    }

    for (let i = 0; i < left; i++) {
      this.pages.push(pagination.page - left + i)
    }
    this.pages.push(pagination.page)
    for (let i = 0; i < right; i++) {
      this.pages.push(pagination.page + i + 1)
    }
  }

}
