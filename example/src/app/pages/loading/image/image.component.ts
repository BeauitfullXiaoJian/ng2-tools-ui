import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  // code list
  codes=[
    `<img height="400" width="400" class="img-thumbnail rounded-0" src="http://placekitten.com/100/350" ts-loading default="default image url...">`,
    ``,
  ]

  constructor() { }

  ngOnInit() { }

}
