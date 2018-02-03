/*var express = require ('express');
var app = express();
var path = require('path');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var xoauth2 = require('xoauth2');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '')));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html'); 
});

app.post('/contactForm', urlencodedParser, function(req, res) {
    response = {
        email:req.body.email,
        subject:req.body.subject,
        text:req.body.text
    };
        
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                    user: 'joelebuka@gmail.com',
                    clientId: '895793393487-0qfbu0guc9s39gjfrin7e1n177q3j9t0.apps.googleusercontent.com',
                    clientSecret: '8FyJErP01mHsi7WcaChfaRYD',
                    refreshToken: '1/tC3i8VxGJNcJv4tJ6WJ51nNFrBV8kVl-YxOtAGlz87k',
                    accessToken: 'ya29.Ci9HA8Odh__yCi10VAfVhswogAi87QOmwzpESyWJxq5rxPMMERFtJCN6vg78n4V2xg'
                })
            }   
    });

    var mailOptions = { 
        from: req.body.email,
        to: 'joelebuka@gmail.com',
        subject: req.body.subject,
        text: req.body.text
    };

    transporter.sendMail(mailOptions, function(error, info) { 
        if(error) {
            return console.log(error);
        } else {
            console.log('Message sent: ' + info.response)
        }
    });
})


app.listen(3000, function() { 
    console.log("Express Started on Port 3000")
})*/
