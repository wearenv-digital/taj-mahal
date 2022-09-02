const form = document.querySelector('#book-ticket');
const fullNameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#email');
const telephoneInput = document.querySelector('#telephone');
const timeSelect = document.querySelector('#select-time');
const quantity = document.querySelector('qty');

const isRequired = (value) => (value === '' ? false : true);
let valid = false;
function checkInput() {
    if (!isRequired(input)) {
        showError(input, 'Cannot be blank');
    } else {
        showSuccess();
        valid = true;
    }
    return valid;
}

const showError = (input, mesage) => {
	const formField = input.parentElement;
	formField.classList.remove('success');
	formField.classList.add(error);
	console.log('input error');
	const error = formField.querySelector('small');
	error.textContent = message;
};

const showSuccess = (input) => {
	const formField = input.parentElement;
	formField.classList.remove('error');
	formField.classList.add('success');
	console.log('input success');
	const error = formField.querySelector('small');
	error.textContent = '';
};

function showPrice() {
    function ticketQty(qty) {
    let qty = 0;
    let tickPrice = 34.95;
    qty = tickPrice * qty;
    return qty;
    };
    const formField = input.parentElement;
    formField.classList

}



const marketingConsent = document.querySelector('#marketing-consent');
function validate() {
	let consentGiven = false;
	if ((document.querySelector('#marketing-consent').checked = true)) {
		console.log('checked');
		consentGiven = true;
	} else {
		console.log('not checked');
		consentGiven = false;
	}
}

document.querySelector('form').addEventListener('input'), function () {
    let valid = false;
    if (check)


const submitBtn = document.querySelector('submit-button');

submitBtn.addEventListener('submit', (e) => {
	e.preventDefault();
	let formDataObj = {
		name: fullNameInput.value,
		email: emailInput.value,
		telephone: telephoneInput.value,
		time: timeSelect.value,
	};
	console.log(formDataObj);
});



//
//
//
//
//
//
//
// real time validation
function debounce(fn, delay = 500) {
	let timeoutId;

	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
}
// 
//event delegation
contactForm.addEventListener(
	'input',
	debounce(function (e) {
		switch (e.target.id) {
			case 'name':
				checkName();
				break;
			case 'email':
				checkEmail();
				break;
			case 'telephone':
				checkTelephone();
				break;
		}
	})
);
