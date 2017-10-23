import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { ModalComponent } from './modal.component';
import { Task, TaskHandle } from './../../classes/task.class';

@Injectable()
export class ModalService {

    private show: boolean
    private modalComponent: any
    private baseComponent: ComponentFactory<ModalComponent>
    private windowCmptRef: ComponentRef<ModalComponent>
    private task: Task
    private handel: TaskHandle
    public modal: ComponentRef<any>

    constructor(private applicationRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) { }

    init() {
        if (this.baseComponent != undefined || this.baseComponent != null) return
        this.baseComponent = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
        this.windowCmptRef = this.baseComponent.create(this.injector)
        this.applicationRef.attachView(this.windowCmptRef.hostView)
        const containerEl = document.querySelector('body')
        containerEl.appendChild(this.windowCmptRef.location.nativeElement);
        this.task = new Task(handle => this.handel = handle)
    }

    create(content: any, options?: { size: string }): ModalService {
        this.init()
        this.modalComponent = content
        this.modal = this.windowCmptRef.instance.loadComponent(content)
        if (options !== undefined) {
            this.windowCmptRef.instance.size = options.size || ''
        }
        return this
    }

    close(params?: any) {
        this.windowCmptRef.instance.close()
        this.handel.ready(params)
    }

    dismiss() {
        this.windowCmptRef.instance.close()
    }

    open(): Task {
        this.windowCmptRef.instance.open()
        return this.task
    }
}
