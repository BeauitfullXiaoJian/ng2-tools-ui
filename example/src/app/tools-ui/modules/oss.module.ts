import { NgModule, ModuleWithProviders } from '@angular/core';
import { OssService } from './../services/oss.service';


@NgModule({
  imports: [

  ],
  declarations: [

  ],
  exports: [

  ]
})
export class OSSModule {

  constructor() { }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: OSSModule,
      providers: [
        OssService
      ]
    }
  }
}
