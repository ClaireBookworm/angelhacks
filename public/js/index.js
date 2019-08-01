document.addEventListener('DOMContentLoaded', () => {
	new SmoothScroll('a[href*="#"]', { speed: 450 })
	function application() {
		document.getElementById('application').innerHTML =
			'Thanks for applying!'
	}
	// document.getElementById('form').addEventListener('submit', e => {
	// 	e.preventDefault()
	// 	$.post(
	// 		'https://angelhacksreg.now.sh/addperson',
	// 		{
	// 			'First-Name': document.getElementById('fname').value,
	// 			'Last-Name': document.getElementById('lname').value,
	// 			School: document.getElementById('school').value,
	// 			Gender: document.getElementById('gender').value,
	// 			other: document.getElementById('comment').value,
	// 			email: document.getElementById('email').value,
	// 			captcha: document.getElementById('g-recaptcha-response').value
	// 		},
	// 		function(data) {
	// 			if (data.success == 0) {
	// 				alert('Please check the reCaptcha box')
	// 			}
	// 			document.getElementById('fname').value = ''
	// 			document.getElementById('lname').value = ''
	// 			document.getElementById('school').value = ''
	// 			document.getElementById('comment').value = ''
	// 			document.getElementById('email').value = ''
	// 		}
	// 	)
	// })
})