// // $("button").on("click", function(event) {
// //   var text = $("#texareaobject").val();
// //   var newtext = new CreaText(text);
// //   $("#jumbotron-id").html(newtext.show());
// // });

// // value: "";
// // type: "";
// // length: "";
// // print: "";
// // order: "";

// function CreaText(text) {
//   var result = [];
//   var type = [" ", ".", ",", "/", ":", "*"]; // word , whitespace, puncuation
//   this.type = type;
//   this.value = text;
//   console.log("text", text);

//   this.show = function() {
//     for (i = 0; i < this.type.length; i++) {
//       var splits = this.value.split(this.type[i]);
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

//   this.long = function() {
//     console.log("this.text.length", this.value);
//     return parseInt(this.value.length);
//   };
//   this.order = function() {
//     for (var i = 0; i < this.value; i++) {
//       console.log("this.value[i]", this.value[i]);
//       return indexOf(this.value[i]);
//     }
//   };
// }
$("button").on("click", function(event) {
  var text = $("#texareaobject").val();
  $("#jumbotron-id").html(show());
});

function Word(type, word, order) {
  this.type = type;
  this.word = word;
  this.order = order;
  this.length = word.length;
}

var result = [];

function show() {
  var patt = /[\w+]/; //patron palabras
  var patern = (/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var text = $("#texareaobject").val();
  var splits = text.split(/([_\W])/); // array de strings de textarea
  console.log("splits", splits);
  for (var i = 0; i < splits.length; i++) {
    var res = patt.test(splits[i]);  // si  el elemento de array de strings es true o false string, 
    var resp = patern.test(splits[i]); //si el elemento que esta mirando es de tipo punctuatuion


    if (res) {//if is true  el elemeto que estas mirando
      console.log("is a word");
    }
    else if(resp){ // if is true is punctuacion

    }

    // if (splits == "word") {
    //  result.push({
    //      splits
    //    });
  }

  return splits;
}
