import { UploadingProgress, UploadResult } from './../interfaces/upload-result.interface'
import { SafeResourceUrl } from '@angular/platform-browser';

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

export class TSInputImages {

    private items: Array<{ type: string, file: File, url: string | SafeResourceUrl, uploading: boolean }>

    constructor(images: string = '') {
        this.items = new Array<{ type: string, file: File, url: string | SafeResourceUrl, uploading: boolean }>()
        if (!!images) {
            images.split(',').forEach(url => {
                this.items.push({ type: 'url', file: null, url, uploading: false })
            })
        }
    }

    get urls(): string[] {
        let urls = new Array<string>()
        this.items.forEach(e => {
            if (e.type === 'url') {
                urls.push(<string>e.url)
            }
        })
        return urls
    }

    get files(): File[] {
        let files = new Array<File>()
        this.items.forEach(e => {
            if (e.type === 'file') {
                files.push(e.file)
            }
        })
        return files
    }

    get list(): Array<{ type: string, file: File, url: string | SafeResourceUrl, uploading: boolean }> {
        return this.items
    }

    push(item: { type: string, file: File, url: string | SafeResourceUrl, uploading: boolean }) {
        this.items.push(item)
    }

    remove(index: number) {
        this.items.splice(index, 1)
    }
}