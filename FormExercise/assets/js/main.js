/*
 * Practica
 *
 * # Objeto Usuario
 *
 * ## Propiedades:
 *   @param nombre
 *   @param edad
 *   @param email
 *   @param timezone (Notación ISO Timezone continent/city)
 *   @param rol: admin, editor, user
 *   @param timestamp last connection
*/

//Object

var user1 = {
  firstName: "Ana",
  lastName: "Sauciuc",
  username: "lolito",
  email: "loliti@gmail.yo",
  address: "spain",
  hijos: [
    {
      name: "Darius",
      age: "9",
      sex: "male"
    },
    {
      name: "Davide",
      age: "5",
      sex: "male"
    },
    {
      name: "Khalesy",
      age: "1",
      sex: "female"
    },
    {
      name: "Lorro",
      age: "30",
      sex: "male"
    }
  ]
};
// variable global that start with 0
var numeroHijos = 0;

/***************************************************************************************
 * Setting the values of the first form and adding them in the inputs of the form on click ***
 ***************************************************************************************/
function loadInfo(event) {
  event.preventDefault();
  event.stopPropagation();
  // Reinitiate first from ,empty until calling the function again
  document.getElementById("formadd").innerHTML = " ";
  numeroHijos = 0;
  // getting the inputs of the 1form by id and setting them the value of the object
  $("#firstName").val(user1.firstName);
  $("#lastName").val(user1.lastName);
  $("#username").val(user1.username);
  $("#email").val(user1.email);
  $("#address").val(user1.address);
  /***************************************************************************************
   * Setting the values of the  second form  add hijos and adding them in the inputs of the form on click ***
   ***************************************************************************************/
  for (var i = 0; i < user1.hijos.length; i++) {
    //calling the function addHijos() in this function
    addHijos(event);

    $("#firstName" + numeroHijos).val(user1.hijos[i].name);
    console.log("name", user1.hijos.name);
    $("#age" + numeroHijos).val(user1.hijos[i].age);
    $("#sex" + numeroHijos).val(user1.hijos[i].sex);
  }
}

/***************************************************************************************
 *On click,removing the inputs that where with the fuunction addHijos() ***
 ***************************************************************************************/
function removeHijo(e, divRow) {
  e.preventDefault();
  e.stopPropagation();
  // deleting from #div formadd the child #divRow
  document.getElementById("formadd").removeChild(divRow);
  // seeting the global counter to -1
  numeroHijos = numeroHijos - 1;
  console.log("removeHijos", divRow);
}
/***************************************************************************************
 * Generating dinamically inputs of hijos***
 ***************************************************************************************/

function addHijos(event) {
  event.preventDefault();
  event.stopPropagation();
  // seeting the global counter to +1
  numeroHijos = numeroHijos + 1;
  var divRow = document.createElement("div");
  divRow.classList.add("row");
  var divColHijo = document.createElement("div");
  divColHijo.className = "col-md-12";
  var h6 = document.createElement("h2");
  h6.textContent = " Hijo " + numeroHijos;
  divColHijo.appendChild(h6);
  divRow.id = "divHijo" + numeroHijos;
  divRow.appendChild(divColHijo);
  var divCol = document.createElement("div");
  divCol.className = "col-md-3 mb-3";
  var label = document.createElement("label");
  // relacionating the label with the input
  label.setAttribute("for", "firstName" + numeroHijos);
  label.textContent = "Name";
  console.log("label", label);
  var input = document.createElement("input");
  input.id = "firstName" + numeroHijos;
  input.classList.add("form-control");
  input.setAttribute("value", " ");
  divCol.appendChild(label);
  divCol.appendChild(input);
  // creating the button for removing hijos
  var btnRemoveHijo = document.createElement("button");
  btnRemoveHijo.className = " btn remove bg-primary";
  // Onclick,calling the funtion removeHijos(), that will delete the input that addHijos() generates
  btnRemoveHijo.id = "btnremove" + numeroHijos;
  btnRemoveHijo.onclick = function(event) {
    removeHijo(event, divRow);
  };
  //
  btnRemoveHijo.textContent = "Delete hijo" + numeroHijos;
  divCol.appendChild(btnRemoveHijo);
  divRow.appendChild(divCol);
  divRow.classList.add("row");
  var divCol2 = document.createElement("div");
  divCol2.className = "col-md-3 mb-3";
  var label2 = document.createElement("label");
  label.setAttribute("for", "age" + numeroHijos);
  label2.textContent = "Age";
  var input2 = document.createElement("input");
  input2.setAttribute("type", "number");
  input2.id = "age" + numeroHijos;
  input2.classList.add("form-control");
  divCol2.appendChild(label2);
  divCol2.appendChild(input2);
  divRow.appendChild(divCol2);

  divRow.classList.add("row");
  var divCol3 = document.createElement("div");
  divCol3.className = "col-md-3 mb-3";
  var label3 = document.createElement("label");
  label.setAttribute("for", "sex" + numeroHijos);
  label3.textContent = "Sex";
  var input3 = document.createElement("select");
  console.log("slected", input3);
  //input3.setAttribute("type", "text");
  input3.classList.add("custom-select");
  input3.id = "sex" + numeroHijos;
  var optionselected = document.createElement("option");
  optionselected.textContent = "Choose";
  optionselected.setAttribute("select", "selected");
  input3.appendChild(optionselected);
  var option1 = document.createElement("option");
  option1.textContent = "Male";
  input3.appendChild(option1);
  var option2 = document.createElement("option");
  option2.textContent = "Female";
  input3.appendChild(option2);

  //input3.appendChild(label3);
  divCol3.appendChild(input3);
  divRow.appendChild(divCol3);
  document.getElementById("formadd").appendChild(divRow);
  console.log("divRaw", divRow);
}

