/* ==========================================
   PORTFOLIO V2
   IFFA MASOUD
========================================== */

/* =========================
   THEME TOGGLE
========================= */

const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";

    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================
   TYPING TEXT
========================= */

const typing = document.getElementById("typing");

const words = [

    "Frontend Developer",

    "Computer Science Student",

    "Web Developer",

    "Problem Solver"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);

}

typeEffect();


/* =========================
   NAVBAR SHADOW
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
/* =========================
   SCROLL PROGRESS BAR
========================= */

const scrollBar = document.getElementById("scrollBar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    scrollBar.style.width = progress + "%";

});


/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   FADE IN ANIMATION
========================= */

const hiddenElements = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold: 0.15

}

);

hiddenElements.forEach(section => {

observer.observe(section);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const top = section.offsetTop - 120;

const height = section.clientHeight;

if (window.scrollY >= top) {

current = section.getAttribute("id");

}

});

navItems.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});


/* =========================
   CURSOR GLOW
========================= */

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});


/* =========================
   FLOATING ANIMATION
========================= */

const floatingItems = document.querySelectorAll(".floating");

floatingItems.forEach((item, index) => {

item.style.animationDelay = `${index * 0.4}s`;

});
/* =========================
   CODE WINDOW TYPING
========================= */

const codeTyping = document.getElementById("codeTyping");

const codeLines = [

`const developer = {`,
`  name: "Iffa Masoud",`,
`  role: "Computer Science Student",`,
`  skills: ["HTML", "CSS", "JavaScript"],`,
`  learning: "Frontend Development",`,
`  passion: "Building Beautiful Websites",`,
`};`,
``,
`console.log("Welcome to my portfolio!");`

];

let line = 0;
let character = 0;

function typeCode() {

    if (!codeTyping) return;

    if (line < codeLines.length) {

        if (character < codeLines[line].length) {

            codeTyping.innerHTML += codeLines[line].charAt(character);

            character++;

            setTimeout(typeCode, 25);

        }

        else {

            codeTyping.innerHTML += "\n";

            line++;

            character = 0;

            setTimeout(typeCode, 250);

        }

    }

}

window.addEventListener("load", () => {

    setTimeout(typeCode, 1000);

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

contactForm.reset();

});

}


/* =========================
   BUTTON HOVER EFFECT
========================= */

const buttons = document.querySelectorAll("button, a");

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "translateY(-3px)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "";

});

});


/* =========================
   PARALLAX BLOBS
========================= */

const blur1 = document.querySelector(".blur1");
const blur2 = document.querySelector(".blur2");

window.addEventListener("mousemove", (e) => {

const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

if (blur1) {

blur1.style.transform =
`translate(${x*20}px, ${y*20}px)`;

}

if (blur2) {

blur2.style.transform =
`translate(${-x*20}px, ${-y*20}px)`;

}

});


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log("%cWelcome to Iffa Masoud's Portfolio",
"font-size:20px;font-weight:bold;color:#4F8CFF;");

console.log("%cThanks for visiting! 🚀",
"font-size:14px;color:#888;");