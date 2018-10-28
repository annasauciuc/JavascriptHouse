var college = new College();

function switchVisible(visible, event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("visible", visible);
    var home = document.getElementById("tab-home");
    var profile = document.getElementById("tab-profile");
    var contact = document.getElementById("tab-contact");
    var listusers = document.getElementById("tab-listusers");
    var homenav = document.getElementById("nav-home-tab");
    var profilenav = document.getElementById("nav-profile-tab");
    var contactnav = document.getElementById("nav-contact-tab");
    var listusersnav = document.getElementById("nav-listusers-tab");

    switch (visible) {
        //shows home
        case "tab-home":
            home.className = "tab-pane  active";
            homenav.className = "nav-item nav-link  active";
            profile.className = "tab-pane  fade ";
            profilenav.className = "nav-item nav-link disabled";

            break;
            //shows profile
        case "tab-profile":
            home.className = "tab-pane  fade";
            homenav.className = "nav-item nav-link disabled";
            profile.className = "tab-pane  active";
            profilenav.className = "nav-item nav-link active";
        default:
            break;
    }
}



function saveStudent() {

    let id = $("input[name=idstudent]").val();
    console.log('id :', id);
    let course = $("input[name=studentcourse]").val();
    console.log('course :', course);
    let firstname = $("input[name=firstname]").val();
    console.log('firstname :', firstname);
    let lastname = $("input[name=lastname]").val();
    let nacionallity = $("input[name=nacionality]").val();
    let email = $("input[name=email]").val();
    let telephone = $("input[name=telephone]").val();
    let adress = $("input[name=address]").val();
    let country = $("input[name=country]").val();
    let city = $("input[name=city]").val();
    let age = $("#age").val();
    console.log('age :', age);
    let gender = $("input[name=gender]").val();
    var person = new Person(id, firstname, lastname, nacionallity, email, telephone, adress, country, age);
    console.log('person :', person);
    var student = new Student(person, null);
    college.addStudent(student);
    console.log("college", college);
}

function saveActivity() {
    let id = $("input[name=idstudent1]").val();
    console.log('id :', id);
    let activityname = $("input[name=activityname]").val();
    console.log('activityname :', activityname);
    let teachersofactivity = $("input[name=teachersofactivity]").val();
    let daysofactivity = $("input[name=daysofactivity]").val();
    let hoursofthisactivity = $("input[name=hoursofthisactivity]").val();
    let priceofthisactivity = $("input[name=priceofthisactivity]").val();
    let maxstudents = $("input[name=maxstudents]").val();
    let activity = new Activity(id, activityname, teachersofactivity, daysofactivity, hoursofthisactivity, priceofthisactivity, maxstudents);
    console.log('activity :', activity);
    college.addActivity(activity);
    console.log('activity :', activity);
    //var student = new Student(person, null);
    console.log("college", college);
}
$("#saveStudentForm").on("ckick", function() {
    saveStudent();
});
$("#saveActivitiesForm").on("ckick", function() {
    saveActivity();
});