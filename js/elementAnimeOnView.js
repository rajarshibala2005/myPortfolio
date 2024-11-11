document.addEventListener("DOMContentLoaded", () => {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(`Entry for ${entry.target.tagName}: isIntersecting = ${entry.isIntersecting}`);
      if (entry.isIntersecting) {
        console.log(`Element ${entry.target.tagName} is in view`);
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      } else {
        console.log(`Element ${entry.target.tagName} is out of view`);
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0 });

  document.querySelectorAll(".fade-slide-top, .fade-slide-bottom, .logo-image, .fade-slide-left, .slide-left_2_right").forEach(element => {
    console.log(`Observing element: ${element.tagName}`);
    sectionObserver.observe(element);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(`Element ${entry.target.tagName} is in view`);
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      } else {
        console.log(`Element ${entry.target.tagName} is out of view`);
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.9 });

  document.querySelectorAll(".aboutUs-anime").forEach(element => {
    console.log(`Observing element: ${element.tagName}`);
    sectionObserver.observe(element);
  });
});
