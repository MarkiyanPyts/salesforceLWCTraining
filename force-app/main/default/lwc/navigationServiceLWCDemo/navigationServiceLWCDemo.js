import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationServiceLWCDemo extends NavigationMixin(LightningElement) {
   @api recordId;

   navigateToNewRecordPage() {
      this[NavigationMixin.Navigate]({
         type: 'standard__recordPage',
         attributes: {
            "recordId": this.recordId,
            "objectAPIName": 'Account',
            "actionName": 'new'
         }
      });
   }

   editRecordPage() {
      this[NavigationMixin.Navigate]({
         type: 'standard__recordPage',
         attributes: {
            "recordId": this.recordId,
            "objectAPIName": 'Account',
            "actionName": 'edit'
         }
      });
    }

    viewRecordPage() {
      this[NavigationMixin.Navigate]({
         type: 'standard__recordPage',
         attributes: {
            "recordId": this.recordId,
            "objectAPIName": 'Account',
            "actionName": 'view'
         }
      });
    }

    navigateToAccountRecentView() {
      this[NavigationMixin.Navigate]({
         type: 'standard__objectPage',
         attributes: {
            "objectApiName": 'Account',
            "actionName": 'list'
         },
         state: {
            "filterName": 'Recent'
         }
      });
    }

    navigateToRelatedListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                "recordId": this.recordId,
                "objectApiName": 'Account',
                "relationshipApiName": 'Contacts',
                "actionName": 'view'
            },
            state: {
                "filterName": 'Recent'
            }
        });
    }

    navigateToAccountObject() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                "objectApiName": 'Account',
                "actionName": 'home'
            }
        });
    }
    navigateToContactObject() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                "objectApiName": 'Contact',
                "actionName": 'home'
            }
        });
    }
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                "url": 'https://www.salesforce.com'
            }
        });
    }
    navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                "pageName": 'chatter'
            }
        });
    }
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                "pageName": 'home'
            }
        });
    }
}