document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".dark-video");
    if (video) {
        video.playbackRate = 0.5; // Adjust playback speed (0.5x is slower, 1.0x is normal)
    }
});
