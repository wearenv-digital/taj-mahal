const eventForm = document.querySelector('#book-ticket');
var fullNameEl = document.getElementById('full-name');
var emailEl = document.getElementById('email');
var telephoneEl = document.getElementById('telephone');
var time = document.getElementById('select-time');
var firstTab = document.getElementById('tab-1');
// MAKE SURE THE SUBMIT BUTTON IS NOT PRESSED UNTILL THE FIELDS ARE COMPLETE

// const checkName = () => {
// 	let valid = false;
// 	const fullName = fullNameEl.value.trim();

// 	if (!isRequired(fullName)) {
// 		showError(fullName, 'Name field cannot be left blank');
// 	} else if (!isNameValid(fullName)) {
// 		showError(fullName, 'Name must only contain letters');
// 	} else {
// 		showSuccess(fullName);
// 		valid = true;
// 	}
// 	return valid;
// };

// const checkEmail = () => {
// 	let valid = false;
// 	const email = emailEl.value.trim();

// 	if (!isRequired(email)) {
// 		showError(email, 'Email field cannot be left blank');
// 	} else if (!isEmailValid(email)) {
// 		showError(email, 'Email is not valid');
// 	} else {
// 		showSuccess(email);
// 		valid = true;
// 	}
// 	return valid;
// };

// const checkTelephone = () => {
// 	let valid = false;
// 	const telephone = telephoneEl.value.trim();

// 	if (!isRequired(telephone)) {
// 		showError(telephone, 'Telephone field cannot be left blank');
// 	} else if (!isTelephoneValid(telephone)) {
// 		showError(telephone, 'Number is not valid');
// 	} else {
// 		showSuccess(telephone);
// 		valid = true;
// 	}
// 	return valid;
// };

// const isNameValid = (nameInput) => {
// 	const re = /^[a-zA-Z ]+$/;
// 	return re.test(nameInput);
// };

// const isEmailValid = (emailInput) => {
// 	const re =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(emailInput);
// };

// const isTelephoneValid = (telephoneInput) => {
// 	const re = /^[0-9]+$/;
// 	return re.test(telephoneInput);
// };

// const isRequired = (value) => (value === '' ? false : true);

// const showError = (input, message) => {
// 	const formField = input.parentElement;
// 	formField.classList.remove('success');
// 	formField.classList.add('error');
// 	console.log('input error');
// 	const error = formField.querySelector('small');
// 	error.textContent = message;
// };

// const showSuccess = (input) => {
// 	const formField = input.parentElement;
// 	formField.classList.remove('error');
// 	formField.classList.add('success');
// 	console.log('input success');
// 	const error = formField.querySelector('small');
// 	error.textContent = '';
// };

// // submit validation
// let submitBtn = document.getElementById('submit-button');

// let valid = '';

// eventForm.addEventListener('input', function () {
// 	let valid = false;
// 	if ((checkName(), checkEmail(), checkTelephone() === true)) {
// 		valid = true;
// 	} else {
// 		valid = false;
// 	}
// 	console.log(valid);
// 	if (valid === true) {
// 		// showBox();
// 	} else {
// 		console.log(valid);
// 		// hideBox();
// 	}
// });
const stripeTab = document.getElementById('payment-form');

stripeTab.style.display = 'none';

eventForm.addEventListener('submit', (e) => {
	e.preventDefault();
	var testDataObj = {
		fullName: fullNameEl.value,
		email: emailEl.value,
		telephone: telephoneEl.value,
		time: time.value,
	};

	console.log(testDataObj);
	firstTab.style.display = 'none';
	stripeTab.style.display = 'block';
});
