var express = require('express');
var nodemailer = require('nodemailer');
var app = express();

app.use("/bower_components", express.static(__dirname + '/bower_components'));
app.use("/", express.static(__dirname + '/public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function (req, res) {
  res.sendFile('public/index.html', {"root": __dirname});
});

app.post('/sendmail', function(req, res) {

	var connectionInfo;

	try {
		 connectionInfo = require('./mailconnectioninfo.json');
	}
	catch (e) {
	}

	var from = process.env.from || connectionInfo.from;
	var pass = process.env.credentialsPass || connectionInfo.credentialsPass;

	var transporter = nodemailer.createTransport({
    service: 'Gmail',
	    auth: {
	        user: from,
	        pass: pass
	    }
	});

	var mailOptions = {
	    from: from, // sender address
	    to: 'arkadiusz.neuman@gmail.com', // list of receivers
	    subject: 'Wiadomość z ArkadiuszNeumanHomesite', // Subject line
	    text: 'Imię: ' + req.body.name + '\r\n'+
	    'Mail: ' + req.body.mail + '\r\n' +
	    'Wiadomość: ' + req.body.message, // plaintext body
	};

	transporter.sendMail(mailOptions, function(error, info){
		var response = {};

	    if(error){
	        console.log(error);
	        response.success = false;
	        response.message = error;
	    }else{
	        console.log('Message sent: ' + info.response);
	        response.success = true;
	    }

	    res.end(JSON.stringify(response));
	});
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});