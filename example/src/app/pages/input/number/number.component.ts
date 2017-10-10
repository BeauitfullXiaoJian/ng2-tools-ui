import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
})
export class NumberComponent implements OnInit {

  number = ""

  regExp = new RegExp(/^[0-9]*[1-9][0-9]*$/)

  constructor() { }

  ngOnInit() { }

}
