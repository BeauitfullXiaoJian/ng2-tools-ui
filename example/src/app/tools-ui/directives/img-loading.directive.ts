import { Component, ElementRef, Directive } from '@angular/core';

@Directive({
    selector: `img[ts-loading]`,
    host: {
        '(error)': 'setError()',
        '(load)':'setLoad()'
    },
    inputs: ['default']
})
export class ImgLoadingDirective {

    default = ''

    lock = false

    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.backgroundColor = '#ccc'
    }

    setLoad(){
        this.elementRef.nativeElement.style.backgroundColor = ''
    }

    setError() {
        if (this.lock) return
        this.lock = true
        this.elementRef.nativeElement.src = this.default
    }
}