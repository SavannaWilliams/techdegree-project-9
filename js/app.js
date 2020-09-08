
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