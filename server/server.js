var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 9001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json, allows response.body to show the retrieved information
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

// app.get('/', function(req, res) {
//   console.log('res:', res);
//   res.send('Hello Database!');
// });

app.listen(PORT, function() {
  console.log('ReUP: Express server connection established at: ', PORT);
});