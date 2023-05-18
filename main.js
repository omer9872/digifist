const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  slidesPerView: 2.2,
  allowTouchMove: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    init: function (sw) {
      if (sw.activeIndex === 0) {
        document
          .querySelector(".swiper-button-prev")
          .classList.add("swiper-button-hidden");
      }
    },
    slideChange: function (sw) {
      if (sw.activeIndex === 0) {
        document
          .querySelector(".swiper-button-prev")
          .classList.add("swiper-button-hidden");
      } else {
        document
          .querySelector(".swiper-button-prev")
          .classList.remove("swiper-button-hidden");
      }
    },
  },
});
