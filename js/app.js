
// Dynamically update copyright year in footer
let copyright = document.getElementById('footer');
let d = new Date();
let y = d.getFullYear();
copyright.innerHTML = `Copyright &#169; ${y} Savanna Williams`;