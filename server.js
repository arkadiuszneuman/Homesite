var express = require('express');
var app = express();

app.use("/bower_components", express.static(__dirname + '/bower_components'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/", express.static(__dirname + '/html'));
app.use("/css", express.static(__dirname + '/css'));

app.get('/', function (req, res) {
  res.sendFile('html/index.html', {"root": __dirname});
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});