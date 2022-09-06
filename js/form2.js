const form = document.querySelector('#book-ticket');
const qty = document.getElementById('quantity');

// display the total price

const priceField = document.getElementById('price-field');

priceField.innerHTML = `<h3>Total: £0</h3>`;

const tickPrice = 34.95;

function totalPrice() {
	const quantity = qty.value;
	let total = quantity * tickPrice;
	total = total.toFixed(2);

	priceField.innerHTML = `<h3>Total: £${total}</h3>`;
}

var consentGiven = false;
const marketingConsent = document.querySelector('#marketing-consent');
function validate() {
	if (document.querySelector('#marketing-consent').checked == true) {
		console.log('checked');
		consentGiven = true;
	} else {
		console.log('not checked');
		consentGiven = false;
	}
}

marketingConsent.addEventListener('change', (e) => {
	validate();
	console.log(consentGiven);
});

const tabOne = document.getElementById('tab-1');
const stripeSection = document.getElementById('payment-form');

stripeSection.style.display = 'none';

function showStripe() {
	stripeSection.style.display = 'block';
	tabOne.style.display = 'none';
}

const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const telephoneInput = document.getElementById('telephone');
const timeSelect = document.getElementById('select-time');

const submitBtn = document.getElementById('checkout-button');
// let customerObj = {};
// let items = [];
// items = [{ id: 'prod_MJmUC4NgTKOz2X' }];

let items = [];
let customerObj = {};

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	// showStripe();

	customerObj = {
		name: fullNameInput.value,
		email: emailInput.value,
		telephone: telephoneInput.value,
		time: timeSelect.value,
		quantity: qty.value,
	};

	customerObj.items = items;
	console.log(customerObj);

	try {
		const response = await fetch('/customers', {
			method: 'POST',
			body: customerObj,
		});
		console.log('status code: ', Response.status);
		if (!response.ok) {
			console.log(Response);
			throw new Error(`Error! Status: ${Response.status}`);
		} else {
			console.log(`okay! ${Response.status}`);
		}
		const result = await Response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
});
