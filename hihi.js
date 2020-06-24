"use stript";

{
  $(function () {
    var pagetop = $("#page_top");
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $("body, html").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
}
