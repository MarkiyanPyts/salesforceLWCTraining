public with sharing class ContactManager {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(Integer numberOfRecords) {
        Integer numberOfRecordsToFetch = numberOfRecords == null ? 20 : numberOfRecords;

        return [select id, LastName, Phone from Contact LIMIT:numberOfRecordsToFetch];
    }
}