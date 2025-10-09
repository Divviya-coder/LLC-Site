export const nextUtility = {
  stickyNav() {
    const header = document.getElementById("header-sticky");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  },

  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },

  preloader() {
    // 👇 This fixes your issue
    const preloader = document.getElementById("preloader");
    if (preloader) {
      // Optional fade-out effect
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  },
};
