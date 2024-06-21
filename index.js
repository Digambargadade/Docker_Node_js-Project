 Hi Im Aniket const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send a simple response message
  res.end('100 Docker Projects for Absolute Beginners...Projects!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
