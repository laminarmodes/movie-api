// Used npm init to initialize project with package.json
// Ran npm install --save express to install express module
// Ran npm install --save body-parser to install body-parser module

// to test run node index.js
// Listen out for console
// Make requestion (e.g. http://127.0.0.1:8080/books)



// import express module
const express = require('express');

// import morgan modulje
const morgan = require('morgan');

// get instance of express
const app = express();

// Data
let topMovies = [
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    title: 'Forest Gump',
    director: 'Robert Zemeckis'
  },
  {
    title: 'X-Men: First Class',
    director: 'Christopher Nolan'
  },
  {
    title: 'X-Men: Apocalypse',
    director: 'Bryan Singer'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan'
  }
];

// Use the morgan module for
app.use(morgan('common'));

// Use the express static function so that all requests are routed to corresponding files within folder
app.use(express.static('public'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!')
});


// GET requests

// The PATH on the server is '/'
// Also known as the endpoint that the request is targeting
// If a request is sent to the root directory
app.get('/', (req, res) => {
  // HANDLER, the function to be executed when the route is matched
  // It is the logic to send a response
  /* The function is versatile in that it can send responses containing
  different types of data—strings, objects, you name it. Express will
  read whatever data you pass it as a parameter and choose the data
  type accordingly */
  let respondText = 'Hi there, enjoying this 7 month course so far';
  res.send(respondText);
});

// If the endpoint target is /documentation
app.get('/documentation', (req, res) => {
  // return the documentation.html page
  res.sendFile('public/documentation.html', { root: __dirname});
});

// If the endpoint target is /books
app.get('/movies', (req, res) => {
  // Return data for the top books
  res.json(topMovies);
});

// Listen for requests
app.listen(8080, () => {
  console.log('The app is listening on port 8080');
});
