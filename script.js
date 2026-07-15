/* ==========================================
   PORTFOLIO JAVASCRIPT
   PART 1
========================================== */

/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ===============================
   SMOOTH SCROLL
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===============================
   NAVBAR SCROLL EFFECT
================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});


/* ===============================
   TYPING EFFECT
================================ */

const typing = document.getElementById("typing");

const words = [

    "Frontend Developer",

    "Computer Science Student",

    "Problem Solver",

    "Future Software Engineer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingAnimation() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingAnimation, 1800);

            return;

        }

    }

    else {

        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(

        typingAnimation,

        deleting ? 55 : 110

    );

}

typingAnimation();


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeToggle = document.getElementById("themeToggle");

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light-theme");

    themeToggle.innerHTML = "☀️";

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML = "☀️";

    }

    else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML = "🌙";

    }

});


/* ===============================
   HERO IMAGE FLOATING
================================ */

const profile = document.querySelector(".profile-wrapper");

let move = 0;

setInterval(() => {

    move += 0.05;

    profile.style.transform =

        `translateY(${Math.sin(move) * 10}px)`;

}, 20);
/* ==========================================
   PART 2
========================================== */


/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(
".section, .project-card, .skill-box, .info-card, .research-card, .certificate-card"
);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(item=>{

revealObserver.observe(item);

});



/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");

const navigationLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

currentSection=section.getAttribute("id");

}

});

navigationLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + currentSection){

link.classList.add("active");

}

});

});



/* ===============================
   BACK TO TOP BUTTON
================================ */

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("show-top");

}

else{

backToTop.classList.remove("show-top");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



/* ===============================
   SCROLL PROGRESS BAR
================================ */

const scrollBar=document.getElementById("scrollBar");

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progress=

(window.scrollY/totalHeight)*100;

scrollBar.style.width=progress+"%";

});



/* ===============================
   BUTTON RIPPLE EFFECT
================================ */

const buttons=document.querySelectorAll(

".primary-btn,.secondary-btn"

);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.classList.add("hovering");

});

button.addEventListener("mouseleave",()=>{

button.classList.remove("hovering");

});

});



/* ===============================
   PROJECT CARD HOVER
================================ */

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});



/* ===============================
   PARALLAX HERO EFFECT
================================ */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

hero.style.backgroundPositionY=value*0.3+"px";

});



/* ===============================
   CURRENT YEAR
================================ */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}