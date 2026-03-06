const header = document.getElementById('header');

const triggerHeight = 150;


window.addEventListener('scroll', () => {

    if (window.scrollY > triggerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

});


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
    navMenu.classList.add("active");
    closeMenu.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeNav() {
    navMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeNav);

document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", closeNav);
});