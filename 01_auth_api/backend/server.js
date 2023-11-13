const app = require('./app');

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Successful connection on port ${PORT}`));

app.on('error', err => {
  console.error(`An error occurred when starting the server: ${err.message}`);
  process.exit(1);
});
