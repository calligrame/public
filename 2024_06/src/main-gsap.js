gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });

    gsap.from(".progress-bar", {
      scrollTrigger: {
        trigger: ".panel1",
        scrub: true,
        start: "top top",
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
      scaleX: 0,
      ease: "none",
    });

    let articles = gsap.utils.toArray(".articles-section");

    articles.forEach((article) => {
      const articleList = article.querySelector(".articles-list");
      gsap.to(articleList, {
        y: () => "+=" + article.offsetHeight - articleList.clientHeight,
        scrollTrigger: {
          trigger: article,
          pin: article.querySelector(".title-side"),
          start: "top top",
          scrub: true,
          end: () => "+=" + (article.offsetHeight - 200),
        },
      });
    });
  },
  "(max-width: 767px)": function () {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
    gsap.from(".progress-bar", {
      scrollTrigger: {
        trigger: ".panel1",
        scrub: true,
        start: "top top",
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
      scaleX: 0,
      ease: "none",
    });
    articles.forEach((article) => {
      const articleList = article.querySelector(".articles-list");
      gsap.to(articleList, {
        scrollTrigger: {
          trigger: article,
          pin: article.querySelector(".title-side"),
          start: "top top",
          scrub: true,
          end: () => "+=" + (article.offsetHeight - 200),
        },
      });
    });
  },
});
