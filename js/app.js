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

  const advanceButtons = document.querySelectorAll(".advance-btn");

  const closeAllModals = () => {
    modals.forEach(modal => modal.style.display = "none");
  };

  advanceButtons.forEach(button => {
    button.addEventListener("click", () => {
      closeAllModals(); 
      loadingModal.style.display = "flex";

      setTimeout(() => {
        loadingModal.style.display = "none";
        resultModal.style.display = "flex";
      }, 1800);
    });
  });

  const openDepositBtn = document.querySelector(".open-deposit-btn");
  if (openDepositBtn) {
    openDepositBtn.addEventListener("click", () => {
      closeAllModals();
      makeDepositModal.style.display = "flex";
    });
  }

  const closeBtns = document.querySelectorAll(".close-modal");
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
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