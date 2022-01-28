const sgMail = require('@sendgrid/mail')
const { format } = require('sharp')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'axr4338@gmail.com',
        subject: 'Welcome',
        text: `Welcome to the app ${name}.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'axr4338@gmail.com',
        subject: 'Sorry to see you go!',
        text: `We are sorry to see you leave us, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}