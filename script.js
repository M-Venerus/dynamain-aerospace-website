const hamburger = document.querySelector(".hamburger-button");
const navMenu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("Click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active:");
}))