/*==================================================
  IFFA MASOUD PORTFOLIO
  Modern JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      THEME TOGGLE
    =========================================*/

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        if (themeToggle) themeToggle.textContent = "🌙";

    } else {

        document.body.classList.remove("light-mode");

        if (themeToggle) themeToggle.textContent = "☀️";

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            themeToggle.textContent =
                isLight ? "🌙" : "☀️";

        });

    }

    /*=========================================
      MOBILE MENU
    =========================================*/

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

            });

        });

    }

    /*=========================================
      TYPING EFFECT
    =========================================*/

    const typing = document.getElementById("typing");

    const words = [

        "Frontend Developer",

        "Computer Science Student",

        "Responsive Web Designer",

        "Always Learning 🚀"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeWriter() {

        if (!typing) return;

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeWriter, 1500);

                return;

            }

        } else {

            typing.textContent =
                currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeWriter, deleting ? 45 : 90);

    }

    typeWriter();

});
/*=========================================
  NAVBAR SCROLL EFFECT
=========================================*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/*=========================================
  SCROLL PROGRESS BAR
=========================================*/

const scrollBar = document.getElementById("scrollBar");

window.addEventListener("scroll", () => {

    if (!scrollBar) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    scrollBar.style.width = progress + "%";

});


/*=========================================
  BACK TO TOP BUTTON
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("showTop");

    } else {

        backToTop.classList.remove("showTop");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*=========================================
  ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + currentSection

        ) {

            link.classList.add("active");

        }

    });

});


/*=========================================
  SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});
/*=========================================
  CURSOR GLOW
=========================================*/

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;

});


/*=========================================
  FADE IN ANIMATION
=========================================*/

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

document.querySelectorAll(".section").forEach(section=>{

observer.observe(section);

});


/*=========================================
  FLOATING CARDS
=========================================*/

const floatingCards=document.querySelectorAll(".floating-card");

floatingCards.forEach((card,index)=>{

card.style.animationDelay=`${index*0.4}s`;

});


/*=========================================
  PARALLAX BACKGROUND
=========================================*/

const blur1=document.querySelector(".blur1");
const blur2=document.querySelector(".blur2");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

if(blur1){

blur1.style.transform=
`translate(${x*18}px,${y*18}px)`;

}

if(blur2){

blur2.style.transform=
`translate(${-x*18}px,${-y*18}px)`;

}

});


/*=========================================
  CONTACT FORM
=========================================*/

const contactForm=document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const button=contactForm.querySelector("button");

button.textContent="Message Sent ✓";

button.disabled=true;

setTimeout(()=>{

button.textContent="Send Message";

button.disabled=false;

contactForm.reset();

},2500);

});

}


/*=========================================
  DEVELOPER CONSOLE MESSAGE
=========================================*/

console.log(
"%cWelcome to Iffa Masoud's Portfolio",
"font-size:20px;font-weight:bold;color:#4F8CFF;"
);

console.log(
"%cDesigned & Developed by Iffa Masoud 🚀",
"font-size:14px;color:#888;"
);


/*=========================================
  PAGE LOADED
=========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
