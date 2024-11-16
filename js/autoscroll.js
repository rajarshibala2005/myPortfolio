// Function to handle scroll events
function setupAutoScroll(scrollContainerId) {
  const scrollContainer = document.getElementById(scrollContainerId);
  let isUserScrolling = false;
  let autoScrollInterval;

  // Start auto-scroll
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      // If scrolled to the bottom, reset to the top
      if (
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight
      ) {
        scrollContainer.scrollTop = 0; // Reset to the top
      } else {
        scrollContainer.scrollBy({ top: 100, behavior: "smooth" }); // Scroll down by 20px
      }
    }, 1000); // 1.5-second interval
  }

  // Stop auto-scroll on user interaction
  scrollContainer.addEventListener("scroll", () => {
    if (!isUserScrolling) {
      clearInterval(autoScrollInterval);
      isUserScrolling = true;

      // Resume auto-scroll after 3 seconds of inactivity
      setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
      }, 3000);
    }
  });

  setupAutoScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  setupAutoScroll("education-table");
});
