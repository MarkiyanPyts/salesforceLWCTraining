import { LightningElement } from 'lwc';
import getAllContacts from "@salesforce/apex/ContactManager.getContact";

export default class FetchRecordsViaApex2 extends LightningElement {
    numberOfRecords;
    contacts;

    get responseReceived(){
        if(this.contacts){
            return true;
        }
        return false;
    }

    NumberOfContactsChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

   getContacts(event) {
        getAllContacts({numberOfRecords: this.numberOfRecords})
        .then(result => {
            this.contacts = result;
        })
        .catch(error => {
            console.log('error getting contacts: ', error.body.message);
        });
    }
}