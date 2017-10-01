import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TSPirsmModule, TSInputModule, TSTabModule } from './../../tools-ui'

import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  imports: [
    CommonModule,
    TSPirsmModule,
    TSInputModule,
    TSTabModule,
    RouterModule.forChild([
      { path: 'text', component: TextComponent },
      { path: 'video', component: VideoComponent },
    ])
  ],
  declarations: [
    TextComponent,
    VideoComponent,
  ]
})
export class InputModule { }