// Scroll Animation
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".event-card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.style.transform = "translateY(0)";
    } else {
      card.style.transform = "translateY(50px)";
    }
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 9a2ecbbd9282dfd770e018cff0895db15ef58dd6
