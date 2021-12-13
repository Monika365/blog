const nodeMailer = require('nodemailer');
var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shahmonika118@gmail.com',
        pass: 'ykkkk'
    }
});
const EmailService={
    sendEmail:(email, blog)=>{
        const mailOptions = {
            from: 'mailsample630@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'new post', // Subject line
            html: `<h1>${blog} you got a notification</h1>`// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
        })

    }
}

module.exports = EmailService;