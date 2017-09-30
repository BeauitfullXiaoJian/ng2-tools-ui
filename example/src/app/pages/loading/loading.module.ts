import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TSPirsmModule, TSLoadingModule } from './../../tools-ui';

import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule,
    TSLoadingModule,
    TSPirsmModule,
    RouterModule.forChild([
      { path: 'button', component: ButtonComponent },
      { path: 'image', component: ImageComponent },
    ])
  ],
  declarations: [
    ButtonComponent,
    ImageComponent,
  ]
})
export class LoadingModule { }
