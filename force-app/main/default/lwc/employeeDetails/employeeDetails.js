import { LightningElement } from 'lwc';

export default class EmployeeDetails extends LightningElement {
    empDetails = [
        {empName: 'Steve', empAddress: 'NC'},
        {empName: 'John', empAddress: 'NY'},
        {empName: 'Mark', empAddress: 'CA'},
        {empName: 'Raj', empAddress: 'TX'}
    ]
}