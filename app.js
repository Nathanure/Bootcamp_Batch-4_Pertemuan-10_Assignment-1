// Imported core modules
const http = require('http');
const fs = require('fs');

// Function for http response to path directory
function page(dirPath, res) {
    // read the file as what the directory path wants
    fs.readFile(dirPath, (err, data) => {
        if (err) {
            // writehead is to determine the state of website
            res.writeHead(404);
            // write is to tell the content of website
            res.write('Error : Page Not Found');
        } else {
            res.write(data);
        }
        // end is to close and stop the buffering
        res.end();
    })
}

// Calling http module
http
    // Creating a server
    .createServer((req, res) => {
        // Variable for request in the url
        const url = req.url;
        // result for the statement of web, and its type of content
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        console.log(url);
        // the result and branch of inputted url
        if (url === '/about') {
            page('./page/about.html', res)
        } else if (url === '/contact') {
            page('./page/contact.html', res)
        } else {
            page('./page/index.html', res)
        }
    })
    // Output of inserted request happening on the web 
    .listen(3000, () => {
        console.log('Server is listening on port 3000');
    })