const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.url === '/aaa') {
    res.end('Hello');
  }

  res.end('Hello World');
});

server.listen(3000);
