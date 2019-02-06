var net = require('net');
var date = new Date();
var server = net.createServer(function(socket) {
	socket.write(`${date.getFullYear()}-${("0"+(date.getMonth()+1)).slice(-2)}-${("0"+date.getDate()).slice(-2)} ${date.getHours()}:${date.getMinutes()}\r\n`);
    socket.pipe(socket);
    socket.destroy();
});

server.listen(process.argv[2]);

/*
var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
*/