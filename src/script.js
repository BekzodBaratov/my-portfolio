$(document).ready(function () {
  let color = "#0ff0f0";
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
    $(this).find("div").css("backgroundColor", color);
    $(this).find("p").addClass("navActive-p");
    $(this).find("svg").addClass("navActive-img");
    $(this).parent().siblings().find("div").css("backgroundColor", "transparent");
    $(this).parent().siblings().find("p").removeClass("navActive-p");
    $(this).parent().siblings().find("svg").removeClass("navActive-img");

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
    $(this).parent().toggleClass("colorActive");
  });

  $(".colorType").click(function () {
    color = $(this).attr("color");

    $(".colorType").each(function () {
      $(this).removeClass("ring-blue-900").addClass("ring-transparent");
    });
    $(this).removeClass("ring-transparent").addClass("ring-blue-900");
    $(".changeAnimaColor").css("backgroundColor", color);
    $(".changeAnimaColorText").css("color", color);
    $(".social-linkS").attr("stroke", color);
    $(".social-linkF").attr("fill", color);
    $(".fa-gear").css("color", color);
    $(".changeAnimaColorHover").each(function () {
      if ($(this).children("p").hasClass("navActive-p")) $(this).css("backgroundColor", color);
    });
    $(".navbar-ul svg").each(function () {
      if ($(this).attr("fill")) {
        $(this).attr("fill", color);
      }
      if ($(this).attr("stroke")) {
        $(this).attr("stroke", color);
      }
    });
  });

  $(".changeAnimaColor").css("backgroundColor", color);
  $(".changeAnimaColorText").css("color", color);
  $(".social-linkS").attr("stroke", color);
  $(".social-linkF").attr("fill", color);
  $(".fa-gear").css("color", color);
  $(".changeAnimaColorHover").hover(
    function () {
      $(this).css("backgroundColor", color);
    },
    function () {
      if (!$(this).children("p").hasClass("navActive-p")) {
        $(this).css("backgroundColor", "transparent");
      }
    }
  );
});
