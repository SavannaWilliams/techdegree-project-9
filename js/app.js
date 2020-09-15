// Dynamically update copyright year in footer
let copyright = document.getElementById('footer');
let d = new Date();
let y = d.getFullYear();
copyright.innerHTML += `Copyright &#169; ${y} Savanna Williams`;

// Filter portfolio by buttons
let filterBtns = document.getElementById('portfolio-buttons');
let allBtn = document.getElementById('btn-all');
let uiBtn = document.getElementById('btn-ui');
let uxBtn = document.getElementById('btn-ux');
let webDevBtn = document.getElementById('btn-web-dev');
// Get all portfolio cards
let portfolioItems = document.getElementsByClassName('portfolio-card');

// Focus on all button on page load, but with no transition. Then allow for transitions.
allBtn.focus();
allBtn.classList.remove('no-transition');

// Turn on/off portfolio card display based on button clicked
filterBtns.addEventListener('click', e => {
    if (e.target === uiBtn) {
        for (let i = 0; i < portfolioItems.length; i++) {
            if(portfolioItems[i].dataset.type !== 'ui') {
                portfolioItems[i].style.display = 'none';
            } else {
                portfolioItems[i].style.display = '';
            }
        }
    } else if (e.target === uxBtn) {
        for (let i = 0; i < portfolioItems.length; i++) {
            if(portfolioItems[i].dataset.type !== 'ux') {
                portfolioItems[i].style.display = 'none';
            } else {
                portfolioItems[i].style.display = '';
            }
        }
    } else if (e.target === webDevBtn) {
        for (let i = 0; i < portfolioItems.length; i++) {
            if(portfolioItems[i].dataset.type !== 'web-dev') {
                portfolioItems[i].style.display = 'none';
            } else {
                portfolioItems[i].style.display = '';
            }
        }
    } else if (e.target === allBtn) {
        for (let i = 0; i < portfolioItems.length; i++) {
            portfolioItems[i].style.display = '';
        }
    }
});

// Fade in bottom content on scroll (DIY Scrollspy)
let homeLink = document.getElementById('home');
let educationSection = document.getElementById('education');
let skillsSection = document.getElementById('skill-gallery');
let contactSection = document.getElementById('contact');

let nav = document.getElementById('navigation');
let navLinks = document.querySelectorAll('#navigation a');

window.addEventListener('scroll', e => {
    // Get the page height to calculate responsive percentages down the page for the scroll.
    let body = document.body;
    let html = document.documentElement;
    let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight ); //Extra conditions added to account for different browsers and find highest number returned.
    let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; //Extra conditions added to account for different browsers.
    console.log(pageHeight);
    console.log(scrollDistance);

    //Display the about section when the user has scrolled more than a third down the page. Wait longer to display on taller screens (like mobile phones).

    // Desktop
    if (pageHeight < 3000) {
        if (scrollDistance > pageHeight * 0.38) {
            educationSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.45) {
            skillsSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.58) {
            contactSection.classList.add('is-visible');
        }
    // Mobile phones
    } else if (pageHeight >= 3000) {
        if (scrollDistance > pageHeight * 0.5) {
            educationSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.65) {
            skillsSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.7) {
            contactSection.classList.add('is-visible');
        }
    } 

    // Reset nav home link to active color at top of page
    if (scrollDistance < 100) {
        for (let i= 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active-link');
        }
        homeLink.classList.add('active-link');
    }

});

// Change nav link colors on click
nav.addEventListener('click', e => {
    if (e.target.textContent === 'Portfolio') {
        for (let i= 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active-link');
        }
        e.target.classList.add('active-link');
    } else if (e.target.textContent === 'About') {
        for (let i= 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active-link');
        }
        e.target.classList.add('active-link');
    } else if (e.target.textContent === 'Contact') {
        for (let i= 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active-link');
        }
        e.target.classList.add('active-link');
    } else if (e.target.textContent === 'Home') {
        for (let i= 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active-link');
        }
        e.target.classList.add('active-link');
    }
});