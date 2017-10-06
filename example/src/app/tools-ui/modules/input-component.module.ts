import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './../components/input-text/input-text.component';
import { InputVideoComponent } from './../components/input-video/input-video.component';
import { InputImageComponent } from './../components/input-image/input-image.component';
import { InputImagesComponent } from './../components/input-images/input-images.component';
import { InputFileComponent } from './../components/input-file/input-file.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputTextComponent,
    InputVideoComponent,
    InputImageComponent,
    InputImagesComponent,
    InputFileComponent,
  ],
  exports: [
    InputTextComponent,
    InputVideoComponent,
    InputImageComponent,
    InputImagesComponent,
    InputFileComponent,
  ]
})
export class InputModule { }
