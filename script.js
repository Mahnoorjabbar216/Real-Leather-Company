document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // Toggle current
      item.classList.toggle("active", !isActive);

      // Scroll a bit to reveal expanded content
      if (!isActive) {
        // Timeout to allow DOM update before scrolling
        setTimeout(() => {
          const rect = item.getBoundingClientRect();
          const offset = window.scrollY + rect.top - 100; // adjust -100 as needed
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 150);
      }
    });
  });
});




