import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ts-video',
  templateUrl: './input-video.component.html',
})
export class InputVideoComponent implements OnChanges {

  constructor(private sanitizer: DomSanitizer) { }

  @Input() src: string | SafeResourceUrl

  @Input() videoStyle: any

  @Input() btnClass: string

  @Input() title: string

  @Output() onChange: EventEmitter<Blob> = new EventEmitter<Blob>()

  showVideo: boolean = false

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.src) {
      this.showVideo = true
      this.src = !changes.src.firstChange ? changes.src.currentValue : this.src
    }
  }

  changeFile(files: Blob[]) {
    if (files.length > 0) {
      this.onChange.emit(files[0])
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(files[0]))
      this.showVideo = true
    }
  }

  cleanInput() {
    this.src = ""
    this.showVideo = false
    this.onChange.emit(null)
  }

}
