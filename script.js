const text = document.querySelector(".animated-text");
const letters = text.textContent.split("");

text.textContent = ""; // yazıyı temizle

letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = 0;
    text.appendChild(span);

    gsap.to(span, {
        opacity: 1,
        y: 0,
        delay: i * 0.05,
        duration: 0.4,
        ease: "power2.out",
    });
});
