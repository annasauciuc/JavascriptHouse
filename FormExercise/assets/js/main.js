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
      age: "9"
    },
    {
      name: "Davide",
      age: "5"
    },
    {
      name: "Khalesy",
      age: "1"
    },
    {
      name: "Lorro",
      age: "30"
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
  divCol.className = "col-md-6 mb-3";
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
  divCol2.className = "col-md-6 mb-3";
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
    tbody.appendChild(tr);
  }
}
var saveArray = [];
console.log("saveArray2", saveArray);
var allInputsSel = document.querySelectorAll("input");

/***************************************************************************************
 * Saving the values of the first form in a list and the value of the second form in a table ***
 ***************************************************************************************/
function saveInfoInputs(event) {
  event.preventDefault();
  event.stopPropagation();
  //empty array where the hijos info will be pushed
  var hijos = [];
  var divHijos = document.getElementById("formadd");
  var divPadre = divHijos.children;
  // selecting the values of hijos inputs
  for (i = 0; i < divPadre.length; i++) {
    var inputsDiv = divPadre[i].querySelectorAll("input");
    //From the kids inputs taking the first input value-name,and the second input value/age
    var hijo = { name: inputsDiv[0].value, age: inputsDiv[1].value };
    console.log("name: inputsDiv[0].value", inputsDiv[0].value);
    hijos.push(hijo);
  }
  var user = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    username: $("#username").val(),
    email: $("#email").val(),
    address: $("#address").val(),
    hijos: hijos
  };
  saveArray.push(user);
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
  for (i = 0; i < saveArray.length; i++) {
    var oldestChild = saveArray[i].hijos.reduce(function(oldest, child) {
      return (parseInt(oldest.age) || 0) > parseInt(child.age) ? oldest : child;
    }, {});
    //returning the youngest child
    var youngestChild = saveArray[i].hijos.reduce(function(young, child) {
      return (parseInt(young.age) || 0) &&
        parseInt(young.age) > 0 < parseInt(child.age)
        ? young
        : child;
    }, {});
    // creating the tables rows with the table data inside,having the value of the inputs of the form
    var trow = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = saveArray[i].firstName;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = saveArray[i].lastName;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = saveArray[i].username;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = saveArray[i].email;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = saveArray[i].address;
    trow.appendChild(td);
    td = document.createElement("td");
    //the numbers of hijos
    td.innerHTML = saveArray[i].hijos.length;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = oldestChild.name + " - " + oldestChild.age + " years old";
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML =
      youngestChild.name + " - " + youngestChild.age + " years old";
    trow.appendChild(td);
    table.appendChild(trow);
  }

  // when cliking directly to see the list of user willa apper a message with no users in the list
  if (saveArray.length == 0) {
    var table = document.getElementById("tbListUser");
    var trow = document.createElement("tr");
    var td = document.createElement("td");
    td = document.createElement("td");
    td.innerHTML = "There are no users in the list";
    trow.appendChild(td);
    table.appendChild(trow);
  }
}
