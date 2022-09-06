// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Lb8rPA5xTk3oKJds3oRhOL8fj4xyYxBoui05OgNGah1rSwmQDL1401afRWPwUJNAaAeg9pzpohObQpFQQKDSrhy002iKqM2WD');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const YOUR_DOMAIN = 'http://localhost:4242';

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/public', express.static('public'));
app.use(express.json());

// routing

app.get('/taj-mahal-night-events.html', (req, res) => {
	// console.log(req.url);
	res.sendFile(__dirname + '/taj-mahal-night-events.html');
});

app.get('/form', (req, res) => {
	// console.log(req.url);
	res.sendFile(__dirname + '/form.html');
});

app.get('/customers', (req, res) => {
	res.send('customers');
});

var quantity;
var arr = [];

app.post('/customers', (req, res) => {
	var customerObj = req.body;
	console.log(customerObj);
	res.send({ msg: 'hello' });
	arr.push(customerObj);
	console.log(arr);
	res.send();
	res.sendStatus(statusCode);
	// Sets the response HTTP status code to statusCode and send its string representation as the response body.

	res.sendStatus(200); // equivalent to res.status(200).send('OK')
	res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
	res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
	res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

	//If an unsupported status code is specified, the HTTP status is still set to statusCode and the string version of the code is sent as the response body.

	res.sendStatus(2000); // equivalent to res.status(2000).send('2000')
	// console.log(statusCode);
});

app.post('/create-checkout-session', async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
				price: '{{PRICE_ID}}',
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: `${YOUR_DOMAIN}/success.html`,
		cancel_url: `${YOUR_DOMAIN}/cancel.html`,
		automatic_tax: { enabled: true },
	});

	res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
