const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello');
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});

const data = JSON.stringify({
  name: 'Manju',
  work: 'infy',
});

const options = {
  hostname: '127.0.0.1',
  port: port,
  path: '/',
  method: 'POST',
  header: {
    'Content-Type': 'application/JSON',
  },
};

const req = http.request(options, (res) => {
  let body = '';
  console.log('res Status code ', res.statusCode);

  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', () => {
    console.log('Body', data);
  });
});

req.write(data);
req.end();
