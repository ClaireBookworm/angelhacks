const cookie = name => {
	const cookies = document.cookie.match(`(^|[^;]+)\\s*${name}\\s*=\\s*([^;]+)`)
	return cookies ? cookies.pop() : undefined
}

const setCookie = name => value =>
	document.cookie = `${name}=${value}; expires=Thu, 01 Jan 3000 00:00:00 GMT`

const removeCookie = name =>
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`