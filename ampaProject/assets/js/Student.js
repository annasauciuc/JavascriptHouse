// Create an object Student with the next properties
//     -
//     studentID -
//     profileInformation -
//     course -
//     parents -
//     activities -
//     scores

//     "Profileinformation"
// will be an object of type "Person"
// "Parents"
// will be an array of object of type "Person"
// "Activities"
// will be an array of object of type "Activity"
// "Scores"
// will be an array of object of type "Score"




function Student(studentID, profileInformation, course, parents, activities, scores) {
    this.studentID = studentID;
    this.profileInformation = [];
    this.course = course;
    this.parents = [];
    this.activities = [];
    this.scores = [];

}