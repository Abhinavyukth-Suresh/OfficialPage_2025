document.addEventListener("DOMContentLoaded", function () {
    const animationMap = [
        { selector: ".fadeinright_anim", className: "fadeinright_visible" },
        { selector: ".fadeintop_anim", className: "fadeintop_visible" },
        { selector: ".fadeindown_anim", className: "fadeindown_visible" },
        { selector: ".fadeinleft_anim", className: "fadeinleft_visible" },
    ];

    animationMap.forEach(({ selector, className }) => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add(className);
            } else {
            entry.target.classList.remove(className); // <-- Reset when out of view
            }
        });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    });
});


// SIDE BAR : scroll to a section
function scrollToSection(className) {
    const section = document.querySelector(className);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// SHOW DETAILS for PROJ 
function details_proj(className) {
    var parent = className.parentElement;
    var details = className.querySelector('.details');
    var det = document.getElementById("detail_card");
    det.innerHTML = details.innerHTML;

    det.style.left = "5%";
    scrollToSection('.proj');
}

function rem_proj_details(className){     
    parent = className.parentElement;
    parent.style.left = "-90%";
}

// SHOW DETAILS for SIDE
function details_hobby(className) {
    var parent = className.parentElement;
    var details = className.querySelector('.details');
    var det = document.getElementById("detail_card");
    det.innerHTML = details.innerHTML;

    det.style.left = "5%";
    scrollToSection('.hobby');
}
