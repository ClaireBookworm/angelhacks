document.addEventListener('DOMContentLoaded', () => {
	const auth = firebase.auth()
	const firestore = firebase.firestore()
	const isSignedIn = cookie('uid') !== undefined
	const signUpNameInput = document.querySelector('section.hero.sign-up form.sign-up .name-input')
	const signUpEmailInput = document.querySelector('section.hero.sign-up form.sign-up .email-input')
	const signUpSchoolInput = document.querySelector('section.hero.sign-up form.sign-up .school-input')
	const signUpPasswordInput = document.querySelector('section.hero.sign-up form.sign-up .password-input')
	const signUpCommentsInput = document.querySelector('section.hero.sign-up form.sign-up .comments-input')
	const signUpButton = document.querySelector('section.hero.sign-up form.sign-up .submit')
	const signInEmailInput = document.querySelector('.abc') // Fix
	const signInPasswordInput = document.querySelector('.abc') // Fix
	const signInButton = document.querySelector('.abc') // Fix

	let isSignUp = false

	auth.onAuthStateChanged(user =>
		!isSignedIn && user
			? firestore.doc(`users/${user.uid}`).get().then(doc => {
				if (doc.exists) {
					if (isSignUp) {
						setLoading(signUpButton)(false)
						alert(`There is already a user with the email ${signUpEmailInput.value}`)
					} else {
						setLoading(signInButton)(false)
						setCookie('uid')(user.uid)
						location.href = '/'
					}
				} else if (isSignUp)
					firestore.doc(`users/${user.uid}`).set(Object.assign({
						name: signUpNameInput.value,
						email: signUpEmailInput.value,
						school: signUpSchoolInput.value
					}, signUpCommentsInput.value.length ? { comments: signUpCommentsInput.value } : {})).then(() => {
						setLoading(signUpButton)(false)
						setCookie('uid')(user.uid)
						location.href = '/'
					}).catch(() => {
						setLoading(signUpButton)(false)
						alert('There was a problem creating an account. Please try again')
					})
				else {
					setLoading(signInButton)(false)
					alert(`A user already exists with email ${user.email}`)
				}
			})
			: null
	)

	const signUp = () => {
		isSignUp = true
		setLoading(signUpButton)(true)
		const email = signUpEmailInput.value
		auth.createUserWithEmailAndPassword(email, signUpPasswordInput.value).catch(() => {
			setLoading(signUpButton)(false)
			alert(`There is already a user with the email ${email}`)
		})
	}

	const signUpFieldsDidChange = () =>
		signUpButton.disabled = !(
			signUpNameInput.value.length &&
			signUpEmailInput.value.length &&
			signUpSchoolInput.value.length &&
			signUpPasswordInput.value.length > 5
		)
	
	const addSignUpFieldsDidChangeListener = element =>
		element.addEventListener('input', signUpFieldsDidChange)

	document.querySelector('section.hero.sign-up form.sign-up').addEventListener('submit', signUp)
	addSignUpFieldsDidChangeListener(signUpNameInput)
	addSignUpFieldsDidChangeListener(signUpEmailInput)
	addSignUpFieldsDidChangeListener(signUpSchoolInput)
	addSignUpFieldsDidChangeListener(signUpPasswordInput)
})