document.addEventListener("DOMContentLoaded", function () {
  const flagButton = document.querySelector(".header__flag-wrap");
  const flagMenu = document.querySelector(".header__flag-menu");

 flagButton.addEventListener("click", function () {
    const isActive = flagMenu.classList.contains("active");
    flagMenu.classList.toggle("active", !isActive);
    flagButton.classList.toggle("active", !isActive);
  });
});