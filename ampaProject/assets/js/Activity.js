// Create an Activity object with the next properties. -
//     ActivityID -
//     ActivityName -
//     Teachers -
//     Days -
//     Hours -
//     Price -
//     MaxStudentsAllow -
//     Students

function Activity(activityID, activityName, teachers, days, hours, price, maxStudentsAllow, students) {
    this.activityID = activityID;
    this.activityName = activityName;
    this.teachers = teachers;
    this.days = days;
    this.hours = hours;
    this.price = price;
    this.maxStudentsAllow = maxStudentsAllow;
    this.students = [];

    this.addStudent = function(student) {
        students.push(student)
    }
}