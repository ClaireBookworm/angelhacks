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
	const signInEmailInput = document.querySelector('.modal.sign-in .email-input')
	const signInPasswordInput = document.querySelector('.modal.sign-in .password-input')
	const signInButton = document.querySelector('.modal.sign-in .submit')
	const signUpForm = document.querySelector('section.hero.sign-up form.sign-up')

	let isSignUp = false

	if (cookie('uid'))
		document.querySelector('section.hero.sign-up').innerHTML = ''

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
					return firestore.doc(`users/${user.uid}`).set(Object.assign({
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
				return Promise.resolve()
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
	
	const signIn = () => {
		isSignUp = false
		setLoading(signInButton)(true)
		const email = signInEmailInput.value
		auth.signInWithEmailAndPassword(email, signInPasswordInput.value).catch(() => {
			setLoading(signInButton)(false)
			alert(`Invalid email/password`)
		})
	}

	const signInFieldsDidChange = () =>
		signInButton.disabled = !(signInEmailInput.value.length && signInPasswordInput.value.length)
	
	const addSignUpFieldsDidChangeListener = element =>
		element.addEventListener('input', signUpFieldsDidChange)
	
	const addSignInFieldsDidChangeListener = element =>
		element.addEventListener('input', signInFieldsDidChange)

	const showSignInModal = () =>
		document.querySelector('.modal.sign-in').classList.add('is-active')

	const hideSignInModal = () =>
		document.querySelector('.modal.sign-in').classList.remove('is-active')

	signUpForm ? signUpForm.addEventListener('submit', signUp) : undefined
	addSignUpFieldsDidChangeListener(signUpNameInput)
	addSignUpFieldsDidChangeListener(signUpEmailInput)
	addSignUpFieldsDidChangeListener(signUpSchoolInput)
	addSignUpFieldsDidChangeListener(signUpPasswordInput)
	document.querySelector('.navbar-auth-button.sign-in').addEventListener('click', showSignInModal)
	addSignInFieldsDidChangeListener(signInEmailInput)
	addSignInFieldsDidChangeListener(signInPasswordInput)
	document.querySelectorAll('.close-sign-in').forEach(element => element.addEventListener('click', hideSignInModal))
	signInButton.addEventListener('click', signIn)
})