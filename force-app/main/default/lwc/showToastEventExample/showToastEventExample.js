import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ShowToastEventExample extends LightningElement {
    handleSuccess() {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'This is a success message',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    handleWarning() {
        const evt = new ShowToastEvent({
            title: 'Warning',
            message: 'This is a warning message',
            variant: 'warning'
        });
        this.dispatchEvent(evt);
    }

    handleError() {
        const evt = new ShowToastEvent({
            title: 'Error',
            message: 'This is an error message',
            variant: 'error'
        });
        this.dispatchEvent(evt);
    }

    handleInfo() {
        const evt = new ShowToastEvent({
            title: 'Info',
            message: 'This is an info message',
            variant: 'info'
        });
        this.dispatchEvent(evt);
    }
}