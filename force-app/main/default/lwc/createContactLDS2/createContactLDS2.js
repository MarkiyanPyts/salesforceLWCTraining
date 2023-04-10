import { LightningElement, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
const fieldsArray=['Contact.LastName','Contact.Phone','Contact.Email']

export default class CreateContactLDS2 extends LightningElement {
    contactName;
    contactPhone;
    contactEmail;

    recordId;
    @wire(getRecord, { recordId: '$recordId', fields: fieldsArray }) contactRecord;

    contactNameChangeHandler(event){
        this.contactName=event.target.value;
    }
    contactPhoneChangeHandler(event){
        this.contactPhone=event.target.value;
    }
    contactEmailChangeHandler(event){
        this.contactEmail=event.target.value;
    }

    createContact() {
        const fields={
            'LastName':this.contactName,
            'Phone':this.contactPhone,
            'Email':this.contactEmail
        };
        const recordInput={apiName:'Contact',fields};
        createRecord(recordInput)
        .then(contact=>{
            this.recordId=contact.id;
            console.log('Contact created with id: '+contact.id);
        })
        .catch(error=>{
            console.log('Error: '+JSON.stringify(error));
        });
    }

    get retContactName(){
        if(this.contactRecord.data){
            return this.contactRecord.data.fields.LastName.value;
        }
        return undefined;
    }
    get retContactPhone(){
        if(this.contactRecord.data){
            return this.contactRecord.data.fields.Phone.value;
        }
        return undefined;
    }
    get retContactEmail(){
        if(this.contactRecord.data){
            return this.contactRecord.data.fields.Email.value;
        }
        return undefined;
    }
}