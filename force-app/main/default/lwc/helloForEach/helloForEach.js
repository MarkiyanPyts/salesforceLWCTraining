import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts=[
        {
            id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering'
        },
        {
            id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales'
        },
        {
            id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO'
        },
        {
            id: 4,
            Name: 'Randy Adams',
            Title: 'VP of Marketing'
        }
    ]
};