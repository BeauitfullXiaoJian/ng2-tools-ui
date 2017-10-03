import { UploadingProgress, UploadResult } from './../interfaces/upload-result.interface'

export class TSUploadResult implements UploadResult {
    public source: string
    public result: boolean
    public message: string
    constructor(source: string, result: boolean, message: string) {
        this.source = source
        this.result = result
        this.message = message
    }
}

export class TSUploadingProgress implements UploadingProgress {
    public ready: boolean
    public loaded: number
    constructor(ready: boolean, loaded: number) {
        this.ready = ready
        this.loaded = loaded
    }
}