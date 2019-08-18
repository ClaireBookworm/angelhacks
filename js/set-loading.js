const setLoading = element => isLoading => {
	if (Array.isArray(element))
		return element.forEach(subElement => setLoading(subElement)(isLoading))
	if (isLoading)
		element.classList.add('is-loading')
	else
		element.classList.remove('is-loading')
}