setTimeout(function() {
    document.querySelector('header').classList.add('fade-in');
    document.querySelector('.explore-btn').classList.add('fade-in');
    document.querySelector('.explore-btn').style.opacity = 1;
}, 2000);


function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}