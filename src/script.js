$(document).ready(function () {
  const navbarUl = $(".min-card").innerHeight();
  $(".navbar-ul")
    .children()
    .each(function () {
      $(this).css("height", navbarUl / 6);
    });

  const jobs = ["web developer", "strong junior developer", "front end developer"];
  const length = jobs.join("").length;
  let i = 0;
  setInterval(() => {
    i++;
    if (jobs[0].length >= i) {
      $(".job-anima").text(jobs[0].slice(0, i));
      if (jobs[0].length == i) {
      }
    } else if (jobs[0].length < i && jobs[1].length + jobs[0].length >= i) {
      let j = i - jobs[0].length;
      $(".job-anima").text(jobs[1].slice(0, j));
    } else if (jobs[1].length + jobs[0].length < i && length >= i) {
      let k = i - jobs[1].length - jobs[0].length;
      $(".job-anima").text(jobs[2].slice(0, k));
    } else {
      i = 0;
    }
  }, 300);

  $(".navbar-link-a").click(function () {
    const dataId = $(this).attr("data-id");

    $(".card").toggleClass("flipped");
    $(this).find("div").addClass("navActive-div");
    $(this).find("p").addClass("navActive-p");
    $(this).find("img").addClass("navActive-img");
    $(this).parent().siblings().find("div").removeClass("navActive-div");
    $(this).parent().siblings().find("p").removeClass("navActive-p");
    $(this).parent().siblings().find("img").removeClass("navActive-img");

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

  $(".colorAnima .childClick").click(function () {
    console.log("hi");
    $(this).parent().toggleClass("colorActive");
  });
});