// var direction;
// if (x < 200) {
//   direction = 1;
// } else {
//   direction = -1;
// }
// var direction = x < 200 ? 1 : -1;

// var user2 = new Object();
// user2.firstName = "Claudio";
// user2.lastName = "Benítez";
// user2.diHola = function(user) {
//   return "hola " + user.firstName;
// };

console.log("user1", user1);
/***************************************************************************************
 * Defining the next,back buttons,deactivating one and activating the other  with the boostrap classes***
 ***************************************************************************************/
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
      contact.className = "tab-pane  fade";
      contactnav.className = "nav-item nav-link disabled";
      listusers.className = "tab-pane   fade ";
      listusersnav.className = "nav-item nav-link active";
      break;
    //shows profile
    case "tab-profile":
      home.className = "tab-pane  fade";
      homenav.className = "nav-item nav-link disabled";
      profile.className = "tab-pane  active";
      profilenav.className = "nav-item nav-link active";
      contact.className = "tab-pane  fade";
      contactnav.className = "nav-item nav-link disabled";
      listusers.className = "tab-pane   fade ";
      listusersnav.className = "nav-item nav-link active";
      break;
    //shows contact
    case "tab-contact":
      home.className = "tab-pane  fade";
      homenav.className = "nav-item nav-link disabled";
      profile.className = "tab-pane  fade ";
      profilenav.className = "nav-item nav-link disabled ";
      contact.className = "tab-pane active";
      contactnav.className = "nav-item nav-link active";
      listusers.className = "tab-pane   fade ";
      listusersnav.className = "nav-item nav-link active";
      showInfo(event);
      break;
    case "tab-listusers":
      home.className = "tab-pane  fade";
      homenav.className = "nav-item nav-link disabled";
      profile.className = "tab-pane  fade ";
      profilenav.className = "nav-item nav-link disabled ";
      contact.className = "tab-pane  fade ";
      contactnav.className = "nav-item nav-link disabled";
      listusers.className = "tab-pane active";
      listusersnav.className = "nav-item nav-link active";
      showInfo(event);
      break;
    default:
      break;
  }
}

/***************************************************************************************
 * Showing the info of all inputs ***
 ***************************************************************************************/
