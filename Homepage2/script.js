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




const impactNumbers = document.querySelectorAll('.impact-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    const increment = target / (duration / 16);

    let current = 0;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString() + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString() + suffix;
        }
    };

    updateCounter();
};


const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            if (!element.classList.contains('animated')) {
                element.classList.add('animated');
                animateCounter(element);
            }
        }
    });
}, observerOptions);

impactNumbers.forEach(number => {
    counterObserver.observe(number);
});





const talentCards = document.querySelectorAll('.talent-card');

const talentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const grid = entry.target;
            const cards = grid.querySelectorAll('.talent-card');

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });

            talentObserver.unobserve(grid);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const talentGrid = document.querySelector('.talent-grid');
if (talentGrid) {
    talentObserver.observe(talentGrid);
}





const timelineSteps = document.querySelectorAll('.timeline-step');
const timelineLine = document.querySelector('.timeline-line');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (timelineLine) {
                timelineLine.classList.add('draw');
            }


            timelineSteps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('visible');
                }, index * 400);
            });

            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const timeline = document.querySelector('.timeline');
if (timeline) {
    timelineObserver.observe(timeline);
}





const successCards = document.querySelectorAll('.success-card');
const sliderDots = document.querySelectorAll('.dot');
const successSlider = document.querySelector('.success-stories-slider');
let currentSlide = 0;
let slideInterval;
const slideDuration = 5000;

const showSlide = (index) => {
    successCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });

    sliderDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });

    currentSlide = index;
};

const nextSlide = () => {
    const next = (currentSlide + 1) % successCards.length;
    showSlide(next);
};

const startSlider = () => {
    slideInterval = setInterval(nextSlide, slideDuration);
};

const stopSlider = () => {
    clearInterval(slideInterval);
};


sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        stopSlider();
        startSlider();
    });
});


if (successSlider) {
    successSlider.addEventListener('mouseenter', stopSlider);
    successSlider.addEventListener('mouseleave', startSlider);
}


if (successCards.length > 0) {
    showSlide(0);
    startSlider();
}





const methodologySteps = document.querySelectorAll('.methodology-step');

const methodologyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            methodologySteps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('visible');
                }, index * 200);
            });
            methodologyObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const methodologyGrid = document.querySelector('.methodology-grid');
if (methodologyGrid) {
    methodologyObserver.observe(methodologyGrid);
}





const impactCards = document.querySelectorAll('.impact-card');

const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            impactCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            });
            impactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const impactSection = document.querySelector('.impact-grid');
if (impactSection) {
    impactObserver.observe(impactSection);
}





const teamCards = document.querySelectorAll('.team-card');

const teamObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            teamCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });
            teamObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const teamGrid = document.querySelector('.team-grid');
if (teamGrid) {
    teamObserver.observe(teamGrid);
}





const valueCards = document.querySelectorAll('.value-card');

const valueObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            valueCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            });
            valueObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const valuesGrid = document.querySelector('.values-grid');
if (valuesGrid) {
    valueObserver.observe(valuesGrid);
}





const recruitmentRows = document.querySelectorAll('.recruitment-row');

const recruitmentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            recruitmentRows.forEach((row, index) => {
                setTimeout(() => {
                    row.classList.add('visible');
                }, index * 300);
            });
            recruitmentObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const recruitmentGrid = document.querySelector('.recruitment-grid');
if (recruitmentGrid) {
    recruitmentObserver.observe(recruitmentGrid);
}


const domainCards = document.querySelectorAll('.domain-card');

const domainObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            domainCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });
            domainObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

const domainsSection = document.querySelector('.domains-grid');
if (domainsSection) {
    domainObserver.observe(domainsSection);
}

