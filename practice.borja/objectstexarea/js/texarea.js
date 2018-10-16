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

  this.long = function() {
    console.log("this.text.length", this.value);
    return parseInt(this.value.length);
  };
  this.order = function() {};
}
