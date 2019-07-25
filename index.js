function application() {
    document.getElementById("application").innerHTML = "Thanks for applying!"
}
(function () {
    var burger = document.querySelector('#nav-toggle');
    var menu = document.querySelector('.navbar-menu');
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 450
});