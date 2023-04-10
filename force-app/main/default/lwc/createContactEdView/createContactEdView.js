import { LightningElement } from 'lwc';

export default class CreateContactEdView extends LightningElement {
    recordId;

    createContact(event) {
        this.recordId = event.detail.id;
    }
}