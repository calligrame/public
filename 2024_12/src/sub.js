gsap.registerPlugin(ScrollTrigger);

let pannels = gsap.utils.toArray(".pannel");

let tops = pannels.map((pannels) =>
  ScrollTrigger.create({ trigger: pannels, start: "top top" })
);

pannels.forEach((pannels, i) => {
  ScrollTrigger.create({
    trigger: pannels,
    start: () =>
      pannels.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true,
    pinSpacing: false,
  });
});

gsap.to(".header-wrap", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".content-wrap",
    start: "top bottom",
    end: "top top",
    scrub: true,
    snap: 1 / (pannels.length - 1),
  },
});

const contentWrap = document.querySelector(".content-wrap");
const articleWrap = document.querySelector(".article-wrap");
const btnLine = document.querySelector(".line");

ScrollTrigger.create({
  trigger: contentWrap,
  start: "top 15%",
  end: "top -5%",
  toggleClass: { targets: btnLine, className: "white" },
});

ScrollTrigger.create({
  trigger: contentWrap,
  start: "top 15%",
  end: "top -5%",
  toggleClass: { targets: articleWrap, className: "active" },
});

//prev, next 버튼 링크 생성
const LAST_CONTENT_INDEX = 18;
const popBox = document.getElementById("pop");

let currentFileIndex = parseInt(
  document.location.href
    .match(/[^\/]+$/)[0]
    .match(/[0-9]/g)
    .join("")
);

if (currentFileIndex === 1) {
  $("#btn_prev>a").attr("href", `../sub/sub${LAST_CONTENT_INDEX}.html`);
} else {
  console.log(`../sub/sub${currentFileIndex - 1}.html`);
  $("#btn_prev>a").attr("href", `../sub/sub${currentFileIndex - 1}.html`);
}
if (currentFileIndex === LAST_CONTENT_INDEX) {
  $("#btn_next>a").attr("href", `../sub/sub1.html`);
} else {
  console.log(`../sub/sub${currentFileIndex + 1}.html`);
  $("#btn_next>a").attr("href", `../sub/sub${currentFileIndex + 1}.html`);
}

$(document).ready(function () {
  // 헤더 로드
  $("#header").load("../header.html", function () {
    document.getElementById("header").classList.add("fixed");
  });
  $("img[usemap]").rwdImageMaps();
  // 최상위 이동
  $("#btn_top, #side_btn_top, #btn_top_circle").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
