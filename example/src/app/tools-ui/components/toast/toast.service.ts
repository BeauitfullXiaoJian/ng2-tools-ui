import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { ToastComponent } from './toast.component';

@Injectable()
export class ToastService {


    private baseComponent: ComponentFactory<ToastComponent>
    private windowCmptRef: ComponentRef<ToastComponent>

    constructor(private applicationRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) { }

    private init() {
        if (this.baseComponent != undefined || this.baseComponent != null) return
        this.baseComponent = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
        this.windowCmptRef = this.baseComponent.create(this.injector)
        this.applicationRef.attachView(this.windowCmptRef.hostView)
        const containerEl = document.querySelector('body')
        containerEl.appendChild(this.windowCmptRef.location.nativeElement);
    }

    create(title: string, message: string, options?: { bgClass?: string, positionClass?: string, closeClass?: string, timeOut?: number }) {
        this.init()
        this.windowCmptRef.instance.title = title
        this.windowCmptRef.instance.message = message
        if (options != undefined && options != null) {
            this.windowCmptRef.instance.bgClass = options.bgClass || 'alert-success'
            this.windowCmptRef.instance.closeClass = options.closeClass || ''            
            this.windowCmptRef.instance.timeOut = options.timeOut || 1000
        }
        this.windowCmptRef.instance.play()
    }

    primary(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-primary', closeClass: 'text-primary' })
    }

    secondary(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-secondary', closeClass: 'text-secondary' })
    }

    success(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-success', closeClass: 'text-success' })
    }

    danger(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-danger', closeClass: 'text-danger' })
    }

    warning(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-warning', closeClass: 'text-warning' })
    }

    info(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-info', closeClass: 'text-info' })
    }

    light(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-light', closeClass: 'text-light' })
    }

    dark(title: string, message: string, bgClass?: string) {
        return this.create(title, message, { bgClass: bgClass || 'alert-dark', closeClass: 'text-dark' })
    }

}
