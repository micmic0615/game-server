var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(9090);
console.log("listening")

function handler (req, res) {
	res.json(data);
}

io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	
	socket.on('my other event', function (data) {
		console.log(data);
	});
});