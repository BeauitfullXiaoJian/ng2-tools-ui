import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TSPrismModule, TSIconModule, TSTabModule } from './../../tools-ui';
import { ExampleComponent } from './example/example.component';



@NgModule({
  imports: [
    CommonModule,
    TSIconModule,
    TSPrismModule,
    TSTabModule,
    RouterModule.forChild([
      { path: 'example', component: ExampleComponent },
    ])
  ],
  declarations: [
    ExampleComponent
  ]
})
export class IconModule { }
