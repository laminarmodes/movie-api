// Get instance of the http module
const http = require('http');

// Get instance of file system module 
const fs = require('fs');

// Get instance of url module
const url = require('url');

// Specify port
const port = 8080;

// Create server to listen for requests on port 8080
const server = http.createServer((req, res) => {

  // Get URL and timestamp
  let addr = req.url;

  // Log request and if there is an error, report it
  fs.appendFile('log.txt', `URL: ${addr}
Time: ${new Date()}
`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Added to log');
    }
  });

  // Parse requested URL
  let q = url.parse(addr, true);

  // Determine if the url contains the word documentation
  let filePath = '';
  if(q.pathname.includes('documentation')) {
    // If the url contains the word documentation, return the documentation.html file to the user
    // __dirname provides the directory to the current file
    filePath = `${__dirname}/documentation.html`;
  } else {
    // If the url does not contain the word documentation, return index.html
    filePath = 'index.html';
  }

  // Read the file requested (either documentation or index)
  fs.readFile(filePath, (err, data) => {
    if(err) {
      throw err;
    }
    // Return/display the files to the user
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });

})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
