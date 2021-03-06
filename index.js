
/**
 * @file index.js is the server that provides routes to API endpoints 
 * that can be used to access the myFlix data (Read, Write, Update, Delete)
 */

/** @requires mongoose */
const mongoose = require('mongoose');

/** @requires ./model.js */
const Models = require('./models.js');

/** @requires express-validator */
const { check, validationResult } = require('express-validator');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect(process.env.CONNECTION_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error"));

/** @requires cors */
const cors = require('cors');

/** @requires espress */
const express = require('express');

/** @requires morgan */
const morgan = require('morgan');

/** @requires body-parser */
const bodyParser = require('body-parser');

/** @requires uuid */
const uuid = require('uuid');

// get instance of express
const app = express();

// Test Data (for debugging)
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

app.use(cors());
app.options('*', cors());
app.use(morgan('common'));
app.use(express.static('public'));
app.use(bodyParser.json());

/**
 * Import auth.js file, 'app' argument ensures that Express is available in auth.js file 
 * @requires ./auth */
let auth = require('./auth')(app);

/** Require passport modulje and import passport.js 
 * @requires passport
*/
const passport = require('passport');
require('./passport');

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!')
});

/** 
 * @callback authenticationCallback
 * @callback requestCallback
 */

/** 
 * Gets /documentation
 * @method GET
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @returns {string} message
 */
app.get('/', (req, res) => {
  let respondText = 'Hi there, enjoying this 7 month course so far';
  res.send(respondText);
});

/** 
 * Gets /documentation
 * @method GET
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @returns {html} file
 */
app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

/** 
 * Gets all users
 * @method GET
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /users
 * @returns {Promise<object>}
 */
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

/** 
 * Gets a list of top movies
 * @method GET
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /movies
 * @returns {Promise<object>}
 */
app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.find().then(
    (movies) => {
      res.status(201).json(movies);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
      });
});

/** 
 * Gets data about a specific movie title
 * @method GET
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /movies/<movie_id>
 * @returns {Promise<object>}
 */
app.get('/movies/:Title', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ Title: req.params.Title }).then(
    (movie) => {
      res.json(movie);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error ' + err);
      });
});

/** 
 * Gets movie names under a specific genere
 * @method GET
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /movies/genres/action
 * @returns {Promise<object>}
 */
app.get('/movies/genres/:Genre', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.find({ 'Genre.Name': req.params.Genre }).then(
    (movies) => {
      res.status(201).json(movies);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error: ' + error);
      });
});

/** 
 * Gets information about a specific movie director by name
 * @method GET
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /movies/director/<director_name>
 * @returns {Promise<object>}
 */
app.get('/movies/director/:Name', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ 'Director.Name': req.params.Name }).then(
    (movie) => {
      res.json(movie.Director);
    }).catch(
      (err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
      });
});

/** 
 * Gets userdata for the specified username
 * @method GET
 * @param {string} URL the API endopint
 * @param {requestCallback} - request and response
 * @example /users/<user_name>
 * @returns {Promise<object>}
 */
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

/** 
 * Registers new users
 * @method POST
 * @param {string} URL the API endopint
 * @param {requestCallback} - request and response
 * @returns {Promise<object>}
 */
app.post('/users', [
  check('Username', 'Username is required').isLength({ min: 5 }),
  check('Username', 'Username contains non-alphanumeric characters, not allwed.').isAlphanumeric(),
  check('Password', 'Password is required').not().isEmpty(),
  check('Email', 'Email does not appear to be validated').isEmail()
], (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let hashedPassword = Users.hashPassword(req.body.Password);
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + ' already exists');
      } else {
        Users.create({
          Username: req.body.Username,
          Password: hashedPassword,
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

/** 
 * Updates user information
 * @method PUT
 * @param {string} URL the API endopint
 * @param {requestCallback} - request and response
 * @returns {Promise<object>}
 */
app.put('/users/:Username', [
  check('Username', 'Username is required').isLength({ min: 5 }),
  check('Username', 'Username contains non-alphanumeric characters, not allwed.').isAlphanumeric(),
  check('Password', 'Password is required').not().isEmpty(),
  check('Email', 'Email does not appear to be validated').isEmail()
],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOneAndUpdate({ Username: req.params.Username }, {
      $set:
      {
        Username: req.body.Username,
        Password: hashedPassword,
        Email: req.body.Email,
        Birthday: req.body.Birthday
      }
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

/** 
 * Adds movie to favorites
 * @method PUT
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /users/<user_name>/movies/<movie_id>
 * @returns {Promise<object>}
 */
app.post('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
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

/** 
 * Removes movie from favorites
 * @method DELETE
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /users/<user_name>/movies/<movie_id>
 * @returns {Promise<object>}
 */
app.delete('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
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

/** 
 * Deletes a user's account
 * @method DELETE
 * @param {string} URL the API endopint
 * @param {authenticationCallback} - uses the JWT authentication strategy to decode and check the JWT
 * @param {requestCallback} - request and response
 * @example /users/<user_name>
 * @returns {Promise<object>}
 */
app.delete('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
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

// Reference to port hosted on the server
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on Port ' + port);
})
