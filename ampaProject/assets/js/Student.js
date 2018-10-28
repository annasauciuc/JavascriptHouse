function Student(profileInformation, course, parents, activities, scores) {
    this.studentID = 0;
    this.profileInformation = profileInformation;
    console.log('profileInformation :', profileInformation);
    this.course = course;
    this.parents = [];
    this.activities = activities;
    this.scores = [];

}