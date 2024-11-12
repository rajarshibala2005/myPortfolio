let scrollTimeout;
const sections = document.querySelectorAll(".section");
let currentSection = 0;
let isScrolling = false;

// Observe which section is in the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isScrolling) {
        currentSection = Array.from(sections).indexOf(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe each section
sections.forEach((section) => observer.observe(section));

// Throttled scroll event listener for the specific container
document.querySelector(".scroll-container").addEventListener("wheel", (event) => {
  if (scrollTimeout || isScrolling) return;

  // Only handle the scroll if it's targeting our scroll container or its children
  if (!event.target.closest(".scroll-container")) return;

  scrollTimeout = setTimeout(() => {
    isScrolling = true;

    // Determine scroll direction
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      currentSection++;
    } else if (event.deltaY < 0 && currentSection > 0) {
      currentSection--;
    }

    // Smooth scroll to the selected section
    sections[currentSection].scrollIntoView({ behavior: "smooth" });

    // Reset flags after scrolling finishes
    setTimeout(() => {
      isScrolling = false;
    }, 600); // Adjust duration based on scroll duration

    scrollTimeout = null;
  }, 200); // Adjust timeout duration as needed
});
