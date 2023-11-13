const express = require('express');
const logger = require('morgan');
require('dotenv').config();

const countryRouter = require('./routes/country');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api/country-by-ip', countryRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error' } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
