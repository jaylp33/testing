$(document).ready(function () {
  let list = $(".mqBankList");

  list.click(function (e) {
    e.preventDefault();

    $this = $(this);

    if ($this.hasClass("active")) {
      $this.removeClass("active");
      $(this).css({
        height: 300 + "px",
      });
    } else {
      $this.addClass("active");
      $(this).css({
        height: 540 + "px",
      });
    }
  });
});
