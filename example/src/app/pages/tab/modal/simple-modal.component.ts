import { Component } from '@angular/core';
import { TSModalService } from './../../../tools-ui';

@Component({
    template: `
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
    `,
})
export class SimpleModalComponent {

    constructor(private modalService: TSModalService) { }

    close() {
        this.modalService.close()
    }

    dismiss() {
        this.modalService.dismiss()
    }
}
