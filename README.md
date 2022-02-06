# Movie API

This API is typically hostd on Heroku provides access to a set of movies in MongoDB Cloud 

## Installing Node

With Xcode installed, use the following to install additional command line tools for Xcode for installing nvm (Node Version Manager and Node.js


```bash
xcode-select --install
```

If running bash shell

```bash
touch ~/.bash_profile
```

If running zsh

```bash
touch ~/.zshrc
```

Visit nvm GitHub repository page and scroll to "Installing and Updating" and execute either the 'curl' or 'wget' command

Close termina, open new one and test of nvm has been sucessfully installed


```bash
command -v nvm
```

Run one of the two to install the latest LTS version of Node.  

```bash
nvm install lts/*
```

```bash
nvm install --lts
```

If neither work then run the following to find the latest version that has "LTS" next to it

```bash
nvm ls-remote
```

To install that version run the following

```bash
nvm install XX.XX.X
```

Set the default node to the one installed by running one of the following

```bash
nvm alias default lts/*
```

```bash
nvm alias default [version number you installed]
```

If lts/* did not work then run

```bash
nvm alias default XX.XX.X
```

Confirm Node is installed

```bash
node -v
```

## Install

lodash, to make it easier to work with arrays, numbers and objects

```bash
npm install lodash
```

eslint - JavaScript code quality tool

```bash
npm install eslint --save-dev
```

Logging middleware

```bash
npm install morgan --save
```

Express, Body-parser and Uuid

```bash
npm install --save express uuid body-parser
```

## Install MongoDB

Follow instructions to install HomeBrew or if already have then

```bash
brew update
```

After homebrew instillation type

```bash
brew tap mongodb/brew
```

Install latest version of MongoDB

```bash
brew install mongodb-community
```

## Using MongoDB

To start the MongoDB Server

```bash
brew services start mongodb-community
```

To stop the MongoDB Server

```bash
brew services stop mongodb-community
```

To start the mongo shell

```bash
mongo
```

To see list of databases

```bash
show dbs
```

To see which database MongoDB is set to

```bash
db
```

To create new DB or switch to different DB

```bash
use [database name]
```

To view all collections in current DB

```bash
db.getCollectionNames()
```

## Additional Instillations

Install mongoose

```bash
npm install mongoose --save
```

Bodyparser

```bash
npm install --save body-parser
```

## For Authentication

Passport, HTTP authentication, JWT authentication

```bash
npm install --save passport passport-local passport-jwt jsonwebtoken
```

## For Security

CORS

```bash
npm install cors
```

bcrypt hash user's passwords

```bash
npm install bcrypt
```

Server side validation

```bash
npm install express-validator
```


## Rnnning 

To execute an external JavaScript file

```bash
node fileName
```

Running app locally http://localhost:1234/

## Usage

Be sure to commit before updating to heroku

```bash
git push hedroku main
```