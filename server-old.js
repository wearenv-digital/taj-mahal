var express = require('express');
var http = require('http');
var app = express();
const PORT = 8080;
const dotenv = require('dotenv').config;
// const secretKey = process.env.STRIPE_SECRET_KEY;

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_51Lb8rPA5xTk3oKJds3oRhOL8fj4xyYxBoui05OgNGah1rSwmQDL1401afRWPwUJNAaAeg9pzpohObQpFQQKDSrhy002iKqM2WD');
// const stripe = require('stripe')('process.env.STRIPE_PRVATE_KEY');

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded());

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

// remmber to change the '/link' when live
// var itemQuantity = 0;

// app.post('/payment', (req, res) => {});

const calculateOrderAmount = (items) => {};


app.post('/create-payment-intent', async (req, res) => {
	const { items } = req.body;

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: ,
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
