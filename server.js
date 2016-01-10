var express1 = require('express');
var app = express1();

app.use(express1.static(__dirname + '/public'));
app.use(express1.static(__dirname + '/bower_components'));

app.get('/contactlist2', function(req, res){
	console.log("I received GET request");


	var person1 = {
		name: "Tttim",
		email: "ololo@mail.ru",
		number: "(123) 456-78-90"
	};

	var person2= {
		name: "IVAN",
		email: "ivan@mail.ru",
		number: "(6665) 456-78-90"
	};

	var contactList = [person1, person2];

	res.json(contactList);
});

var port = 8081;
app.listen(port);
console.log("Server running on port " + port);