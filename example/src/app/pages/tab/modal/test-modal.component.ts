import { Component } from '@angular/core';
import { TSModalService } from './../../../tools-ui';

@Component({
    template: `
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
    `,
})
export class TestModalComponent {

    message = { name: '', text: '' }

    constructor(private modalService: TSModalService) { }

    close() {
        this.modalService.close(this.message)
    }

    dismiss() {
        this.modalService.dismiss()
    }
}
