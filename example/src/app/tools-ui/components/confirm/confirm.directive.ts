import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ts-confirm-host]',
})
export class ConfirmDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
