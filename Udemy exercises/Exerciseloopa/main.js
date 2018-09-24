//****** Write the reverse of an array*****
var numbers = [1, 2, 3, 4, 5];

function printReverse(numbers) {
  for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
  }
}
printReverse(numbers);

//*******Or******
function printReverse(name) {
  for (var i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
  }
}
printReverse("Maria");

//******To see if all elements of an array are identical*****
function identical(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      console.log(false);
    }
  }
  console.log(true);
}
identical([1, 1, 1, 1, 1, 1]);

//*******Or*********

function matchList(list) {
  var listItem = list[0];

  for (index in list) {
    if (list[index] != listItem) {
      console.log(false);
    }
  }

  console.log(true);
}
matchList([1, 1, 1, 1, 1, 1, 1]);

//*****Make the sum of the elemnts of an array****
var sum = 0;
function sumArray(numberArray) {
  numberArray.forEach(number => {
    sum += number;
  });
  console.log(sum);
}
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 3, 10]);

//*****Get the biggest number of an array****
var numArray = [10, 20, -4];
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray(numArray));

//*****OR*****
function Max(array) {
  var maxy = Math.max(...array);
  console.log((maxy = Math.max(...array)));
}
Max([10, 20, 50]);
