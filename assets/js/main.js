// 

const repositoryName = "portfolio";
const repositoryOwner = "vvc10";

fetch(
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/commits`
)
    .then(response => response.json())
    .then(data => {
        const lastCommitDate = new Date(data[0].commit.committer.date);
        document.getElementById("last-commit-date").innerHTML =
            "Last updated on " + lastCommitDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
    });


// 

const texts = ["Web developer.", "UX Designer.", "Graphic designer."];
const speed = 110;
const pause = 800; // <--- the longer delay between text direction changes

function typeWriter(i = 0, index = 1, direction = 1) {
    let displayed = texts[i].slice(0, index);
    document.querySelector("#demo").textContent = displayed;

    if (displayed.length >= texts[i].length) { // start removing after pause
        setTimeout(() => typeWriter(i, index - 1, -1), pause);
    } else if (displayed.length === 0) { // go to next text after pause
        setTimeout(() => typeWriter((i + 1) % texts.length), pause);
    } else { // continue in the current direction
        setTimeout(() => typeWriter(i, index + direction, direction), speed);
    }
}

typeWriter();

//  on scroll navbar => sticky
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90) {
        document.getElementById("navbar")
            .style.margin = "0 0";

        document.getElementById("navbar")
            .style.borderRadius = "0 0 2rem 2rem";

        document.getElementById("navbar")
            .style.maxWidth = '100%';

        document.getElementById("navbar")
            .style.backgroundColor = 'hsl(0, 0%, 13%, 1)';

        document.getElementsByClassName("header")
            .style.removeProperty('background-color');


    }
    else {

        document.getElementById("navbar")
            .style.margin = "1.5rem auto";

        document.getElementById("navbar")
            .style.borderRadius = "2rem";

        document.getElementById("navbar")
            .style.maxWidth = '968px';
            
        document.getElementById("navbar")
            .style.backgroundColor = 'hsl(0, 0%, 13%, 0.9)';

        document.getElementById("header")
            .style.padding = '0rem 1rem';


    }
}





// filter category section //

var elements = {
    projects: document.getElementsByClassName("projects"),
    webs: document.getElementsByClassName("webs"),
    ui: document.getElementsByClassName("ui"),
    apps: document.getElementsByClassName("apps")
};
function filter(type) {
    Object.keys(elements).forEach(function (key) {
        var els = elements[key];
        var state = "none";
        if (key === type) state = "block";
        for (var i = 0; i < els.length; i++) {
            els[i].style.display = state;
        }
    });
}

// 



// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`, { interval: 100 })
sr.reveal(`.about__data, .discount__img`, { origin: 'left' })
sr.reveal(`.about__img, .discount__data`, { origin: 'right' })


// onclick => In about => knowmore disappers //



function knowmore_click() {
    document.getElementById("knowmore_btn").style.display = "none";

    document.getElementById("about__descriptionid")

        .setAttribute(
            "style",
            "-webkit-line-clamp: 14; transition-duration: 2s"
        );
}

function toggle_menu() {
    document.getElementById("nav-menu")

        .setAttribute(
            "style",
            "display: block; transition-duration: .2s"
        );

}

function close_menu() {
    var getmenu = document.getElementById("nav-menu").style.display = "block";

    if (getmenu) {
        document.getElementById("nav-menu").style.display = "none";
    } else {
        document.getElementById("nav-menu").style.display = "block";
    }

}

// 



var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)