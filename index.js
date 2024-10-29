$("button").on("click", function () {
  $(".reference").slideToggle();
});

$("button").hover(
  function () {
    $(this).addClass("pressed");
  },
  function () {
    $(this).removeClass("pressed");
  }
);
