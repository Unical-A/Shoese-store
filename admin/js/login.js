function signIn() {
	let login = document.getElementById('login').value
	let password = document.getElementById('password').value

	if (login == "admin" && password == "1234") {
		localStorage.setItem('admin', 'ok')
		location.href = 'admin.html'
	}
}







