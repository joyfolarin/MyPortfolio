/* =====================================================
   JOY FOLARIN PORTFOLIO
   JAVASCRIPT
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// ================= MENU =================

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// ================= CLOSE MENU =================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= ESCAPE KEY =================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navMenu.classList.remove("active");

    }

});


// ================= HEADER SCROLL EFFECT =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,9,9,0.94)";

    } else {

        header.style.background = "rgba(8,9,9,0.82)";

    }

});


// ================= REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".skill-card, .service-item, .project-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
