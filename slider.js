//mob-logo-scroll

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".mob-logo-scroll");
  const dots = document.querySelectorAll(".dot");

  scrollContainer.addEventListener("scroll", () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const width = scrollContainer.offsetWidth;

    const index = Math.round(scrollLeft / width);

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });
});

//reviews img-scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".reviews"); 
  const dots = document.querySelectorAll(".mob-dots .dot");

  scrollContainer.addEventListener("scroll", () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.offsetWidth;

    const index = Math.round(scrollLeft / containerWidth);

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  });
});

