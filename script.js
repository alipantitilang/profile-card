const text = "Web Developer | Creator | Future Builder";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}

typingEffect();
