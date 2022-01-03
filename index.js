// Used npm init to initialize project with package.json
// Ran npm install --save express to install express module
// Ran npm install --save body-parser to install body-parser module
// Ran npm install --save uuid to install uuid module

// to test run node index.js
// Listen out for console
// Make requestion (e.g. http://127.0.0.1:8080/books)

const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', {
  useNewUrlParser: true, useUnifiedTopology: true });


// import express module
const express = require('express');

// import morgan modulje
const morgan = require('morgan');

// import bodyParser
const bodyParser = require('body-parser');

// import UUID
const uuid = require('uuid');

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
  }
];

// Use the morgan module for
app.use(morgan('common'));

// Use the express static function so that all requests are routed to corresponding files within folder
app.use(express.static('public'));

// User body parser
app.use(bodyParser.json());

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

// Get a list of top movies
app.get('/movies', (req, res) => {
  // Return data for the top books
  res.json(topMovies);
});

// Get data about a specific movie title
app.get('/movies/:title', (req, res) => {
  let titleText = 'You just requested information about: ' + req.params.title;
  res.send(titleText);
});

// Get movie names under a specific genere
app.get('/generes/:genere/movies', (req, res) => {
  let genereText = 'You just requested a list of movies that fall under: ' + req.params.genere;

  // Movies.find({ 'Genre.Name': req.params.genre }, (err, movies) => {
  //   // Logic here
  // }).then(movies => movies.json(movies));

  res.send(genereText);
});

// Get information about a specific movie director by name
app.get('/directors/:director_name', (req, res) => {
  let directorText = 'You just requested information about: ' + req.params.director_name;
  res.send(directorText);
});

// Allow new users to register
app.post('/user_accounts', (req, res) => {

  // let newUser = req.body;
  // newUser.id = uuid.v4();
  // res.status(201).send('You just requested to create a new user account, the unique id is ' + newUser.id);

  Users.findOne({ Username: req.body.Username })
  .then((user) => {
    if (user) {
      return res.status(400).send(req.body.Username + ' already exists');
    } else {
      Users.create({
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday
      }).then(
        (user) => { res.status(201).json(user) }
      ).catch(
        (error) => {
          console.error(error);
          res.status(500).send('Error: ' + error);
        })
    }
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error: ' + error);
  })
});

// All users to update account information (e.g. username)
app.put('/user_accounts/:account_id/:username', (req, res) => {
  res.status(201).send('You just requeted to update the username of ' + req.params.account_id +' to ' + req.params.username);
});

// Add movie to favorites list
app.post('/user_accounts/:account_id/favorites/:movie_id', (req, res) => {
  res.status(201).send('You just added ' + req.params.movie_id + ' to ' + req.params.account_id + ' favorites list');
});

// Remove a movie from the favorites list
app.delete('/user_accounts/:account_id/favorites/:movie_id', (req, res) => {
  res.status(201).send('You just removed ' + req.params.movie_id + ' to ' + req.params.account_id + ' favorites list');
});

// Delete a user account
app.delete('/user_accounts/:account_id', (req, res) => {
  res.status(201).send('You just requested to delete a user account of ' + req.params.account_id);
});

// Listen for requests
app.listen(8080, () => {
  console.log('The app is listening on port 8080');
});
