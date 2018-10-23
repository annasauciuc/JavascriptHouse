$("button").on("click", function(event) {
    var text = $("#texareaobject").val();
    console.log("text", text);

    $("#jumbotron-id").html(print(text));
});

function ResultObject(value, type, order, length) {
    this.value = value;
    this.type = type;
    this.order = order;
    this.length = length;
}

function print(text) {
    var result = [];
    var patternPalabras = /[\w+]/; //patron palabras
    var paternPuntuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    var words = text.split(/([_\W])/); // array de strings de textarea
    console.log("words", words);
    for (var i = 0; i < words.length; i++) {
        var value = words[i];
        // var res = patternPalabras.test(splits[i]); // si  el elemento de array de strings es true o false string,
        // var resp = paternPuntuation.test(splits[i]); //si el elemento que esta mirando es de tipo punctuatuion

        if (patternPalabras.test(value)) {
            var objResult = new ResultObject(value, "word", i, value.length);
            result.push(objResult);
            //if is true  el elemeto que estas mirando
            //console.log("is a word");
        } else if (value === " ") {
            var objResult = new ResultObject(value, "whitespace", i, value.length);
            result.push(objResult);
        } else if (paternPuntuation.test(value)) {
            var objResult = new ResultObject(value, "punctuacion", i, value.length);
            result.push(objResult);
        }
    }

    return JSON.stringify(result);
} // word , white