var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

