document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".index-header");

  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-target]");
  const closeButtons = document.querySelectorAll(".close-modal");

  openButtons.forEach(btn => {
    const targetSelector = btn.getAttribute("data-target");
    const modal = document.querySelector(targetSelector);

    if (!modal) return;

    btn.addEventListener("click", () => {
      modal.classList.add("show");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".custom-modal-overlay");
      if (modal) modal.classList.remove("show");
    });
  });
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".custom-modal-overlay.show").forEach(modal => {
      modal.classList.remove("show");
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const selectedToken = document.querySelector("#selectedToken span");

  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.querySelectorAll(".dropdown-menu li").forEach((item) => {
    item.addEventListener("click", () => {
      selectedToken.textContent = item.dataset.token;
      dropdownMenu.style.display = "none";
    });
  });

  document.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });
});

function toggleOffcanvas() {
  document.getElementById('offcanvasMenu').classList.toggle('show');
}
