var college = new College();

function switchVisible(visible, event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("visible", visible);
    var home = document.getElementById("tab-home");
    var profile = document.getElementById("tab-profile");
    var homenav = document.getElementById("nav-home-tab");
    var profilenav = document.getElementById("nav-profile-tab");


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
    var student = new Student(person, course, null);
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
$("#saveStudentForm").on("click", function() {
    saveStudent();
});
$("#saveActivitiesForm").on("click", function() {
    saveActivity();
});
let numerocontacts = 0;

function addContact(event) {
    event.preventDefault();
    event.stopPropagation();
    let contactStudent = $("#contacts")
    console.log('contactStudent :', contactStudent.get());
    let innerInput = "";
    // seeting the global counter to +1
    numerocontacts = numerocontacts + 1;
    innerInput += `<form id="user-form" method="POST" class="needs-validation row  mt-5">
   
  <h5>Student Contact</h5>    
  
   <div class="form-group has-success">
       <label for="idstudent" class="col-sm-2 col-form-label ">Last Name</label>
       <div class="col-sm-10">
           <div class="input-group-prepend">
               <span class="input-group-text" id="inputGroup-sizing"><i class="fas asweome fa-user-tie"></i></span>
               <input type="text" name="idstudent" class="form-control " minlength="3" maxlength="25" pattern="[a-zA-Z\s  ñ]+" value="">
           </div>
       </div>
   </div>
   <div class="form-group has-success">
       <label for="firstname" class="col-sm-12 col-form-label">First Name</label>
       <div class="col-sm-12">
           <div class="input-group-prepend">
               <span class="input-group-text" id="inputGroup-sizing"><i class="fas asweome fa-user-tie"></i></span>
               <input type="text" name="firstname" class="form-control " minlength="3" maxlength="25" pattern="[a-zA-Z\s  ñ]+" value="">
           </div>
       </div>
   </div>
   <div class="form-group  has-success">
       <label for="familygrade" class="col-sm-12 col-form-label">Family Grade</label>
       <div class="col-sm-12">
           <div class="input-group-prepend">
               <span class="input-group-text" id="inputGroup-sizing"><i class="fas asweome fa-user-tie"></i></span>
               <input type="text" name="familygrade" class="form-control " minlength="3" maxlength="25" pattern="[a-zA-Z\s  ñ]+" value="">
           </div>
       </div>
   </div>
   <div class="form-group has-success">
       <label for="lastname" class="col-sm-12 col-form-label">Dni</label>
       <div class="col-sm-12">
           <div class="input-group-prepend">
               <span class="input-group-text" id="inputdefault"><i class="fas asweome fa-user-tie"></i></span>
               <input lang="es-ES" type="text" name="lastname" class="form-control" minlength="3" maxlength="25" pattern="[A-Za-z ñ]+" title="Last name must have 3-15 characters long" value="">
           </div>
       </div>
   </div>
 
   <div class="form-group has-success">
       <label for="email" class="col-sm-12 col-form-label">Email</label>
       <div class="col-sm-12">
           <div class="input-group-prepend">
               <span class="input-group-text" id="in-sizing-default"><i class="fas asweome fa-at"></i></span>
               <input lang="es-ES" type="email" name="email" class="form-control form-control-success" minlength="3" maxlength="25" placeholder="name@example.com">
           </div>
       </div>
   </div>
   <div class="form-group has-success">
       <label for="telephone" class="col-sm-12 col-form-label">Telephone</label>
       <div class="col-sm-12">
           <div class="input-group-prepend">
               <span class="input-group-text" id="inputizing-default"><i class="fas asweome fa-phone-square"></i></span>
               <input name="telephone" type="tel" class="form-control" minlength="3" maxlength="25">
           </div>
       </div>
   </div>
   <div class="form-group  has-success">
       <label for="address" class="col-sm-12 col-form-label">Address</label>
       <div class="col-sm-12">
           <div class="input-group-prepend">
               <span class="input-group-text"><i class="fas asweome asweome-address fa-map-marker-alt"></i></span>
               <input lang="es-ES" name="adress" type="text" class="form-control" minlength="3" maxlength="25" placeholder="1234 Main St">
           </div>
       </div>
   </div>
   <hr>

</form>`;
    contactStudent.html(innerInput);
}



$("#create-contact").on("click", function(event) {
    addContact(event)

})

var davide = new Person(1, "Davide", "Vatamanu", 5, "Italian", "omero,5", "davide.pietro.vatamanu@gmail.com", "999888777", "germany");
var claudio = new Person(2, "Claudio", "Benitez", 27, "Spanish", "Homero34,5", "cm.be@teamo.com", "666777888", "Spain");
var ana = new Person(3, "ana", "sauciuc", 29, "Spanish", "Homero,5", "cm.be@teamo.com", "666777888", "romania");
var Darius = new Person(4, "darius", "andrei", 46, "Spanish", "Homero,5", "cm.be@teamo.com", "666777888", "Spain");
var davide = new Person(5, "Claudio", "Benitez", 9, "Spanish", "Hom,5", "cm.be@teamo.com", "6667777uju7888", "Spain");
var micaela = new Person(6, "micaela", "santana", 98, "Spanish", "Homeroissimo,5", "cm.be@teamo.com", "666777888", "africa");
var kiss = new Person(7, "kiss", "santana", 8, "american", "Homeroissimo,5", "cm.be@teamo.com", "666777888", "africa");
var contactsDavide = [claudio];

var student1 = new Student(davide, "Preescolar", contactsDavide);
college.addStudent(student1);
console.log('student1 :', student1);
var nieves = new Person(3, "Nieves", "Pro1", 55, "Spanish", "una", "blabla@blabla.com", "6877457854", "Spain");
var activity1 = new Activity(1, "Yoga", [nieves, ana], ["Lunes", "Miercoles"], ["18:00-19:00"], 10, 20);
console.log('activity1 :', activity1);
//activity1.addStudent(student1);

college.addActivity(activity1);
console.log('college :', college);