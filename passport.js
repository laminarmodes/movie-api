
// Two passport strategies


const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
Models = require('./models.js'),
passportJWT = require('passport-jwt');

let Users = Models.User,
JWTStrategy = passportJWT.Strategy,
ExtractJWT = passportJWT.ExtractJwt;

// Local strategy defines basic HTTP authentication for login requests.
// Takes username and password from request body and uses Mongoose to check database
// for user with the same name.  If there is a match, the callback function will be executed
passport.use(new LocalStrategy({
  usernameField: 'Username',
  passwordField: 'Password'
}, (username, password, callback) => {
  console.log(username + ' ' + password);
  Users.findOne({ Username: username }, (error, user) => {
    if(error) {
      console.log(error);
      return callback(error);
    }
    if (!user) {
      console.log('incorrect username');
      return callback(null, false, {message: 'Incorrect username or password'});
    }
    if(!user.validatePassword(password)) {
      console.log('incorrect password');
      return callback(null, false, {message: 'Incorrect password.'});
    }
    console.log('finished');
    return callback(null, user);
  });
}));

// JWTStrategy allows authentication os uers based on JWT submitted with their request
// JWT is extracted from header of HTTP request
// JWT is called "bearer token"

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // JWT extracted from header of HTTP request
  secretOrKey: 'your_jwt_secret' // Use secret key to verify signature of JWT
}, (jwtPayload, callback) => {
  return Users.findById(jwtPayload._id).then(
    (user) => {
      return callback(null, user);
    }).catch((error) => {
      return callback(error)
    });
}));
