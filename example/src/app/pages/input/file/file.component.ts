import { Component } from '@angular/core';

@Component({
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
})
export class FileComponent {

  file: File

  codes = [
    `<div class="input-group">
      <input name="file" #tsFile='tsFile' ts-file class="form-control" placeholder="No file selected" (onChange)="file=$event" type="text">
      <span class="input-group-btn">
          <div class="btn-group" role="group" aria-label="Basic example">
              <button (click)="tsFile.openFileDialog()" class="btn btn-dark" type="button"><ts-icon name="folder-o" size="lg"></ts-icon>Open File</button>
              <button (click)="tsFile.removeFile()" class="btn btn-danger"><ts-icon name="trash-o" size="lg"></ts-icon></button>
            </div>
      </span>
  </div>
  <br>
  <pre *ngIf="!!file" class="text-primary">
    FileName : {{file.name}}
    FileSize : {{file.size}}
    FileType : {{file.type||'unknown'}}
    FileDate : {{file.lastModifiedDate}}
  </pre>`,
    `file: File`
  ]

}
