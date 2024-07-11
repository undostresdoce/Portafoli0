$(document).ready(function () {
  $(".card").hover(
    function () {
      $(this).addClass("highlight");
    },
    function () {
      $(this).removeClass("highlight");
    }
  );
});
