const nodemailer = require('nodemailer');

// step 1

const transporter = nodemailer.createTransport({
	service: 'gamil',
	auth: {
		user: '',
		pass: '',
	},
});

// step 2

let mailOptione = {
	from: 'chilamakurvishnu@gmail.com',
	to: 'visshnnutejaa@gmail.com',
	subjet: 'Testing Nodemailer',
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
