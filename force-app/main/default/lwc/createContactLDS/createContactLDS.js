import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateContactLDS extends LightningElement {
    contactName;
    contactPhone;
    contactEmail;

    contactNameHandler(event) {
        this.contactName = event.target.value;
    }

    contactEmailHandler(event) {
        this.contactEmail = event.target.value;
    }

    contactPhoneHandler(event) {
        this.contactPhone = event.target.value;
    }

    createContact() {
        const fields = {
            'LastName': this.contactName,
            'Phone': this.contactPhone,
            'Email': this.contactEmail
        };
        const recordInput = { apiName: 'Contact', fields };
        createRecord(recordInput).then(contact => {
           console.log(`Contact created with id: ${contact.id}`)
        }).catch(error => {
            console.log(error.body.message);
        });
    }
}