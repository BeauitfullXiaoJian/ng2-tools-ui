import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TSPrismModule, TSTabModule, TSModalModule ,TSOpenCardModule} from './../../tools-ui';
import { ExampleComponent } from './example/example.component';
import { ModalComponent } from './modal/modal.component';
import { SimpleModalComponent } from './modal/simple-modal.component';
import { TestModalComponent } from './modal/test-modal.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    FormsModule,
    TSTabModule,
    TSPrismModule,
    TSModalModule,
    TSOpenCardModule,
    RouterModule.forChild([
      { path: 'example', component: ExampleComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'card', component: CardComponent },      
    ])
  ],
  declarations: [
    ExampleComponent,
    ModalComponent,
    TestModalComponent,
    SimpleModalComponent,
    CardComponent,
  ],
  entryComponents: [
    TestModalComponent,
    SimpleModalComponent,
  ]
})
export class TabModule { }
