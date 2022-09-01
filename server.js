var express = require('express');
var app = express();
const PORT = 8080;

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_51Lb8rPA5xTk3oKJds3oRhOL8fj4xyYxBoui05OgNGah1rSwmQDL1401afRWPwUJNAaAeg9pzpohObQpFQQKDSrhy002iKqM2WD');

app.use(express.static('public'));
app.use(express.json());

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/public', express.static('public'));

app.get('/taj-mahal-night-events.html', (req, res) => {
	console.log(req.url);
	res.sendFile(__dirname + '/taj-mahal-night-events.html');
});

app.get('/form', (req, res) => {
	console.log(req.url);
	res.sendFile(__dirname + '/form.html');
});

const calculateOrderAmount = (items) => {
	// Replace this constant with a calculation of the order's amount
	// Calculate the order total on the server to prevent
	// people from directly manipulating the amount on the client
	return 1400;
};

app.post('/create-payment-intent', async (req, res) => {
	const { items } = req.body;

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateOrderAmount(items),
		currency: 'gbp',
		automatic_payment_methods: {
			enabled: true,
		},
	});

	res.send({
		clientSecret: paymentIntent.client_secret,
	});
});

app.listen(PORT, () => console.log(`Node server listening on port ! ${PORT}`));
