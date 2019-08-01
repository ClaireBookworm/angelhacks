document.addEventListener('DOMContentLoaded', () => {
	const auth = firebase.auth()
	const signOutButton = document.querySelector('.navbar-auth-button.sign-out')

	const signOut = () => {
		setLoading(signOutButton)(true)
		auth.signOut().then(() => {
			setLoading(signOutButton)(false)
			removeCookie('uid')
			location.reload()
		}).catch(() => {
			setLoading(signOutButton)(false)
			alert('An error occurred. Please try again')
		})
	}

	signOutButton.addEventListener('click', signOut)
})