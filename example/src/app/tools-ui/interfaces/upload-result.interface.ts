export interface UploadResult {
    source: string,
    result: boolean,
    message: string
}

export interface UploadingProgress {
    ready: boolean,
    loaded: number
}