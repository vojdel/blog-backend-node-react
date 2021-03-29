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
app.use('/', (req, res) => {
  res.status(200).send("La API funciona correctamente\n");
});

// Static Files

// Server is Listening
app.listen(port, () => {
  console.log(`Listen Server in Port: ${port}`);
  console.log(`URL: ${process.env.HOSTNAME}:${port}`);
})
