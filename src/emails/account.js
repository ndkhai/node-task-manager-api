const mail = require('@sendgrid/mail')

const key = 'SENDGRID_API_KEY'

mail.setApiKey(key)

const sendEmail = (email, name) => {
    mail.send({
        to: email,
        from: 'ngduckhai@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to Task App, ${name}.`
    })
}

module.exports = sendEmail