document.addEventListener("DOMContentLoaded", function() {
  /* ============================
  // Testimonials Slider
  ============================ */
  const testimonialsSlider = document.querySelector(".testimonials__slider");

  if (testimonialsSlider) {
    new Splide(testimonialsSlider, {
      perPage: 2,
      perMove: 1,
      gap: 32,
      arrows: false,
      drag: false,
      pagination: false,
      type: 'loop',
      autoScroll: {
        autoStart: false,
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false
      },
      intersection: {
        inView: {
          autoScroll: true,
        },
        outView: {
          autoScroll: false,
        },
      },
      breakpoints: {
        768: {
          perPage: 1
        },
        576: {
          drag: true,
        }
      }
    }).mount(window.splide.Extensions);
  }
});