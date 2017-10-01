import { Component } from '@angular/core';

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  video: Blob

  codes = [
    `<ts-video btnClass="btn-secondary" src="http://ng.cool1024.com/mmd.mp4" (onChange)="video=$event"></ts-video>
  <p class="bg-dark text-light p-2">{{video?'FileName : '+video.name:'please click open file button'}}</p>`
  ]
}
