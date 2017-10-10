import { Component, Input, OnInit } from '@angular/core';
const WEEK_DAY_NUM = 7

@Component({
  selector: 'ts-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {


  @Input() weekTitles: string[]

  year: number

  month: number

  day: number

  get days(): number[] {
    let date = new Date(this.year, this.month, 0);
    let dayTotal = date.getDate()
    let days = new Array<number>()
    date = new Date(this.year, this.month - 1, 1)
    let week = date.getDay() || WEEK_DAY_NUM
    for (let i = 0; i < week - 1; i++)days.push(0)
    for (let i = 1; i <= dayTotal; i++) days.push(i)
    return days
  }

  get trList(): Array<number[]> {
    let days = this.days
    let groupNum = Math.ceil(days.length / WEEK_DAY_NUM)
    let trs = new Array<number[]>()
    for (let i = 0; i < groupNum; i++) {
      trs[i] = new Array<number>()
      for (let j = 0; j < WEEK_DAY_NUM; j++) {
        trs[i][j] = days[i * WEEK_DAY_NUM + j] || 0
      }
    }
    return trs
  }

  getWeek() {
    let week;
    if (new Date().getDay() == 0) week = "星期日"
    if (new Date().getDay() == 1) week = "星期一"
    if (new Date().getDay() == 2) week = "星期二"
    if (new Date().getDay() == 3) week = "星期三"
    if (new Date().getDay() == 4) week = "星期四"
    if (new Date().getDay() == 5) week = "星期五"
    if (new Date().getDay() == 6) week = "星期六"
    return week
  }
  constructor() {
    this.weekTitles = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    //tody
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.day = date.getDay() + 1
  }

  ngOnInit() { }

}
