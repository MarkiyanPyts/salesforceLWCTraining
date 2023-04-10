import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    message;

    @api
    changeMessage(strString) {
        this.message = strString.toUpperCase();
    }
}