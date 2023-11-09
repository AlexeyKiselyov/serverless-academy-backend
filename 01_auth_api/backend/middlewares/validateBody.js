const { HttpError } = require('../helpers');

const validateBody = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !isEmailValid(email)) {
    next(HttpError(400, 'Invalid email address'));
  }

  if (!password || !isPasswordValid(password)) {
    next(HttpError(400, 'Password is invalid. Minimum length - 6 characters'));
  }

  next();
};

function isEmailValid(email) {
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  return emailRegex.test(email);
}

function isPasswordValid(password) {
  if (String(password).length < 6) {
    return false;
  } else {
    return true;
  }
}

module.exports = validateBody;
