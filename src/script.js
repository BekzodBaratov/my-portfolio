$(document).ready(function () {
  const navbarUl = $(".min-card").innerHeight();
  console.log(navbarUl);
  $(".navbar-ul")
    .children()
    .each(function (e) {
      console.log(e);
      $(this).css("height", navbarUl / 6);
    });

  $(".navbar-link-a").click(function () {
    const dataId = $(this).attr("data-id");

    $(".card").toggleClass("flipped");

    setTimeout(function () {
      $(".frontPage").each(function () {
        if ($(this).attr("data-id") === dataId) {
          $(this).addClass("visible");
        } else {
          $(this).removeClass("visible");
        }
      });
    }, 125);
  });
});
