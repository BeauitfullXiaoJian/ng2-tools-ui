import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TSOssModule } from './tools-ui';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TSOssModule.forRoot(),
    RouterModule.forRoot([
      { path: 'loading', loadChildren: 'app/pages/loading/loading.module#LoadingModule' },
      { path: 'code', loadChildren: 'app/pages/code/code.module#CodeModule' },
      { path: 'input', loadChildren: 'app/pages/input/input.module#InputModule' },
      { path: 'icon', loadChildren: 'app/pages/icon/icon.module#IconModule' },
      { path: 'tab', loadChildren: 'app/pages/tab/tab.module#TabModule' },
      { path: 'datepicker', loadChildren: 'app/pages/datepicker/datepicker.module#DatepickerModule' },      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
