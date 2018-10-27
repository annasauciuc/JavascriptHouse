// Create an object college with the next properties. -
//     CollegeID -
//     CollegeName -
//     Students -
//     Activities -
//     Address -
//     PhoneNumber -
//     Director

//     "Director"
// will be an object of type "Person"
// "Students"
// will be an array of object of type "Student"
// "Activities"
// will be an array of object of type "Activity"

// with the next functions


function College(collegeID, collegeName, students, activities, address, phoneNumber, director) {
    this.collegeID = collegeID;
    this.collegeName = collegeName;
    this.students = [];
    this.activities = [];
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.director = director;
    this.addActivity = function(activity) {
        this.activities.push(activity);
    };
    this.addStudent = function(student) {
        this.students.push(student);
    };
    this.getStudentsByActivity = function() {}
    this.getAvailableActivities = function() {}
    this.getUnavailableActivities = function() {}
    this.getActivitiesByDay = function() {}
    this.getActivitiesByPlace = function() {}
    this.getStudentsByCourse = function() {}
    this.getStudentsByAge = function() {}
    this.getStudentsWithBestScore = function() {}
    this.getStudentsWithWorstScore = function() {}
    this.getActivitiesWithBestScore = function() {}
    this.getActivitiesWithWorstScore = function() {}
    this.addParent = function(parent) {
        this.parents.push(parent);
    };
    this.addScore = function(score) {
        this.scores.push(score);
    }



}