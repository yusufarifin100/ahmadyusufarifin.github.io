const words = ["Ahmad Yusuf Arifin", "a Web Developer"];
    let i = 0, j = 0, isDeleting = false;
    const typedText = document.querySelector(".typed-text");
    function type() {
      let current = words[i];
      typedText.textContent = current.substring(0, j);
      if (!isDeleting && j < current.length) { j++; setTimeout(type, 100); }
      else if (isDeleting && j > 0) { j--; setTimeout(type, 50); }
      else { isDeleting = !isDeleting; if (!isDeleting) i = (i + 1) % words.length; setTimeout(type, 800); }
    }
    document.addEventListener("DOMContentLoaded", type);