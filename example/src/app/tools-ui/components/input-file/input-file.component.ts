import { Component, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: `input[ts-file]`,
  template: `
      <input type="file" class="d-none" #input_file (change)="fileChanged($event.target.files)">
  `,
  host: {
    '(click)': 'openFileDialog()'
  },
  exportAs: 'tsFile'
})
export class InputFileComponent {

  @Output() onChange = new EventEmitter<File>()

  @ViewChild('input_file') inputFile: ElementRef

  constructor(private elementRef: ElementRef) { }

  openFileDialog() {
    this.inputFile.nativeElement.click()
  }

  removeFile() {
    this.elementRef.nativeElement.value = ''
    this.onChange.emit(null)
  }

  private fileChanged(files: File[]) {
    if (files.length > 0) {
      this.elementRef.nativeElement.value = files[0].name
      this.onChange.emit(files[0])
    }
  }

}
