import { Component } from '@angular/core';
import { UploadResult, TSUploadResult, VideoConfig, TSOssService, OSSUploadDatas, UploadingProgress } from './../../../tools-ui';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';;

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  ossHost = ''

  video: File

  config: VideoConfig = {
    useUploader: true, uploaderTitle: 'Upload', auto: false, uploader: new Observable<UploadResult | UploadingProgress>(obs => {
      if (this.video) {
        this.oss.token('http://zrwc.cool1024.com:8080/oss/file/upload', { dir: 'hello1024' }).next(params => {
          let token = JSON.parse(JSON.parse(params.response).datas)
          token.file = this.video
          token.name = this.video.name
          this.oss.upload(token).next(params => {
            if (params.ready == true) {
              obs.next(new TSUploadResult(`${token.host}/${token.dir}/${token.file.name}`, true, ""))
              obs.complete()
            }
            if (params.loaded === -1) {
              obs.next(new TSUploadResult(null, false, "uploda error"))
              obs.complete()
            }
            if (params.loaded >= 0) {
              obs.next(params)
            }
          })
        })
      }
    })
  }

  codes = [
    ` <ts-video btnClass="btn-secondary" src="http://ng.cool1024.com/mmd.mp4" (onChange)="video=$event" [config]="config"></ts-video>
   <p class="bg-dark text-light p-2">{{video?'FileName : '+video.name:'please click open file button'}}</p>`,
    `config: VideoConfig = {
      useUploader: true, 
      uploaderTitle: 'Upload',
      uploader: new Observable<UploadResult>(obs => {...})
  }`,
    `interface VideoConfig {
    useUploader?: boolean//true:show the upload button(default value is false)
    uploaderTitle?: string//upload button title(useUploader must be true)
    uploader?: Observable<UploadResult | UploadingProgress>,
    auto?: boolean,//true where auto upload your file(if auto is true,the useUploader will be false)
}`
  ]

  constructor(private oss: TSOssService) { }

}
