const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/hello') {
        res.end('Hello, World!');
    } else if (req.method === 'POST' && req.url === '/data') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => res.end(body));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000);
