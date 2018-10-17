$("button").on("click", function(event) {
  var text = $("#texareaobject").val();
  console.log("text", text);

  var newtext = new CreaText(text);
  console.log("newtext", newtext);

  $("#jumbotron-id").html(newtext.tipo());
});

// value: "";
// type: "";
// length: "";
// print: "";
// order: "";
function ResultObject(value, type, order, length) {
  this.value = value;
  this.type = type;
  this.order = order;
  this.length = length;
}
function CreaText(text) {
  var result = [];
  this.text = text;
  // this.value;
  // this.order = function() {
  //   for (var i = 0; i < this.value; i++) {
  //     console.log("this.value[i]", this.value[i]);
  //     return indexOf(this.value[i]);
  //   }
  // };

  this.print = function() {
    var patt = /[\w+]/; //patron palabras
    var patern = (/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var splits = this.text.split(/([_\W])/); // array de strings de textarea
    console.log("splits", splits);
    for (var i = 0; i < splits.length; i++) {
      var res = patt.test(splits[i]); // si  el elemento de array de strings es true o false string,
      var resp = patern.test(splits[i]); //si el elemento que esta mirando es de tipo punctuatuion

      if (res) {
        var objResult = new ResultObject("");
        this.type == "word";
        //if is true  el elemeto que estas mirando
        //console.log("is a word");
      } else if (resp) {
        this.type == "punctuacion";
      } else {
        this.type == " ";
      }
      result.push();
    }

    return JSON.stringify(result);
  }; // word , whitespace, puncuation
}

//   this.show = function() {
//     for (i = 0; i < this.tipo.length; i++) {
//       var splits = this.value.split(this.tipo[i]);
//       console.log("splits", splits);
//       if (splits.length > 1) {
//         result.push({
//           splits
//         });
//       }
//     }

//     console.log("result", result);
//     return JSON.stringify(result);
//   };

// this.long = function() {
//   console.log("this.text.length", this.value);
//   return parseInt(this.value.length);
// };
//}
// $("button").on("click", function(event) {
//   var text = $("#texareaobject").val();
//   $("#jumbotron-id").html(show());
// });

// function Word(tipo, word, order) {
//   this.tipo = tipo;
//   this.word = word;
//   this.order = order;
//   this.length = word.length;
// }

// var result = [];

// function show() {
//   var patt = /[\w+]/; //patron palabras
//   var patern = (/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//   var text = $("#texareaobject").val();
//   var splits = text.split(/([_\W])/); // array de strings de textarea
//   console.log("splits", splits);
//   for (var i = 0; i < splits.length; i++) {
//     var res = patt.test(splits[i]); // si  el elemento de array de strings es true o false string,
//     var resp = patern.test(splits[i]); //si el elemento que esta mirando es de tipo punctuatuion

//     if (res) {
//       //if is true  el elemeto que estas mirando
//       console.log("is a word");
//     } else if (resp) {
//       // if is true is punctuacion
//     }

//     // if (splits == "word") {
//     //  result.push({
//     //      splits
//     //    });
//   }

//   return splits;
// }
