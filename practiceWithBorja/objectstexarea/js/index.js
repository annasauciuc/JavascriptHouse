var names = ["Ana", "Maria", "George"];
var actiones = ["eat", "pray", "love"];
var things = ["apple", "pen", "house"];

function actions(array1, array2, array3) {
  var result = [];
  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < things.length; j++) {
      for (var k = 0; k < actiones.length; k++) {
        result.push({
          name: names[i],
          action: actiones[k],
          thing: things[j],
          combine: function() {
            return this.name + " is " + this.action + " " + this.thing;
          }
        });
      }
    }
  }
  console.log(result);
  return result;
}
var results = actions(names, actiones, things);

function actions2(array1, array2, array3) {
  var result = [];
  for (var i = 0; i < names.length; i++) {
    result.push(
      names[i] +
        " " +
        "is" +
        " " +
        actiones[Math.floor(Math.random() * actiones.length)] +
        " " +
        things[Math.floor(Math.random() * things.length)]
    );
  }
  console.log(result);
  return result;
}
actions2(names, actiones, things);

const array1 = {};
