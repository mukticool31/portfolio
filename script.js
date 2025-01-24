// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert(`Navigating to ${link.textContent}`);
        });
    });
});
