const form = document.getElementById('book-ticket');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const time = document.getElementById('select-time');

// MAKE SURE THE SUBMIT BUTTON IS NOT PRESSED UNTILL THE FIELDS ARE COMPLETE

const checkName = () => {
	let valid = false;
	const fullName = nameInput.value.trim();
	if (!isRequired(fullName)) {
		showError(nameInput, 'Name field cannot be left blank');
	} else if (!isNameValid(fullName)) {
		showError(nameInput, 'Name must only contain letters');
	} else {
		showSuccess(nameInput);
		valid = true;
	}
	return valid;
};

const checkEmail = () => {
	let valid = false;
	const email = emailInput.value.trim();
	if (!isRequired(email)) {
		showError(emailInput, 'Email field cannot be left blank');
	} else if (!isEmailValid(email)) {
		showError(emailInput, 'Email is not valid');
	} else {
		showSuccess(emailInput);
		valid = true;
	}
	return valid;
};

const checkTelephone = () => {
	let valid = false;
	const telephone = telephoneInput.value.trim();
	if (!isRequired(telephone)) {
		showError(telephoneInput, 'Telephone field cannot be left blank');
	} else if (!isTelephoneValid(telephone)) {
		showError(telephoneInput, 'Number is not valid');
	} else {
		showSuccess(telephoneInput);
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

