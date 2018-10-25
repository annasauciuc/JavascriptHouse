//Print all numbers between -10 and 19
var i = -11;
while (i <= 19) {
  i += 1;
  console.log(i);
}
//Print all numbers between 10 and 40
var j = 10;
while (j < 40) {
  j += 2;
  console.log(j);
}
//Print all  odd numbers between 300 and 333
var k = 300;

while (k <= 333) {
  if (k % 2 !== 0) {
    console.log(k);
  }
  k += 1;
}
//Print all numbers divisible between 5 and 50
var l = 5;
while (l < 50) {
  if (l % 5 === 0 && l % 3 === 0) {
    console.log(l);
  }
  l++;
}
