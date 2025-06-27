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


  document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".main-btn.open-modal");
    const modal = document.getElementById("subscribeModal");
    const closeButtons = document.querySelectorAll(".close-modal");

    openButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.classList.add("show");
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.classList.remove("show");
      });
    });

    // Закрытие при клике вне окна
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });