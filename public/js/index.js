document.addEventListener('DOMContentLoaded', () => {
	const auth = firebase.auth()
	const firestore = firebase.firestore()
	const isSignedIn = cookie('uid') !== undefined
	const signUpNameInput = document.querySelector('section.hero.sign-up form.sign-up .name-input')
	const signUpEmailInput = document.querySelector('section.hero.sign-up form.sign-up .email-input')
	const signUpSchoolInput = document.querySelector('section.hero.sign-up form.sign-up .school-input')
	const signUpPasswordInput = document.querySelector('section.hero.sign-up form.sign-up .password-input')
	const signUpCommentsInput = document.querySelector('section.hero.sign-up form.sign-up .comments-input')

	auth.onAuthStateChanged(user =>
		!isSignedIn && user
			? firestore.doc(`users/${user.uid}`).get().then(doc => {
				if (doc.exists) {
					setLoading(signUpButton, false)
					alert(`There is already a user with the email ${emailInput.value}`)
				} else
					firestore.doc(`users/${user.uid}`).set({
						name: nameInput.value,
						email: emailInput.value
					}).then(() => {
						setLoading(signUpButton, false)
						setCookie('uid', user.uid)
						if (fromAction && fromUrl)
							close()
						else
							location.href = searchParams.get('from') || '/'
					}).catch(_error => {
						setLoading(signUpButton, false)
						alert('There was a problem creating an account. Please try again')
					})
			})
			: null
	)

	const setSignUpButtonsLoading = loading =>
		

	const signUp = () => {
		
	}

	const signUpFieldsDidChange = () =>
		document.querySelector('section.hero.sign-up form.sign-up .submit').disabled = !(
			signUpNameInput.value.length &&
			signUpEmailInput.value.length &&
			signUpSchoolInput.value.length &&
			signUpCommentsInput.value.length > 5
		)
	
	const addSignUpFieldsDidChangeListener = element =>
		element.addEventListener('input', signUpFieldsDidChange)

	document.querySelector('section.hero.sign-up form.sign-up').addEventListener('submit', signUp)
	addSignUpFieldsDidChangeListener(signUpNameInput)
	addSignUpFieldsDidChangeListener(signUpEmailInput)
	addSignUpFieldsDidChangeListener(signUpSchoolInput)
	addSignUpFieldsDidChangeListener(signUpPasswordInput)
})