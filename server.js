var express1 = require('express');
var app = express1();

/*app.get('/', function(req, res){
	res.send("H W frm njs1");
})*/

app.use(express1.static(__dirname + '/public'));
app.use(express1.static(__dirname + '/bower_components'));

var port = 8081;
app.listen(port);
console.log("I a rnning at prt " + port);