$("button").on("click", function(event) {
  var text = $("#texareaobject").val();
  console.log("text", text);

  $("#jumbotron-id").html(print(text));
});
function ResultObject() {
  this.value = "";
  this.type = "";
  this.order = "";
  this.length = "";

  this.addValue = function(value) {
    this.value = value;
    this.length = value.length;
  };
  this.addType = function(type) {
    this.type = type;
  };
  this.addOrder = function(order) {
    this.order = order;
  };
}
function print(text) {
  var result = [];
  var patternPalabras = /[\w+]/; //patron palabras
  var paternPuntuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;

  var words = text.split(/([_\W])/); // array de strings de textarea
  words = words.filter(word => word != ""); // is filtring the elements that don`t have a an empty string
  console.log("words", words);
  for (var i = 0; i < words.length; i++) {
    // the loop for will execute this code for every element inside words array
    var value = words[i];
    // var res = patternPalabras.test(splits[i]); // si  el elemento de array de strings es true o false string,
    // var resp = paternPuntuation.test(splits[i]); //si el elemento que esta mirando es de tipo punctuatuion
    var objResult = new ResultObject();
    objResult.addValue(value);
    objResult.addOrder(i);
    if (patternPalabras.test(value)) {
      objResult.addType("word");
    } else if (value === " ") {
      objResult.addType("whitespace");
    } else if (paternPuntuation.test(value)) {
      objResult.addType("punctuacion");
    }
    result.push(objResult);
  }

  return JSON.stringify(result);
} // word , white
