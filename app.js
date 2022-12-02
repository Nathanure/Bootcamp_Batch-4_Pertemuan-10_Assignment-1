// Imported core modules
const http = require('http');
const fs = require('fs');

// Function for http response to path directory
function page(dirPath, res) {
    fs.readFile(dirPath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error : Page Not Found');
        } else {
            res.write(data);
        }
        res.end();
    })
}

// Creating a server
http
    .createServer((req, res) => {
        const url = req.url;
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        console.log(url);
        if (url === '/about') {
            page('./page/about.html', res)
        } else if (url === '/contact') {
            page('./page/contact.html', res)
        } else {
            page('./page/index.html', res)
        }
    })
    .listen(3000, () => {
        console.log('Server is listening on port 3000');
    })