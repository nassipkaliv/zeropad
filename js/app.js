document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".index-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
    }
  });
});
