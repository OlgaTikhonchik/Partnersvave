document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".header__btn-menu");
    const nav = document.querySelector(".header__menu");
  
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("active");
  
      if (nav.classList.contains("active")) {
        menuButton.classList.add("active");
        menuButton.innerHTML = `
                    <svg class="cross-icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="12" height="2" transform="rotate(90 2 7)"></rect>
                        <rect x="7" y="2" width="12" height="2" transform="rotate(0 7 2)"></rect>
                    </svg>
                `;
      } else {
        menuButton.classList.remove("active");
        menuButton.innerHTML = `
                    <svg class="burger-icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0" width="16" height="3" rx="1.5"></rect>
                        <rect y="6.5" width="16" height="3" rx="1.5"></rect>
                        <rect y="13" width="16" height="3" rx="1.5"></rect>
                    </svg>
                `;
      }
    });
  });