const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./mongooseConnection/db');

// Middleware
app.use(express.json());

// Routes
app.use('/', require('./router'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});