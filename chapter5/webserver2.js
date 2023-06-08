const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 이런 것들이 귀찮아서 더 좋은 프레임워크 도구를 쓰자 -> express