import { Component } from '@angular/core';

@Component({
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
})
export class FileComponent {

  file: File

  codes = [
    `<input ts-file #tsFile='tsFile' class="d-none" type="file" (fileChange)="file=$event">
  <button (click)="tsFile.openFileDialog()" class="btn btn-dark" type="button">
    <ts-icon name="folder-o" size="lg"></ts-icon>Open File
  </button>
  <div class="btn-group ml-3" role="group" aria-label="Basic example">
    <button (click)="tsFile.openFileDialog()" class="btn btn-dark" type="button"><ts-icon name="folder-o" size="lg"></ts-icon>Open File</button>
    <button (click)="tsFile.removeFile()" class="btn btn-danger"><ts-icon name="trash-o" size="lg"></ts-icon></button>
  </div>
  <pre *ngIf="!!file" class="text-primary">
    FileName : {{file.name}}
    FileSize : {{file.size}}
    FileType : {{file.type||'unknown'}}
    FileDate : {{file.lastModifiedDate}}
  </pre>`,
    `file: File`
  ]

}
