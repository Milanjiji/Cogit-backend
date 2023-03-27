const http = require('http');
const cors = require('cors')
const mathsnote = require('./mathsNote10')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'GET' && req.url === '/api/math-notes') {
    res.statusCode = 200;
    res.end(JSON.stringify(mathsnote));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }

  
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
