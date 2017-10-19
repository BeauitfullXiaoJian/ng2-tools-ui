import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  content = `![](http://www.hello1024.top/flat-ui/img/box-image/2.jpg)`

  constructor() { }

  ngOnInit() { }

}
