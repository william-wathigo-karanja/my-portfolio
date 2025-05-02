document.addEventListener("DOMContentLoaded", function () {
    // Greeting
    const greeting = document.createElement("p");
    greeting.className = "greeting";

    const hour = new Date().getHours();
    let message = "Welcome to my portfolio!";

    if (hour < 12) {
        message = "Good morning! 🌞";
    } else if (hour < 18) {
        message = "Good afternoon! ☀️";
    } else {
        message = "Good evening! 🌙";
    }

    greeting.textContent = message;
    document.querySelector("header").appendChild(greeting);

    // Dark Mode Toggle
    const toggleButton = document.getElementById("toggle-theme");

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
