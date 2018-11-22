class Student extends Person {
    constructor(profileInformation, course, contacts, activities, scores) {
        this.studentID = 0;
        this.profileInformation = profileInformation;
        console.log('profileInformation :', profileInformation);
        this.course = course;
        this.contacts = [];
        this.activities = activities;
        this.scores = [];
    }

    renderTable() {}
    addContact(contact) {
        contacts.push(contact);
    }

}