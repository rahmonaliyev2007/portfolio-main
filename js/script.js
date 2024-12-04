function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const texts = [
    "Welcome to my portfolio !",
    "Explore amazing features !",
    "Take a look at my projects and skills !",
];

let textIndex = 0;
let charIndex = 0;
const typeSpeed = 100; // Harf yozish tezligi
const eraseSpeed = 50; // Harf o'chirish tezligi
const delayBetweenTexts = 3000; // To'liq yozilganidan keyin kutish (ms)
const typewriterText = document.getElementById("typewriter-text");

function type() {
    if (charIndex < texts[textIndex].length) {
        typewriterText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typeSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});



// =========================================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) { 
    navbar.classList.add('scrolled'); 


  } else {
    navbar.classList.remove('scrolled');
  }
});