var options = {
    strings: [    
   'security testing',
   'scraping',
   'quality assurance'
],
backSpeed:20,
typeSpeed: 40,
showCursor: false,
loop:true
};
var typed = new Typed('#works', options);

// Typing effects


const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

button.addEventListener('click', () => {
       menu.classList.toggle('hidden');
});