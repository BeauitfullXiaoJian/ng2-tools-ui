import { Component, OnInit } from '@angular/core';
declare const window:any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var el = document.getElementById('items');
    var sortable = window.Sortable.create(el);
  }

  date = {}
}
