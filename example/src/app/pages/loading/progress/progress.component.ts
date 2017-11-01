import { Component } from '@angular/core';

@Component({
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress: number = 0

  ngOnInit() {
    setInterval(_ => { this.progress = this.progress >= 100 ? 0 : this.progress + 1 }, 1000)
  }
}