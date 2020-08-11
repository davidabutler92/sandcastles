$(document).ready(function() {
  // console.log("Clicked!");
  $(".click").click(function() {
    $("#sandCastle").fadeToggle();
  });

  $(".sandCastle2").click(function() {
    $("#sandCastleToo").fadeToggle();
  });
});
