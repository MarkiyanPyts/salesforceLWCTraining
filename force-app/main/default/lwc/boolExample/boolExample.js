import { LightningElement, api } from 'lwc';

export default class BoolExample extends LightningElement {
    @api show = false;

   constructor () {
        super();
        console.log('constructor on child is called')
    }

    connectedCallback () {
        console.log('connectedCallback on child is called')
    }

    renderedCallback () {
        console.log('renderedCallback on child is called')
    }

    disconnectedCallback () {
        console.log('disconnectedCallback on child is called')
    }
}