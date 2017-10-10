import { Injectable } from '@angular/core';
import { Task, TaskQuery, TaskHandle } from './../classes/task.class';
import { UrlTool } from './../classes/url.class';
import { OSSUploadDatas } from './../interfaces/oss-params.interface';
import { TSUploadingProgress } from './../classes/upload.class';

declare const window: any

@Injectable()
export class OssService {

    token(host: string, params: { [key: string]: string } = {}): Task {
        return new Task(handel => {
            const request = new XMLHttpRequest()
            request.onload = (response: any) => { handel.ready(response.target) }
            request.onerror = (error: any) => { console.error(error) }
            request.open('GET', host + UrlTool.parse(params))
            request.send()
        })
    }

    upload(params: OSSUploadDatas): Task {
        return new Task(handel => {
            const formData = new FormData()
            const request = new XMLHttpRequest()
            request.open('post', params.host)
            formData.append('name', params.name)
            formData.append('key', params.dir + '/${filename}')
            formData.append('policy', params.policy)
            formData.append('OSSAccessKeyId', params.accessid)
            formData.append('success_action_status', '200')
            formData.append('signature', params.signature)
            formData.append('file', params.file)
            request.onload = (response: any) => {
                response.target.status === 200 ? handel.ready(new TSUploadingProgress(true, 100)) : handel.ready(new TSUploadingProgress(false, -1))
            }
            request.upload.onprogress = (event: any) => { handel.ready(new TSUploadingProgress(false, Math.round(event.loaded / event.total * 100))) }
            request.onerror = (error: any) => { console.error(error); handel.ready(new TSUploadingProgress(false, -1)) }
            request.send(formData)
        })
    }
}
