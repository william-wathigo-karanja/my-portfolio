document.addEventListener("DOMContentLoaded", function (){
    const greeting = document.createElement("p");
    const hour = new Date().getHours();
    let message = "Welcome to my portfolio!";

    if (hour < 12){
        message = "Good morning!  🌞";
    } else if (hour <18){
        message = "Good afternoon! ☀️";
    } else {
        message = "Good evening! 🌙"
    }

    greeting.textContent = message;
    document.querySelector("header").appendChild(greeting);
});