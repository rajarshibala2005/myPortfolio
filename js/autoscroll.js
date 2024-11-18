// Function to handle auto-scroll behavior
function setupAutoScroll(scrollContainerId) {
  const scrollContainer = document.getElementById(scrollContainerId);
  let isUserScrolling = false;
  let autoScrollInterval;

  // Reset scroll position to the top when the page loads
  scrollContainer.scrollTop = 0;

  // Start auto-scroll
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      // Check if scrolled to the bottom
      if (
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight
      ) {
        scrollContainer.scrollTop = 0; // Reset to the top
      } else {
        scrollContainer.scrollBy({ top: 200, behavior: "smooth" }); // Scroll down by 200px
      }
    }, 800); // 800ms interval
  }

  // Stop auto-scroll on user interaction
  scrollContainer.addEventListener("scroll", () => {
    if (!isUserScrolling) {
      isUserScrolling = true;
      clearInterval(autoScrollInterval); // Stop auto-scroll

      // Resume auto-scroll after 3 seconds of inactivity
      setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
      }, 1500);
    }
  });

  // Initialize auto-scroll
  startAutoScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  setupAutoScroll("education-table"); // Replace "education-table" with the actual ID of your scrollable container
});
