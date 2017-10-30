import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TSPrismModule, TSLoadingModule, TSProgressModule, TSTabModule } from './../../tools-ui';

import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [
    TSProgressModule,
    TSLoadingModule,
    TSPrismModule,
    TSTabModule,
    RouterModule.forChild([
      { path: 'button', component: ButtonComponent },
      { path: 'image', component: ImageComponent },
      { path: 'progress', component: ProgressComponent },
    ])
  ],
  declarations: [
    ButtonComponent,
    ImageComponent,
    ProgressComponent,
  ]
})
export class LoadingModule { }
