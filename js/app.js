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


  window.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const video = document.querySelector(".intro-video");

    if (!video) {
      preloader.style.display = "none";
      return;
    }

    const isMobile = window.innerWidth <= 540;
    const videoSrc = isMobile 
      ? "assets/img/intro-video-mob.mp4" 
      : "assets/img/intro-video.mp4";

    const source = document.createElement("source");
    source.src = videoSrc;
    source.type = "video/mp4";

    video.appendChild(source);

    video.addEventListener("canplaythrough", function () {
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    });

    video.addEventListener("error", function () {
      preloader.style.display = "none";
    });

    video.load();
  });
  

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const selectedToken = document.querySelector("#selectedToken .dropdown-wrapper-span");

  if (!dropdownToggle || !dropdownMenu || !selectedToken) return;

  // Открытие/закрытие dropdown
  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.style.display === "block";
    document.querySelectorAll(".dropdown-menu").forEach(menu => menu.style.display = "none");
    dropdownMenu.style.display = isOpen ? "none" : "block";
  });

  // Выбор токена
  dropdownMenu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      // Вставляем HTML содержимое li внутрь кнопки
      selectedToken.innerHTML = item.innerHTML;

      // Можно также сохранить значение data-token в нужное место (например, data атрибут на кнопке)
      dropdownToggle.setAttribute("data-selected-token", item.dataset.token);

      dropdownMenu.style.display = "none";
    });
  });

  // Клик вне — закрыть меню
  document.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function setupDropdown(toggleSelector) {
    const toggleBtn = document.querySelector(toggleSelector);
    if (!toggleBtn) return;

    const dropdownWrapper = toggleBtn.closest(".dropdown-wrapper");
    const dropdownMenu = dropdownWrapper.querySelector(".dropdown-menu");
    const valueEl = toggleBtn.querySelector(".dropdown-wrapper-span");

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.style.display === "block";
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none";
      });
      dropdownMenu.style.display = isOpen ? "none" : "block";
    });

    dropdownMenu.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        valueEl.innerHTML = item.querySelector(".dropdown-wrapper-span").innerHTML;
        toggleBtn.setAttribute("data-selected-token", item.dataset.token || "");
        dropdownMenu.style.display = "none";
      });
    });
  }

  setupDropdown("#selectedCurrency");
  setupDropdown("#selectedNetwork");

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.style.display = "none";
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".custom-modal-overlay");
  const withdrawalModal = document.getElementById("withdrawalModal");
  const loadingModal = document.getElementById("loadingModal");
  const resultModal = document.getElementById("resultModal");
  const makeDepositModal = document.getElementById("makeDepositModal");

  const openButtons = document.querySelectorAll("[data-target]");
  const advanceButtons = document.querySelectorAll(".advance-btn");
  const closeButtons = document.querySelectorAll(".close-modal");
  const openDepositBtn = document.querySelector(".open-deposit-btn");

  const hideModal = (modal) => {
    if (!modal.classList.contains("show")) return;
    modal.classList.add("fade-out");

    setTimeout(() => {
      modal.classList.remove("fade-out", "show");
    }, 300); // должно совпадать с transition: 0.3s
  };

  const closeAllModals = () => {
    modals.forEach(hideModal);
  };

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-target");
      const modal = document.querySelector(targetSelector);
      if (modal) {
        closeAllModals();
        modal.classList.add("show");
      }
    });
  });

  if (openDepositBtn) {
    openDepositBtn.addEventListener("click", () => {
      closeAllModals();
      makeDepositModal.classList.add("show");
    });
  }

  advanceButtons.forEach(button => {
    button.addEventListener("click", () => {
      closeAllModals();
      loadingModal.classList.add("show");

      setTimeout(() => {
        hideModal(loadingModal);
        resultModal.classList.add("show");
      }, 1800);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".custom-modal-overlay");
      if (modal) hideModal(modal);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        hideModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
});



function toggleOffcanvas() {
  document.getElementById('offcanvasMenu').classList.toggle('show');
}


  const swiper = new Swiper('.crypto-swiper', {
    slidesPerView: 1.8,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

    const swiper2 = new Swiper('.mobile-table-swiper', {
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });