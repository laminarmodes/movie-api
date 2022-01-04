// Used npm init to initialize project with package.json
// Ran npm install --save express to install express module
// Ran npm install --save body-parser to install body-parser module
// Ran npm install --save uuid to install uuid module

// to test run node index.js
// Listen out for console
// Make requestion (e.g. http://127.0.0.1:8080/books)

// to check
// type 'mongo'
// type 'show dbs'
// type 'user myFlixDB'
// type db.getCollectionNames()

// type 'db.movies.find().pretty()'
// type 'db.users.find().pretty()'

const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', {
  useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error"));

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

// Import auth.js file
// 'app' argument ensures that Express is available in auth.js file
let auth = require('./auth')(app);

// Require passport modulje and import passport.js
const passport = require('passport');
require('./passport');

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

// Get all users
app.get('/users', (req, res) => {
  Users.find().then(
    (users) => {
      res.status(201).json(users);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
      });
});




// 1. Get a list of top movies
app.get('/movies', passport.authenticate('jwt', {session: false}), (req, res) => {
  Movies.find().then(
    (movies) => {
      res.status(201).json(movies);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
      });
});

// 2. Get data about a specific movie title
app.get('/movies/:Title', (req, res) => {
  Movies.findOne({ Title: req.params.Title }).then(
    (movie) => {
      res.json(movie);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error ' + err);
      });
});

// 3. Get movie names under a specific genere
app.get('/movies/genres/:Genre', (req, res) => {
  Movies.find({ 'Genre.Name': req.params.Genre }).then(
    (movies) => {
      res.status(201).json(movies);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error: ' + error);
      });
});

// 4. Get information about a specific movie director by name
app.get('/movies/director/:Name', (req, res) => {
  Movies.findOne({ 'Director.Name': req.params.Name }).then(
    (movie) => {
      res.json(movie.Director);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
      });
});

// Get a user by username
app.get('/users/:Username', (req, res) => {
  Users.findOne({ Username: req.params.Username }).then(
    (user) => {
      res.json(user);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error ' + err);
      });
});

// 5. Allow new users to register
app.post('/users', (req, res) => {
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

// 6. All users to update account information (e.g. username)
app.put('/users/:Username', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $set:
    {
      Username: req.body.Username,
      Password: req.body.Password,
      Email: req.body.Email,
      Birthday: req.body.Birthday
    }
  },
  { new: true },
  (err, updatedUser) => {
    if(err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});

// 7. Add a movie to a user's list of favorites
app.post('/users/:Username/movies/:MovieID', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $push: { FavoriteMovies: req.params.MovieID }
  },
  { new: true },
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});

// 8. Remove a movie from the favorites list 61b4e20951e9f9068e6eb7d3
app.delete('/users/:Username/movies/:MovieID', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $pull: { FavoriteMovies: req.params.MovieID }
  },
  { new: true },
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});

// 9. Delete a user account
app.delete('/users/:Username', (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username }).then(
    (user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error ' + err);
      }
    )
});

// Listen for requests
app.listen(8080, () => {
  console.log('The app is listening on port 8080');
});
