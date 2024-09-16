// Matrix background
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.getElementById('matrix').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const lettersArray = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  drops.forEach((drop, i) => {
    const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    ctx.fillText(text, i * fontSize, drop * fontSize);

    if (drop * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Typed Text Effect
const typedText = document.querySelector(".typed-text");
const words = ["Welcome to DoSkool", "Get Smart", "Explore Tools"];
let wordIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < words[wordIndex].length) {
    typedText.innerHTML += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typedText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeText, 1000);
});

// Custom Cursor Effect
document.addEventListener('mousemove', function(e) {
  const cursor = document.getElementById('custom-cursor');
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Scroll-based Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
