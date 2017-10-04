import { Component } from '@angular/core';
import { ImageConfig, UploadResult, TSOssService, TSUploadResult, TSInputImages } from './../../../tools-ui';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  image: File

  images: TSInputImages

  config: ImageConfig = {
    useUploader: true,
    uploaderTitle: 'Upload',
    uploader: new Observable<UploadResult>(obs => {
      if (this.image != null || this.image != undefined) {
        this.oss.token('http://zrwc.cool1024.com:8080/oss/file/upload', { dir: 'hello1024' }).next(params => {
          let token = JSON.parse(JSON.parse(params.response).datas)
          token.file = this.image
          token.name = this.image.name
          this.oss.upload(token).next(params => {
            if (params.ready === true) {
              obs.next(new TSUploadResult(`${token.host}/${token.dir}/${token.file.name}`, true, ""))
              obs.complete()
            }
            if (params.loaded === -1) {
              obs.next(new TSUploadResult(null, false, "uploda error"))
              obs.complete()
            }
          })
        })
      }
    })
  }

  codes = [
    `<ts-image src="http://www.hello1024.top/flat-ui/img/box-image/9.jpg" (onChange)="image=$event.file" [config]="config"></ts-image>`,
    `image: File
  config: ImageConfig = {
    useUploader: true,
    uploaderTitle: 'Upload',
    uploader: new Observable<UploadResult>(obs => {...})
  }`,
  `<ts-images src="http://.../1.jpg,http://.../2.jpg,http://.../3.jpg" (onChange)="images=$event"></ts-images>`,
  `images: TSInputImages`,  
  `interface ImageConfig {
      useUploader?: boolean
      uploaderTitle?: string
      uploader?: Observable<UploadResult>,
      auto?: boolean,
  }`,
  `class TSInputImages {
  
        //create

        constructor(images: string = '') {...}
    
        //attribute

        get urls(): string[] {...}
    
        get files(): File[] {...}
    
        //method

        get list(): Array<{ type: string, file: File, url: string | SafeResourceUrl, uploading: boolean }> {...}
    
        push(item: { type: string, file: File, url: string | SafeResourceUrl, uploading: boolean }) {...}
    
        remove(index: number) {...}
  }`,
  ]

  constructor(private oss: TSOssService) { }

}
