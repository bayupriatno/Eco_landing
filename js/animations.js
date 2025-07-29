document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".benefit-card, .timeline-content, .faq-item")
    .forEach((el) => observer.observe(el));

  // Parallax
  window.addEventListener("scroll", () => {
    const heroBg = document.querySelector(".hero-bg-img");
    if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  });

  // Counter Animation
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const finalNum = parseInt(counter.textContent.replace(/\D/g, ""));
    let current = 0;
    const timer = setInterval(() => {
      current += Math.ceil(finalNum / 50);
      if (current >= finalNum) {
        counter.textContent = finalNum;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 50);
  });
});
