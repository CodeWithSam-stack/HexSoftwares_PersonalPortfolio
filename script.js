// =========================
// SCROLL ANIMATION
// =========================

const elements = document.querySelectorAll(
    "section, .hero, .stats"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

elements.forEach(el => observer.observe(el));


// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.getBoundingClientRect().left - radius}px`;

        circle.style.top =
            `${e.clientY - this.getBoundingClientRect().top - radius}px`;

        circle.classList.add("ripple");

        const oldRipple = this.querySelector(".ripple");

        if (oldRipple) {
            oldRipple.remove();
        }

        this.appendChild(circle);

    });

});


// =========================
// HERO IMAGE HOVER EFFECT
// =========================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mouseenter", () => {
        heroImage.style.transform = "scale(1.05)";
        heroImage.style.transition = "0.3s ease";
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "scale(1)";
    });

}


// =========================
// CERTIFICATE CARD EFFECT
// =========================

const certCards = document.querySelectorAll(".cert-card");

certCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});


// =========================
// SMOOTH PAGE LOAD EFFECT
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});