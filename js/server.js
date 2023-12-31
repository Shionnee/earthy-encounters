var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const app=express();
const PORT=process.env.PORT || 3002;

app.use(express.json());
app.use('/', router);
app.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
})

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bc6350a2c02f57",
      pass: "ca094e7bc09d0a"
    }
  });

  var transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
    var mail = {
      from: name,
      to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })