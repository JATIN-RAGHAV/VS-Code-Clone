// script.js
let lastScrollTop = 0;
const appBar = document.querySelector('.app-bar-div');

window.addEventListener('scroll', function() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        appBar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        appBar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});
