import { Component } from '@angular/core';
import { TSModalService } from './../../../tools-ui';
import { TestModalComponent } from './test-modal.component';

@Component({
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    constructor(private modalService: TSModalService) { }
    openModal() {
        const listener = this.modalService.create(TestModalComponent).open()
        this.modalService.modal.instance.message = { name: 'Hello1024', text: 'Good luck~' }
        listener.next(params => {
            console.log(params)
        })
    }
}
