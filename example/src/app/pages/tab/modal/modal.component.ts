import { Component } from '@angular/core';
import { TSModalService, TSDataService } from './../../../tools-ui';
import { TestModalComponent } from './test-modal.component';
import { SimpleModalComponent } from './simple-modal.component';

@Component({
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    providers: [TSDataService]
})
export class ModalComponent {

    message = { name: 'Hello1024', text: 'Good luck~' }

    codes = [
        `
import { Component } from '@angular/core';
import { TSModalService } from '<path>/tools-ui';

@Component({
    template: \`
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" class="close pointer" (click)="dismiss()" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p class="pl-2">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <p class="pl-2">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="dismiss()">Dismiss Modal</button>
            <button type="button" class="btn btn-dark" (click)="close()">Close Modal</button>
        </div>
    \`,
})
export class SimpleModalComponent {

    constructor(private modalService: TSModalService) { }

    close() {
        this.modalService.close()
    }

    dismiss() {
        this.modalService.dismiss()
    }
}`,
        ` 
<div class="pt-3 pb-3">
    <button type="button" class="btn" (click)="openSimpleModal('sm')">Small Modal</button>
    <button type="button" class="btn btn-secondary" (click)="openSimpleModal('md')">Middle Modal</button>
    <button type="button" class="btn btn-dark" (click)="openSimpleModal('lg')">Large Modal</button>
</div>`,
        `
import { TSModalService} from '<path>/tools-ui';
import { SimpleModalComponent } from '<path>/simple-modal.component';

export class ModalComponent {

    ...
    openSimpleModal(size: string) {
        const listener = this.modalService.create(SimpleModalComponent, { size }).open()
    }`,
        `
declarations: [
    ...
    ModalComponent,
    SimpleModalComponent,
],
entryComponents: [
    ...
    SimpleModalComponent,
]
`,
        `
import { Component } from '@angular/core';
import { TSModalService } from './../../../tools-ui';

@Component({
    template: \`
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message to @mdo</h5>
            <button type="button" class="close pointer" (click)="dismiss()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <form>
            <div class="form-group">
            <label for="recipient-name" class="form-control-label">Recipient:</label>
            <input name="name" [(ngModel)]="message.name" type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
            <label for="message-text" class="form-control-label">Message:</label>
            <textarea name="text" [(ngModel)]="message.text" class="form-control" id="message-text"></textarea>
            </div>
        </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="dismiss()"><span>Close</span></button>
            <button type="button" class="btn btn-primary" (click)="close()">Send message</button>
        </div>
    \`,
})
export class InputModalComponent {

    message = { name: '', text: '' }

    constructor(private modalService: TSModalService) { }

    close() {
        this.modalService.close(this.message)
    }

    dismiss() {
        this.modalService.dismiss()
    }
}`,
        `
<button type="button" class="btn btn-info" (click)="openInputModal()">Input Modal</button>
<div class="pt-2"><pre>{{message | json}}</pre></div>`,
        `
import { TSModalService, TSDataService } from '<path>/tools-ui';
import { InputModalComponent } from '<path>/input-modal.component';
...
export class ModalComponent {
    constructor(private modalService: TSModalService, private dataService: TSDataService) { }
    ...
    openInputModal() {
        const listener = this.modalService.create(InputModalComponent).open()
        this.modalService.modal.instance.message = this.dataService.jsonClone(this.message)
        listener.next(params => {
            this.message = params
        })
    }
    ...
`,
        `
declarations: [
    ...
    ModalComponent,
    InputModalComponent,
],
entryComponents: [
    ...
    InputModalComponent,
]
`,
        `
//create a modal component : my-modal.component.ts
import { Component } from '@angular/core';
import { TSModalService } from 'tools-ui';

@Component({
    template: \`
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message to @mdo</h5>
            <button (click)="dismiss()" type="button" class="close pointer" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            {{message}}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="dismiss()">Dismiss</button>
            <button type="button" class="btn btn-primary" (click)="close()">Close</button>
        </div>
    \`,
})
export class MyModalComponent {

    message:string
    
    constructor(private modalService: TSModalService) { }

    dismiss(){

        //just close this modal
        this.modalService.dismiss()
    }

    close(){
        
        //close this modal
        this.modalService.close("close message")
    }
}
`,
`
//create a test page component : test.component.ts
import { Component } from '@angular/core';
import { TSModalService } from 'tools-ui';
import { MyModalComponent } from './my-modal.component.ts';

@Component({
    template: \`
        <button (click)="openModal()"></button>
    \`,
})
export class TestComponent(){

    constructor(private modalService: TSModalService) { }

    openModal(){
        let listener = this.modalService.create(MyModalComponent).open()
        this.modalService.modal.instance.message = "hello world!"
        listener.next(params=>{
            //when the modal close,you will get params
            console.log(param)
        })
    }
}
`
    ]

    constructor(private modalService: TSModalService, private dataService: TSDataService) { }

    openSimpleModal(size: string) {
        const listener = this.modalService.create(SimpleModalComponent, { size }).open()
    }

    openInputModal() {
        const listener = this.modalService.create(TestModalComponent).open()
        this.modalService.modal.instance.message = this.dataService.jsonClone(this.message)
        listener.next(params => {
            this.message = params
        })
    }
}