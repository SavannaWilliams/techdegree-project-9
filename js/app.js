// Dynamically update copyright year in footer
let copyright = document.getElementById('footer');
let d = new Date();
let y = d.getFullYear();
copyright.innerHTML = `Copyright &#169; ${y} Savanna Williams`;

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
let educationSection = document.getElementById('education');
let skillsSection = document.getElementById('skill-gallery');
let contactSection = document.getElementById('contact');

window.addEventListener('scroll', e => {
    // Get the page height to calculate responsive percentages down the page for the scroll.
    let pageHeight = document.body.clientHeight;
    let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; //Extra conditions added to account for different browsers.

    //Display the about section when the user has scrolled more than a third down the page. Wait longer to display on taller screens (like mobile phones).
    console.log(pageHeight);
    // Desktop
    if (pageHeight < 1700) {
        if (scrollDistance > pageHeight * 0.2) {
            educationSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.25) {
            skillsSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.31) {
            contactSection.classList.add('is-visible');
        }
    // Mobile phones
    } else if (pageHeight > 2200) {
        if (scrollDistance > pageHeight * 0.45) {
            educationSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.5) {
            skillsSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.6) {
            contactSection.classList.add('is-visible');
        }
    // Smaller desktop screens and tablets
    } else {
        if (scrollDistance > pageHeight * 0.3) {
            educationSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.37) {
            skillsSection.classList.add('is-visible');
        }
        if (scrollDistance > pageHeight * 0.44) {
            contactSection.classList.add('is-visible');
        }
    }

});
