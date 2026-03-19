// Typing Effect (looping)
const text = "Web Developer • Creator • Future Builder";
let i = 0;
let isDeleting = false;

function typingEffect() {
    const element = document.getElementById("typing");

    if (!isDeleting) {
        element.innerHTML = text.substring(0, i++);
        if (i > text.length) {
            isDeleting = true;
            setTimeout(typingEffect, 1000);
            return;
        }
    } else {
        element.innerHTML = text.substring(0, i--);
        if (i < 0) {
            isDeleting = false;
        }
    }

    setTimeout(typingEffect, isDeleting ? 30 : 60);
}

typingEffect();


// Mouse Tilt Effect (Desktop Only)
const card = document.getElementById("card");

if (window.matchMedia("(hover: hover)").matches) {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
}


// Button Interaction
document.getElementById("contactBtn").addEventListener("click", () => {
    alert("Let’s build something legendary 🚀");
});
