const watchBtn = document.getElementById("watch");
const closeIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

watchBtn.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active");
    video.play();
});

closeIcon.addEventListener("click", ()=>{
    trailerContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});