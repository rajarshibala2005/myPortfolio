document.addEventListener("DOMContentLoaded", () => {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(`Element ${entry.target.tagName} is in view`);
        entry.target.classList.add("visible"); // Add 'visible' class when in view
        observer.unobserve(entry.target); // Stop observing after animation triggers
      } else {
        console.log(`Element ${entry.target.tagName} is out of view`);
      }
    });
  }, { threshold: 0.4 });

  // Select elements and observe them
  document.querySelectorAll(".fade-slide-top, .fade-slide-bottom, .logo-image, .fade-slide-left").forEach(element => {
    console.log(`Observing element: ${element.tagName}`);
    sectionObserver.observe(element);
  });
});
