$("body").css("paddingTop", $(".navbar").innerHeight());

$(function () {
  
  // Popup Windows

  $(".show-popup").click(function () {
    $($(this).data("popup")).fadeIn(); // You can use different classes instead of using custom attributes!
  });

  $(".popup").click(function () {
    $(this).fadeOut();
  });
  // The below function will allow you to prevent the inner popup window from fadeOut when you click on it.
  $(".popup .inner").click(function (e) {
    e.stopPropagation();
  });

  $(".popup .btn").click(function (e) {
    e.preventDefault();
    //$(".popup").fadeOut(); If we apply this code instead of the below, the fadeOut will be applied on all popup windows in case you do have more than one, so it is better to be specific.
    $(".btn").parentsUntil(".popup").parent().fadeOut();
  });
  // The below function allows you to close the popup window once you click on Escape button on your keyboard!
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".popup").fadeOut();
    }
  });
});