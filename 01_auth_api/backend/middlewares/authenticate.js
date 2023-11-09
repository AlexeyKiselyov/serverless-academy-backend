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
    const { id } = jwt.verify(token, ACCESS_SECRET_KEY);
    const {
      rows: [user],
    } = await db.query('SELECT * FROM users where id=$1', [id]);

    if (!user || !user.accesstoken) {
      next(HttpError(401));
    }

    req.user = user;
    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
