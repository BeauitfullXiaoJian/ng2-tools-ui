import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {


  checkeds = [true, true, true, true, true, true, true, true, true, true, true,]

  constructor() { }

  ngOnInit() { }

}
