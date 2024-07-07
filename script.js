document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let scrollAmount = 0;
  const slideWidth = slider.scrollWidth / slider.children.length;

  function autoSlide() {
    scrollAmount += slideWidth;
    if (scrollAmount > slider.scrollWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  setInterval(autoSlide, 4000); // Ganti slide setiap 3 detik (3000 milidetik)
});
