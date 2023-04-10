import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class CanvasSubscriber extends LightningElement {
    color;
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('changedColor', this.handleChangeColor, this);
    }

    disconnectedCallback() {
        unregisterListener('changedColor', this.handleChangeColor, this);
    }

    handleChangeColor(colorCode) {
        console.log('colorCode', colorCode);
        this.color = colorCode;
    }

    get colorStyle() {
        return `background-color: ${this.color}`;
    }
}