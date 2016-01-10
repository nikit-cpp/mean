var express1 = require('express');
var app = express1();

app.use(express1.static(__dirname + '/public'));
app.use(express1.static(__dirname + '/bower_components'));

app.get('/contactlist2', function(req, res){
	console.log("I received request");
})

var port = 8081;
app.listen(port);
console.log("I a rnning at prt " + port);