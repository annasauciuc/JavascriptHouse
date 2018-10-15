"use strict";
var n = prompt("Introduce a number!");
if (n == 0) {
  alert("El número es 0");
} else if (n < 0) {
  alert("El número es negativo");
} else if (n % 2 == 0 && n % 3 == 0) {
  alert("El número es múltiplo de 2 y de 3");
} else if (n > 20 && n < 50) {
  alert("El número es mayor que 20 pero menor que 50");
} else {
  alert("el número no es 123123125");
}

var id = "23188xtr";
var lastName = "Smith";

var userName = id.toUpperCase() + "#" + lastName.toUpperCase();
console.log(userName);

$("button").on("click", function() {
  $("p").html("Hello");
  console.log("hola");
});
//Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al clickar el botón, que aparezca una ventana de alerta que diga 'Hola ',
//con el nombre que aparece en el input de texto.

$("#php").on("mouseover", function(event) {
  $("body").append("<p>Lorem Psumen</p>");
});

var movies = {
  "0": "Inception",
  "1": "The butterfly effect",
  "2": "Eternal sunshine of the spotless mind",
  "3": "Blue velvet",
  "4": "Split"
};
var counter = 0;
$("button").on("click", function() {
  var movie = movies[counter];
  if (movie) {
    $("ul").append(`<li>${movie}</li>`);
  }

  counter++;
  console.log(movie);
});
var movies = {
  "0": { title: "Inception", director: "Christopher Nolan", year: 2010 },
  "1": {
    title: "The butterfly effect",
    director: "Eric Bress, J. Mackye Gruber",
    year: 2004
  },
  "2": {
    title: "Eternal sunshine of the spotless mind",
    director: "Michel Gondry",
    year: 2004
  },
  "3": { title: "Blue velvet", director: "David Lynch", year: 1986 },
  "4": { title: "Split", director: "M. Night Shyamalan", year: 2016 }
};
var counter = 0;
$("button").on("click", function() {
  var movie = movies[counter];
  if (movie) {
    $("ul").append(`<li>${movie}</li>`);
  }

  counter++;
  console.log(movie);
});

//recorrer el array mediante un bucle que calcule la media de los números (la suma de los números dividido por cuántos hay, es decir, 5)
var numbers = [4, 2, 7, 8, 6];
var counter = 0;
for (var i = 0; i < numbers.length; i++) {
  counter += numbers[i];
  console.log(counter);
}
counter = Math.floor(counter / 5);
console.log("counter2", counter);
numbers.push(5);
console.log("numbers", numbers);
var counter = 0;
for (var i = 0; i < numbers.length; i++) {
  counter += numbers[i];
  console.log(counter);
}
counter = Math.floor(counter / 6);
console.log("counter2", counter);

//Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media.
var counter = 0;
function average(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    counter += numbers[i];
    console.log(counter);
  }

  return counter / numbers.length;
}
var media = average([1, 2, 3, 4, 5]);
console.log("media", media);

var contacts = [
  {
    name: "Raquel",
    age: "31",
    profession: "designer"
  },
  {
    name: "Pedro",
    age: "34",
    profession: "newspaper"
  },
  {
    name: "Laura",
    age: "37",
    profession: "chef"
  },
  {
    name: "Maria",
    age: "31",
    profession: "retired"
  },
  {
    name: "Laur",
    age: "67",
    profession: "waitress"
  }
];
function countAdalabers(adalabers) {
  return adalabers.length;
}
console.log(countAdalabers(contacts));
function averageAge(adalabers) {
  var counter = 0;
  for (var i = 0; i < adalabers.length; i++) {
    counter += adalabers[i].age;
  }
  return counter / adalabers.length;
}
console.log(averageAge(contacts));
("use strict");
