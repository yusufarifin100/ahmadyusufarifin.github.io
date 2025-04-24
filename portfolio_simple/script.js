const words = ["Your Name", "a Web3 Developer", "a Full-Stack Engineer"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typedText = document.querySelector(".typed-text");

function type() {
    currentWord = words[i];
    let display = currentWord.substring(0, j);
    typedText.textContent = display;

    if (!isDeleting && j < currentWord.length) {
        j++;
        setTimeout(type, 100);
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % words.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", type);
