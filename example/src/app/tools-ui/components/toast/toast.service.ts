import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { ToastComponent } from './toast.component';

@Injectable()
export class ToastService {

    private baseComponent: ComponentFactory<ToastComponent>
    private windowCmptRef: ComponentRef<ToastComponent>
    private defaultPosition = 'bottom-0 right-0'
    private defaultBgClass = 'alert-success'
    private defaultTimeOut = 1000

    constructor(private applicationRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) { }

    private init() {
        if (this.baseComponent != undefined || this.baseComponent != null) return
        this.baseComponent = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
        this.windowCmptRef = this.baseComponent.create(this.injector)
        this.applicationRef.attachView(this.windowCmptRef.hostView)
        const containerEl = document.querySelector('body')
        containerEl.appendChild(this.windowCmptRef.location.nativeElement);
    }

    config(options: { timeOut: number, positionClass: string }): ToastService {
        this.defaultPosition = options.positionClass
        this.defaultTimeOut = options.timeOut
        return this
    }

    setTimeOut(timeOut: number) {
        this.defaultTimeOut = timeOut
        return this
    }

    setPositionClass(positionClass: string) {
        this.defaultPosition = positionClass
        return this
    }

    create(title: string, message: string, options?: { bgClass?: string, positionClass?: string, closeClass?: string, timeOut?: number }) {
        this.init()
        this.windowCmptRef.instance.title = title
        this.windowCmptRef.instance.message = message
        if (options != undefined && options != null) {
            this.windowCmptRef.instance.bgClass = options.bgClass || this.defaultBgClass
            this.windowCmptRef.instance.closeClass = options.closeClass || ''
            this.windowCmptRef.instance.timeOut = options.timeOut || this.defaultTimeOut
            this.windowCmptRef.instance.positionClass = options.positionClass || this.defaultPosition
        }
        this.windowCmptRef.instance.play()
    }

    primary(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-primary', closeClass: 'text-primary', positionClass: options.positionClass || this.defaultPosition })
    }

    secondary(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-secondary', closeClass: 'text-secondary', positionClass: options.positionClass || this.defaultPosition })
    }

    success(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-success', closeClass: 'text-success', positionClass: options.positionClass || this.defaultPosition })
    }

    danger(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-danger', closeClass: 'text-danger', positionClass: options.positionClass || this.defaultPosition })
    }

    warning(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-warning', closeClass: 'text-warning', positionClass: options.positionClass || this.defaultPosition })
    }

    info(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-info', closeClass: 'text-info', positionClass: options.positionClass || this.defaultPosition })
    }

    light(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-light', positionClass: options.positionClass || this.defaultPosition })
    }

    dark(title: string, message: string, options: { positionClass?: string } = {}) {
        this.create(title, message, { bgClass: 'alert-dark', positionClass: options.positionClass || this.defaultPosition })
    }

}
