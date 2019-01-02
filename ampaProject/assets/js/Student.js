class Student extends Person {
    constructor(id, firstname, lastname, age, nacionality, address, email, phone, country, profileInformation, course, contacts, activities, scores) {
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