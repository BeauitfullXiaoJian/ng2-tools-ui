import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'loading', loadChildren: 'app/pages/loading/loading.module#LoadingModule' },
      { path: 'code', loadChildren: 'app/pages/code/code.module#CodeModule' },
      { path: 'input', loadChildren: 'app/pages/input/input.module#InputModule' },      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
