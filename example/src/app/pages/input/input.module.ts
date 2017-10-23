import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TSPrismModule, TSInputModule, TSTabModule, TSIconModule, TSCheckboxModule ,TSDropdownModule} from './../../tools-ui';

import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';
import { ImageComponent } from './image/image.component';
import { FileComponent } from './file/file.component';
import { NumberComponent } from './number/number.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    FormsModule,
    TSPrismModule,
    TSInputModule,
    TSIconModule,
    TSTabModule,
    TSCheckboxModule,
    TSDropdownModule,
    RouterModule.forChild([
      { path: 'text', component: TextComponent },
      { path: 'video', component: VideoComponent },
      { path: 'image', component: ImageComponent },
      { path: 'file', component: FileComponent },
      { path: 'number', component: NumberComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'dropdown', component: DropdownComponent },      
    ])
  ],
  declarations: [
    TextComponent,
    VideoComponent,
    ImageComponent,
    FileComponent,
    NumberComponent,
    CheckboxComponent,
    DropdownComponent,
  ]
})
export class InputModule { }