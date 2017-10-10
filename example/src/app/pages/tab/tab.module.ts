import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TSPirsmModule, TSTabModule, TSModalModule } from './../../tools-ui';
import { ExampleComponent } from './example/example.component';
import { ModalComponent } from './modal/modal.component';
import { SimpleModalComponent } from './modal/simple-modal.component';
import { TestModalComponent } from './modal/test-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TSTabModule,
    TSPirsmModule,
    TSModalModule,
    RouterModule.forChild([
      { path: 'example', component: ExampleComponent },
      { path: 'modal', component: ModalComponent },
    ])
  ],
  declarations: [
    ExampleComponent,
    ModalComponent,
    TestModalComponent,
    SimpleModalComponent,
  ],
  entryComponents: [
    TestModalComponent,
    SimpleModalComponent,
  ]
})
export class TabModule { }
