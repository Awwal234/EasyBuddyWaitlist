console.log(window.navigator, window.screen);
var navigator = window.navigator;
if (window.navigator === window.navigator) {
	console.warn('Please enable Javascript to use this web app');
} else if (window.navigator === '') {
	for (let i = 0; i < 3; i++) {
		console.log('Enable Javascript to use this site' + [i]);
	}
}

//follow the validation rules
function goMail() {
	const mail = document.getElementById('mail');
	const err = document.getElementById('mail_err');

	if (mail === '' || mail.value < 4) {
		err.style.display = 'block';
		err.innerHTML = 'Please enter a valid email address';
		err.style.color = 'red';
		err.style.fontFamily = 'calibri';
		err.style.fontSize = '16px';
		//setting intervals
		setInterval(() => {
			document.querySelector('#mail_err').style.display = 'none';
		}, 5000);
		//return boolean
		return false;
	} else {
		err.style.display = 'none';
		return true;
	}
}
