'use strict';

const express = require('express');
const bodyParse = require('body-parser');
const session = require('express-session');
require('dotenv').config();

// Initializations
const app = express ();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'mysecretapp',
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParse.json());

// Globals Variables

// Routes
app.use(require('./routes/posts'));
app.use(require('./routes/users'));
app.use(require('./routes/comments'));

// Static Files

// Server is Listening
app.listen(port, () => {
  console.log(`Listen Server in Port: ${port}`);
  console.log(`URL: ${process.env.HOSTNAME}:${port}`);
})
