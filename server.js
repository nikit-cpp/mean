var express1 = require('express');
var app = express1();

var mongojs = require('mongojs');
var db = mongojs('contactlistDb', ['contactlist']);

var bodyParser = require('body-parser');

app.use(express1.static(__dirname + '/public'));
app.use(express1.static(__dirname + '/bower_components'));

app.use(bodyParser.json());

app.get('/contactlist2', function(req, res){
	console.log("I received GET request");

    db.contactlist.find(function(err, docs){
        //console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist2', function(req, res){
    console.log("writed", req.body);
    //res.json(req.body)
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.delete('/contactlist2/:id', function(req, res){
	var id = req.params.id;
	console.log("removing", id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
		//console.error("Error on removing " + id + " ", err);
		res.json(doc);
	});
});

app.get('/contactlist2/:id', function(req, res){
	var id = req.params.id;
	console.log("requested for edit", id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
		//console.error("Error on removing " + id + " ", err);
		res.json(doc);
	});
});

app.put('/contactlist2/:id', function(req, res){
	var id = req.params.id;
	console.log("requested for edit", id, req.body);
	db.contactlist.findAndModify({
		  query: { _id: mongojs.ObjectId(id)},
			update: { $set: {
										name: req.body.name,
										email: req.body.email,
										number: req.body.number
							} },
			new: true,
	},
	function(err, doc){
				res.json(doc);
}); // find and modify

});// put

var port = 8081;
app.listen(port);
console.log("Server running on port " + port);
