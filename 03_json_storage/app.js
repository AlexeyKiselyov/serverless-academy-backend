const express = require('express');
const logger = require('morgan');
require('dotenv').config();

const storageRouter = require('./routes/storage');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api/json-storage', storageRouter);

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
