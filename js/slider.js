// const horizontScroll = document.querySelector(".brands__cards");
// const leftBtn = document.querySelector(".arrow-left");
// const rightBtn = document.querySelector(".arrow-right");

// leftBtn.addEventListener("click", () => {
//   horizontScroll.style.scrollBehavior = "smooth";
//   horizontScroll.scrollLeft -= 1024;
// });

// rightBtn.addEventListener("click", () => {
//   horizontScroll.style.scrollBehavior = "smooth";
//   horizontScroll.scrollLeft += 1024;
// });

const cardsContainer = document.querySelector(".brands__cards");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// Количество видимых картинок (4 карточки)
const visibleCards = 4;
const cardWidth = cardsContainer.querySelector("img").offsetWidth + 16; // Ширина карточки + отступ

let currentPosition = 0;

// Прокрутка вправо
rightArrow.addEventListener("click", () => {
  const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
  if (currentPosition < maxScroll) {
    currentPosition += cardWidth;
    cardsContainer.scrollLeft = currentPosition;
  }
});

// Прокрутка влево
leftArrow.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition -= cardWidth;
    cardsContainer.scrollLeft = currentPosition;
  }
});
