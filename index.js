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

settings = {
    "particles": {
      "number": {
        "value": 38,
        "density": {
          "enable": true,
          "value_area": 236.7442924896818
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#c4d0eb"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
particlesJS('particles-js', settings);
