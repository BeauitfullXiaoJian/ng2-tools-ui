import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

const WEEK_DAY_NUM = 7
const MIN_YEAR = 1000
const MIN_MONTH = 1
const MAX_MONTH = 12

@Component({
  selector: 'ts-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  exportAs: "datePicker"
})
export class DatepickerComponent implements OnInit {


  @Input() weekTitles: string[]

  @Input() monthTitles: string[]

  @Input() activeDate: { year: number, month: number, day: number }

  @Input() btnClass: string

  @Input() textClass: string

  @Input() activeClass: string

  @Output() activeDateChange = new EventEmitter<{ year: number, month: number, day: number }>()

  year: number

  month: number

  day: number

  show: boolean

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

  get yearList(): Array<number> {
    let years = []
    for (let i = 0; i < 3; i++) {
      years.push(this.year - 3 + i)

    }
    years.push(this.year)
    for (let i = 0; i < 3; i++) {
      years.push(this.year + 1 + i)
    }
    return years
  }

  constructor() {

    //labels
    this.weekTitles = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    this.monthTitles = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    //tody
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.day = date.getDate()

    //active day
    this.activeDate = { year: this.year, month: this.month, day: this.day }

    //style
    this.btnClass = "btn-dark"
    this.textClass = "text-dark"
    this.activeClass = "bg-dark text-light"
    this.show = false
  }

  ngOnInit() {
    if (this.activeDate === undefined || this.activeDate === null) {
      this.activeDate = { year: this.year, month: this.month, day: this.day }
    }
  }

  getMonth(month: number): string {
    return this.monthTitles[month - 1]
  }

  setDay(day: number): void {
    if (day <= 0) return
    this.activeDate.year = this.year
    this.activeDate.month = this.month
    this.activeDate.day = day
    this.activeDateChange.emit(this.activeDate)
  }

  isActiveDay(day: number): boolean {
    return (this.activeDate.year == this.year && this.activeDate.month == this.month && this.activeDate.day == day)
  }

  nextMonth() {
    if (this.month < MAX_MONTH) {
      this.month++
    }
    else {
      this.year++
      this.month = MIN_MONTH
    }
  }

  prevMonth() {
    if (this.month > MIN_MONTH) {
      this.month--
    }
    else if (this.year > MIN_YEAR) {
      this.year--
      this.month = MAX_MONTH
    }
  }

  nextYear() {
    this.year++
  }

  prevYear() {
    if (this.year > MIN_YEAR) {
      this.year--
    }
  }

  toggle() {
    this.show = !this.show
  }

}
