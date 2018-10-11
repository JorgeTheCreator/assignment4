const date = require('./date');
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const currentDate = date();
  res.end(currentDate);
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
  console.log(date());
});
