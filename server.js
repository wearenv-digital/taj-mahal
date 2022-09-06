var express = require('express');
var http = require('http');
var app = express();
const PORT = 8080;
const dotenv = require('dotenv').config();

// const secretKey = process.env.STRIPE_SECRET_KEY_LIVE;

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
// const stripe = require('stripe')('process.env.STRIPE_PRVATE_KEY_LIVE');
app.use(express.static('public'));
app.use(express.json());

// app.use(express.urlencoded());

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/public', express.static('public'));

app.get('/taj-mahal-night-events.html', (req, res) => {
	// console.log(req.url);
	res.sendFile(__dirname + '/taj-mahal-night-events.html');
});

app.get('/form', (req, res) => {
	// console.log(req.url);
	res.sendFile(__dirname + '/form.html');
});
let quantity;
app.post('/form', (req, res) => {
	quantity = req.body.quantity;
});

// function calculateOrderAmount() {
// 	let price;
// 	price = process.env.price * quantity;
// 	return price;
// }
// const YOUR_DOMAIN = 'http://localhost:8080';

// app.post('/create-checkout-session', async (req, res) => {
// 	const session = await stripe.checkout.sessions.create({
// 		line_items: [
// 			{
// 				// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
// 				price: '{{price_1Lb8v5A5xTk3oKJd6c7pYYWG}}',
// 				// quantity: calculatePrice(),
// 				adjustable_quantity: {
// 					enabled: true,
// 					minimum: 1,
// 					maximum: 10,
// 				},
// 				quantity: 1,
// 			},
// 		],
// 		mode: 'payment',
// 		success_url: `${YOUR_DOMAIN}/form.html`,
// 		cancel_url: `${YOUR_DOMAIN}/cancel.html`,
// 	});

// 	res.redirect(303, session.url);
// });
app.post('/create-payment-intent', async (req, res) => {
	const { items } = req.body;

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: 1234,
		currency: 'gbp',
		automatic_payment_methods: {
			enabled: true,
		},
	});

	res.send({
		clientSecret: paymentIntent.client_secret,
	});
});

app.listen(PORT, () => console.log('Running on port ' + PORT));
