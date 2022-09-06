// This is your test publishable API key.
var stripe = Stripe('pk_test_51Lb8rPA5xTk3oKJdJoKPGXXb0ExZB3s0BdC0XYw62QNY5biTzPSaM98HhtExPYCtWGH3RiJWU5DVzMZOaxBkHZgF00m5TP3hSx');

// The items the customer wants to buy
const items = [{ id: 'prod_MJmUC4NgTKOz2X' }];

let elements;

initialize();
checkStatus();

document.querySelector('#payment-form').addEventListener('submit', handleSubmit);

// Fetches a payment intent and captures the client secret
async function initialize() {
	const response = await fetch('/create-payment-intent', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ items }),
	});
	const { clientSecret } = await response.json();
	const appearance = {
		theme: 'stripe',

		variables: {
			colorPrimary: '#0570de',
			colorBackground: '#ffffff',
			colorText: '#30313d',
			colorDanger: '#df1b41',
			fontFamily: 'Ideal Sans, system-ui, sans-serif',
			spacingUnit: '2px',
			borderRadius: '4px',
			// See all possible variables below
		},
	};

	// stript appearance //

	// const appearance = {
	// 	theme: 'stripe',
	// };

	elements = stripe.elements({ appearance, clientSecret });

	const paymentElement = elements.create('payment');
	paymentElement.mount('#payment-element');
}

async function handleSubmit(e) {
	e.preventDefault();
	setLoading(true);

	const { error } = await stripe.confirmPayment({
		elements,
		confirmParams: {
			// Make sure to change this to your payment completion page
			return_url: 'http://localhost:8080/checkout.html',
		},
	});

	// This point will only be reached if there is an immediate error when
	// confirming the payment. Otherwise, your customer will be redirected to
	// your `return_url`. For some payment methods like iDEAL, your customer will
	// be redirected to an intermediate site first to authorize the payment, then
	// redirected to the `return_url`.
	if (error.type === 'card_error' || error.type === 'validation_error') {
		showMessage(error.message);
	} else {
		showMessage('An unexpected error occurred.');
	}

	setLoading(false);
}

// Fetches the payment intent status after payment submission
async function checkStatus() {
	const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');

	if (!clientSecret) {
		return;
	}

	const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

	switch (paymentIntent.status) {
		case 'succeeded':
			showMessage('Payment succeeded!');
			break;
		case 'processing':
			showMessage('Your payment is processing.');
			break;
		case 'requires_payment_method':
			showMessage('Your payment was not successful, please try again.');
			break;
		default:
			showMessage('Something went wrong.');
			break;
	}
}

// ------- UI helpers -------

function showMessage(messageText) {
	const messageContainer = document.querySelector('#payment-message');

	messageContainer.classList.remove('hidden');
	messageContainer.textContent = messageText;

	setTimeout(function () {
		messageContainer.classList.add('hidden');
		messageText.textContent = '';
	}, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
	if (isLoading) {
		// Disable the button and show a spinner
		document.querySelector('#submit').disabled = true;
		document.querySelector('#spinner').classList.remove('hidden');
		document.querySelector('#button-text').classList.add('hidden');
	} else {
		document.querySelector('#submit').disabled = false;
		document.querySelector('#spinner').classList.add('hidden');
		document.querySelector('#button-text').classList.remove('hidden');
	}
}
