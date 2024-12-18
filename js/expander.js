document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".js-button-expander");
  
    faqItems.forEach((item) => {
      item.addEventListener("click", function () {
        const faqItem = this.closest(".faq__item");
  
        faqItem.classList.toggle("active");
  
        const content = faqItem.querySelector(".js-expand-content");
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const faqTitles = document.querySelectorAll(".faq__subtitle");
  
    faqTitles.forEach(function (title) {
      title.addEventListener("click", function () {
        title.classList.toggle("active");
      });
    });
  });