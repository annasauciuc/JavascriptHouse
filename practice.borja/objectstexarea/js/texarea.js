$("button").on("click", function(event) {
  var text = $("#texareaobject").val();
  var newtext = new CreaText(text);
  $("#jumbotron-id").html(newtext.show());
});

// value: "";
// type: "";
// length: "";
// print: "";
// order: "";

function CreaText(text) {
  var result = [];
  var type = [" ", ".", ",", "/", ":", "*"];
  this.type = type;
  this.value = text;
  console.log("text", text);

  this.show = function() {
    // var algo = this.value.split("*");
    // console.log("algo", algo);
    // return algo;
    for (i = 0; i < this.type.length; i++) {
      var splits = this.value.split(this.type[i]);
      console.log("splits", splits);
      if (splits.length > 1) {
        result.push({
          splits
        });
      }
    }

    console.log("result", result);
    return JSON.stringify(result);
  };

  this.lenght = function() {
    return this.text.length;
  };
  this.order = function() {};
}

// CreaText.prototype.toString = function creaTextToString() { };
// var result = [];
// for (var i = 0; i < names.length; i++) {
//   for (var j = 0; j < things.length; j++) {
//     for (var k = 0; k < actiones.length; k++) {
//       result.push({
//         name: names[i],
//         action: actiones[k],
//         thing: things[j],
//         combine: function() {
//           return this.name + " is " + this.action + " " + this.thing;
//         }
//       });
//     }
//   }
// }
// console.log(result);
// return result;
// }
