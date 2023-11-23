const jwt = require('jsonwebtoken');
const db = require('../db');
const { HttpError } = require('../helpers');

const { ACCESS_SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') {
    next(HttpError(401));
  }

  try {
    const { email } = jwt.verify(token, ACCESS_SECRET_KEY);
    const {
      rows: [user],
    } = await db.query('SELECT * FROM users where email=$1', [email]);

    if (!user || !user.accesstoken) {
      next(HttpError(401));
    }

    req.user = { id: user.id, email: user.email };
    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
