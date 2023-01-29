$(document).ready(function () {
  let color = "#0ff0f0";
  const navbarUl = $(".min-card").innerHeight();
  $(".navbar-ul")
    .children()
    .each(function () {
      $(this).css("height", navbarUl / 6);
    });

  const portfolioArr = [
    { name: "All", active: true },
    { name: "Web sites", active: false },
    { name: "Games", active: false },
  ];
  const portfolioImageArr = [
    { id: 1, name: "portfolio_1.webp", link: "/", tag: "website" },
    { id: 2, name: "portfolio_2.webp", link: "/", tag: "website" },
    { id: 3, name: "portfolio_3.webp", link: "/", tag: "website" },
    { id: 4, name: "portfolio_4.webp", link: "/", tag: "game" },
    { id: 5, name: "portfolio_5.webp", link: "/", tag: "website" },
    { id: 6, name: "portfolio_6.webp", link: "/", tag: "website" },
    { id: 7, name: "portfolio_7.webp", link: "/", tag: "website" },
    { id: 8, name: "portfolio_8.webp", link: "/", tag: "website" },
    { id: 9, name: "portfolio_9.webp", link: "/", tag: "website" },
    { id: 10, name: "portfolio_10.webp", link: "/", tag: "website" },
    { id: 11, name: "portfolio_game_1.png", link: "/", tag: "game" },
    { id: 12, name: "portfolio_game_2.webp", link: "/", tag: "game" },
    { id: 13, name: "portfolio_game_3.webp", link: "/", tag: "game" },
    { id: 14, name: "portfolio_game_4.webp", link: "/", tag: "game" },
    { id: 15, name: "portfolio_game_5.webp", link: "/", tag: "game" },
    { id: 16, name: "portfolio_game_6.webp", link: "/", tag: "game" },
  ];
  const jobs = ["web developer", "freelancer", "front-end developer"];
  const length = jobs.join("").length;
  let i = 0;
  setInterval(() => {
    i++;
    if (jobs[0].length >= i) {
      $(".job-anima").text(jobs[0].slice(0, i));
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

  // filip
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

  // filip active
  $(".colorAnima .childClick").click(function () {
    $(this).parent().toggleClass("colorActive");
  });

  appendFuncLi(".portfolio-nav", portfolioArr);
  appendImageLi(".portfolioImages", shuffle(portfolioImageArr));

  // change color
  $(".colorType").click(function () {
    color = $(this).attr("color");

    $(".colorType").each(function () {
      $(this).removeClass("ring-blue-900").addClass("ring-transparent");
    });
    $(this).removeClass("ring-transparent").addClass("ring-blue-900");
    $(".changeAnimaColor").css("backgroundColor", color);
    $("head").append(`<style>.changeAnimaColorBefore::before {background-color: ${color};}</style>`);
    $("head").append(`<style>.changeAnimaColorBefore::after {background-color: ${color};}</style>`);
    $(".changeAnimaColorText").css("color", color);
    $(".social-linkS").attr("stroke", color);
    $(".social-linkF").attr("fill", color);
    $(".portfolio-nav li.active").css({ color: color });
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

  // tags colors before color changing
  $("head").append(`<style>.changeAnimaColorBefore::before {background-color: ${color};}</style>`);
  $("head").append(`<style>.changeAnimaColorBefore::after {background-color: ${color};}</style>`);
  $(".changeAnimaColor").css("backgroundColor", color);
  $(".changeAnimaColorText").css("color", color);
  $(".social-linkS").attr("stroke", color);
  $(".social-linkF").attr("fill", color);
  $(".fa-gear").css("color", color);
  $(".portfolio-nav li").click(function () {
    for (let i = 0; i < portfolioArr.length; i++) {
      if ($(this).attr("key") == i) {
        $(this).attr("class", "active").css({ color: color });
      } else {
        $(this).siblings().attr("class", "").css({ color: "black" });
      }
    }
    for (let i = 0; i < portfolioArr.length; i++) {
      if ($(this).attr("key") == 0) {
        appendImageLi(
          ".portfolioImages",
          shuffle(portfolioImageArr.filter((val) => val.tag == "game" || val.tag == "website"))
        );
      } else if ($(this).attr("key") == 1) {
        appendImageLi(".portfolioImages", shuffle(portfolioImageArr.filter((val) => val.tag == "website")));
      } else {
        appendImageLi(".portfolioImages", shuffle(portfolioImageArr.filter((val) => val.tag == "game")));
      }
    }
    // if($(this).attr('key')==i){}
  });
  $(".portfolio-nav li.active").css({ color: color });
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

function appendFuncLi(tag, val) {
  let html = "";
  for (var i = 0; i < val.length; i++) {
    html += `<li key="${i}" class="${val[i].active ? "active" : ""}">${val[i].name}</li>`;
  }
  $(tag).append(html);
}
function appendImageLi(tag, val) {
  let html = "";
  for (let i = 0; i < val.length; i++) {
    html += `
    <li key="${val[i].id}" class="list-none overflow-hidden">
      <a href="${val[i].link}">
        <image src='./src/assets/portfolio/${val[i].name}' class="portfolioImageItem" alt="${val[i].tag}_image" />
      </a>
    </li>`;
  }
  $(tag).html(html);
}
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
