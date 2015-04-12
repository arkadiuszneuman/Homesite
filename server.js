var express = require('express');
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
    var name = req.body.name;

    console.log(name);
});

app.post('/sendMail')

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});