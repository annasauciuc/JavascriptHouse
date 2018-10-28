function Student(profileInformation, course, contacts, activities, scores) {
    this.studentID = 0;
    this.profileInformation = profileInformation;
    console.log('profileInformation :', profileInformation);
    this.course = course;
    this.contacts = [];
    this.activities = activities;
    this.scores = [];
    this.renderTable = function() {}
    this.addContact = function(contact) {
        contacts.push(contact);
    }

}