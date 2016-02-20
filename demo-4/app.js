var http = require('http');

// Function to be called on request event
var cbRequestListener = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('HELLO WORLD!');
};

// Creates the server
var server = http.createServer(cbRequestListener);

// Starts the server listening for connectins on given port
server.listen(3000, function () {
  console.log('Server  running at localhost:3000');
});