import { Directive, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: `[ts-flash-loading]`,
  exportAs: 'tsFlash'
})
export class FlashLoadingDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const dom = this.elementRef.nativeElement;
    const flash = document.createElement('div');
    // transform: translate3d(0px, 40px, 0px);
    flash.className = 'text-center text-primary';
    flash.style.backgroundColor = 'rgba(255,255,255,.5)';
    flash.style.height = dom.clientHeight + 'px';
    flash.style.width = dom.clientWidth + 'px';
    flash.style.lineHeight = dom.clientHeight + 'px';
    flash.style.position = 'block';
    flash.style.transform = `translate3d(0px, -${dom.clientHeight}px, 0px)`;
    flash.innerHTML = '<i class="fa fa-spinner fa-pulse"></i>Loading...';
    dom.parentNode.appendChild(flash);
  }


}
