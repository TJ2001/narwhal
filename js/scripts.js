<!--First Animation-->
$(".clickable").click(function() {
  $("#initially-shown").fadeOut();
  $("#initially-hidden").toggle();
});

$(".close").click(function() {
  $("#initially-hidden").fadeOut();
  $("#initially-shown").toggle()
});

<!--Second Animation-->
$(".clickable").click(function() {
  $("#initially-shown").slideToggle();
  $("#initially-hidden").toggle();
});

$(".close").click(function() {
  $("#initially-hidden").slideUp();
  $("#initially-shown").toggle()
});
