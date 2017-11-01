import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TSPrismModule, TSTabModule, TSModalModule, TSOpenCardModule, TSConfirmModule, TSConfirmService } from './../../tools-ui';
import { ExampleComponent } from './example/example.component';
import { ModalComponent } from './modal/modal.component';
import { SimpleModalComponent } from './modal/simple-modal.component';
import { TestModalComponent } from './modal/test-modal.component';
import { CardComponent } from './card/card.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    FormsModule,
    TSTabModule,
    TSPrismModule,
    TSModalModule,
    TSOpenCardModule,
    TSConfirmModule,
    RouterModule.forChild([
      { path: 'example', component: ExampleComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'card', component: CardComponent },
      { path: 'confirm', component: ConfirmComponent },
    ])
  ],
  declarations: [
    ExampleComponent,
    ModalComponent,
    TestModalComponent,
    SimpleModalComponent,
    CardComponent,
    ConfirmComponent,
  ],
  entryComponents: [
    TestModalComponent,
    SimpleModalComponent,
  ],
  providers: [
    TSConfirmService
  ]
})
export class TabModule { }
