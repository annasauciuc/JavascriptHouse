const $button = $("<button>Reveal Spoiler</button>");
$(".spoiler").append($button);

$(".spoiler span").hide();
$(".spoiler button").on("click", function() {
  $(".spoiler span").show();

  $(".spoiler button").hide();
});
