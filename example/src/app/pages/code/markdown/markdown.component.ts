import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  content = `
  \`\`\`html
  <div></div>
  \`\`\`
  `

  constructor() { }

  ngOnInit() { }

}
