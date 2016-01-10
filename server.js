var express1 = require('express');
var app = express1();

var mongojs = require('mongojs');
var db = mongojs('contactlistDb', ['contactlist']);

app.use(express1.static(__dirname + '/public'));
app.use(express1.static(__dirname + '/bower_components'));

app.get('/contactlist2', function(req, res){
	console.log("I received GET request");

    db.contactlist.find(function(err, docs){
        //console.log(docs);
        res.json(docs);
    });
});

var port = 8081;
app.listen(port);
console.log("Server running on port " + port);