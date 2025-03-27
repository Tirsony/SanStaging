document.addEventListener("DOMContentLoaded", () => {
    let track = document.querySelector(".product-track");
    setInterval(() => {
        track.style.transition = "transform 0.5s linear";
        track.style.transform = "translateX(-25%)";
        setTimeout(() => {
            track.appendChild(track.firstElementChild);
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
        }, 500);
    }, 3000);
});