function showInfo(event) {
  document.getElementById("ulId").innerHTML = " ";
  document.getElementById("tablebody").innerHTML = " ";
  event.preventDefault();
  event.stopPropagation();

  //first form
  var form = document.getElementById("formvalue");
  // selecting all inputs of the first form
  var allInputs = form.querySelectorAll("input");
  // selecting the ul where all li will be filled
  var ul = document.getElementById("ulId");
  // ******looping the inputs of the first form and saving the values of each input in a created li
  for (i = 0; i < allInputs.length; i++) {
    var li = document.createElement("li");
    // selecting only the  labels of every input inputs
    var label = allInputs[i].parentElement.querySelectorAll("label")[0]
      .textContent;
    // Putting in every li the label name and the value from the inputs
    li.innerHTML = label + " : " + allInputs[i].value;
    allInputs[i].className = "form-control borderafter";
    ul.appendChild(li);
  }
  // Putting the hijos informacion in a table
  var tbody = document.getElementById("tablebody");
  // The div that contains the inputs of the hijos
  var divTableHijos = document.getElementById("formadd");
  // the divs that conyain the inputs //
  var divPadre = divTableHijos.children;
  // Looping through the div  that contains the divs of the inputs of hijos
  for (i = 0; i < divPadre.length; i++) {
    // sellecting all inputs of div padre
    var inputsDiv = divPadre[i].querySelectorAll("input");
    var selectsDiv = divPadre[i].querySelectorAll("select");
    var tr = document.createElement("tr");
    // first td
    var td = document.createElement("td");
    // Putting in the first td the first children of div padre ,the name input being at position [0]// name
    td.innerHTML = inputsDiv[0].value;
    tr.appendChild(td);
    // second td
    td = document.createElement("td");
    // Putting in the second td the second children of div padre ,the age input being at position [1]//age
    td.innerHTML = inputsDiv[1].value;
    tr.appendChild(td);

    td = document.createElement("td");
    // Putting in the second td the second children of div padre ,the age input being at position [1]//age
    td.innerHTML = selectsDiv[0].value;
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
}
var usersSaved = [];
console.log("usersSaved2", usersSaved);
var allInputsSel = document.querySelectorAll("input");

/***************************************************************************************
 * Saving the values of the first form in a list and the value of the second form in a table ***
 ***************************************************************************************/
function saveInfoInputs(event) {
  event.preventDefault();
  event.stopPropagation();

  var user1 = new User(
    $("#firstName").val(),
    $("#lastName").val(),
    $("#username").val(),
    $("#email").val(),
    $("#address").val()
  );
  //empty array where the hijos info will be pushed
  var hijos = [];
  var divHijos = document.getElementById("formadd");
  var divPadre = divHijos.children;
  // selecting the values of hijos inputs
  for (i = 0; i < divPadre.length; i++) {
    var inputsDiv = divPadre[i].querySelectorAll("input");
    var selectsDiv = divPadre[i].querySelectorAll("select");
    console.log("SEX: selectsDiv[0].value", selectsDiv[0]);
    //From the kids inputs taking the first input value-name,and the second input value/age
    // var hijo = { name: inputsDiv[0].value, age: inputsDiv[1].value };
    var kid = new Kid(
      inputsDiv[0].value,
      inputsDiv[1].value,
      selectsDiv[0].value
    );
    console.log("kid", selectsDiv[0]);

    console.log("name: inputsDiv[0].value", inputsDiv[0].value);
    // hijos.push(hijo);
    user1.addKid(kid);
  }
  // var user = {
  //   firstName: $("#firstName").val(),
  //   lastName: $("#lastName").val(),
  //   username: $("#username").val(),
  //   email: $("#email").val(),
  //   address: $("#address").val(),
  //   hijos: hijos
  // };
  console.log("show user1 from object", user1);
  usersSaved.push(user1);
  listUsers(event);
}

/********************************************************************************************************************
 * Showing the value of both forms ina table,including the number of hijos,the oldest hijo and the youngest hijo ***
 ********************************************************************************************************************/
function listUsers(event) {
  numeroHijos = numeroHijos + 1;
  event.preventDefault();
  event.stopPropagation();
  var table = document.getElementById("tbListUser");
  table.innerHTML = " ";
  // returning the oldest child
  for (i = 0; i < usersSaved.length; i++) {
    var userSaved = usersSaved[i];
    var oldestChild = userSaved.oldestKid();
    var youngestChild = userSaved.youngestKid();
    // creating the tables rows with the table data inside,having the value of the inputs of the form
    var trow = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = userSaved.firstName;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = userSaved.lastName;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = userSaved.username;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = userSaved.email;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = userSaved.address;
    trow.appendChild(td);
    td = document.createElement("td");
    //the numbers of hijos
    td.innerHTML = userSaved.numberOfKids();
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = oldestChild.name + " - " + oldestChild.age + " years old";
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML =
      youngestChild.name + " - " + youngestChild.age + " years old";
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = userSaved.completeName();
    trow.appendChild(td);
    table.appendChild(trow);
  }

  // when cliking directly to see the list of user willa apper a message with no users in the list
  if (usersSaved.length == 0) {
    var table = document.getElementById("tbListUser");
    var trow = document.createElement("tr");
    var td = document.createElement("td");
    td = document.createElement("td");
    td.innerHTML = "There are no users in the list";
    trow.appendChild(td);
    table.appendChild(trow);
  }
}
