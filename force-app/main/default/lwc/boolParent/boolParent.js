import { LightningElement } from 'lwc';

export default class BoolParent extends LightningElement {

    constructor () {
         super();
         console.log('constructor on parent is called')
     }
 
     connectedCallback () {
         console.log('connectedCallback on parent is called')
     }
 
     renderedCallback () {
         console.log('renderedCallback on parent is called')
     }
 
     disconnectedCallback () {
         console.log('disconnectedCallback on parent is called')
     }
}