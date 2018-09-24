console.log("CONNECTED");

function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([3, 6, 2, 5]);

//*** isUniform() ***

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});

// 	return true;
// }

// *** sumArray() ***

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// *** max() ***

function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// var someObjects = {
//   friends: [{ name: "Malfoy" }, { name: "Crabbe" }, { name: "Goyle" }],
//   color: "baby blue",
//   isEvil: true
// };
// someObjects.friends[0];

//Exercise
var movies = [
  {
    title: "Frozen",
    rating: 4,
    watched: false
  },
  {
    title: "Joe",
    rating: 3,
    watched: true
  },
  {
    title: "Goat",
    rating: 6,
    watched: false
  },
  {
    title: "Humans",
    rating: 1,
    watched: false
  }
];

function buildString(movie) {
  var result = "You have ";
  if (movie.watched) {
    result += "been watch ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
