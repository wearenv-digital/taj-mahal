const form = document.getElementById('book-ticket');
const fullNameEl = document.getElementById('full-name');
const emailEl = document.getElementById('email');
const telephoneEl = document.getElementById('telephone');
const time = document.getElementById('select-time');

// MAKE SURE THE SUBMIT BUTTON IS NOT PRESSED UNTILL THE FIELDS ARE COMPLETE

const checkName = () => {
	let valid = false;
	const fullName = fullNameEl.value.trim();

	if (!isRequired(fullName)) {
		showError(fullName, 'Name field cannot be left blank');
	} else if (!isNameValid(fullName)) {
		showError(fullName, 'Name must only contain letters');
	} else {
		showSuccess(fullName);
		valid = true;
	}
	return valid;
};

const checkEmail = () => {
	let valid = false;
	const email = emailEl.value.trim();

	if (!isRequired(email)) {
		showError(email, 'Email field cannot be left blank');
	} else if (!isEmailValid(email)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
		valid = true;
	}
	return valid;
};

const checkTelephone = () => {
	let valid = false;
	const telephone = telephoneEl.value.trim();

	if (!isRequired(telephone)) {
		showError(telephone, 'Telephone field cannot be left blank');
	} else if (!isTelephoneValid(telephone)) {
		showError(telephone, 'Number is not valid');
	} else {
		showSuccess(telephone);
		valid = true;
	}
	return valid;
};

const isNameValid = (nameInput) => {
	const re = /^[a-zA-Z ]+$/;
	return re.test(nameInput);
};

const isEmailValid = (emailInput) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(emailInput);
};

const isTelephoneValid = (telephoneInput) => {
	const re = /^[0-9]+$/;
	return re.test(telephoneInput);
};

const isRequired = (value) => (value === '' ? false : true);

// submit validation
let submitBtn = document.getElementById('submit-button');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	var testDataObj = {
		fullName: fullName.value,
		email: email.value,
		telephone: telephone.value,
		time: time.value,
	};

	console.log(testDataObj);
});
