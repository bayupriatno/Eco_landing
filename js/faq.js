document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      faqItems.forEach((faq) => faq.classList.remove("active"));
      item.classList.toggle("active");
    });
  });
});
