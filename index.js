const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
// step 1

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

// step 2

let mailOptione = {
	from: 'karthickraja11dec@gmail.com',
	to: 'parvesh@gmail.com',
	cc: 'karthickraja11dec@gmail.com',
	subject: 'Testing Nodemailer',
	text: 'It works',
};

// step 3

transporter.sendMail(mailOptione, (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Email Sent');
	}
});
