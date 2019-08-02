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
document.getElementById("form").addEventListener("submit",(e)=> {
  e.preventDefault();
	$.post("https://AngelHacks-Reg--hacker22.repl.co/addperson",
  	{
    "First-Name":document.getElementById("fname").value,
	"Last-Name":document.getElementById("lname").value,
       "School":document.getElementById("school").value,
	"Gender":document.getElementById("gender").value,
	"other":document.getElementById("comment").value,
  "email":document.getElementById("email").value,
  "captcha":document.getElementById("g-recaptcha-response").value
  },
  function (data) {
    if (data.success == 0) {
      alert("Please check the reCaptcha box")
    }
	document.getElementById("fname").value = "";
	  document.getElementById("lname").value = "";
	document.getElementById("school").value = "";
	document.getElementById("comment").value = "";
  	document.getElementById("email").value = "";
  });
});
$("#submit").click(function () {

})
