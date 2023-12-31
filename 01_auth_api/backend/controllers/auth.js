const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { HttpError, ctrlWrapper } = require('../helpers');

const {
  ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY,
  ACCESS_TOKEN_EXPIRES,
  REFRESH_TOKEN_EXPIRES,
} = process.env;

// register controller
const register = async (req, res) => {
  const { email, password } = req.body;

  const {
    rows: [user],
  } = await db.query('SELECT * FROM users where email=$1', [email]);

  if (user) {
    res.status(409).json({
      success: false,
      error: 'Email in use',
    });
  }

  const hashPassword = await bcrypt.hash(String(password), 10);

  const payload = {
    email,
  };

  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: ACCESS_TOKEN_EXPIRES,
  });

  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: REFRESH_TOKEN_EXPIRES,
  });

  const {
    rows: [newUser],
  } = await db.query(
    'INSERT INTO users (email, password, accessToken, refreshToken) values ($1,$2,$3,$4) RETURNING *',
    [email, hashPassword, accessToken, refreshToken]
  );

  res.status(201).json({
    success: true,
    data: {
      id: newUser.id,
      accessToken,
      refreshToken,
    },
  });
};

// login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  const {
    rows: [user],
  } = await db.query('SELECT * FROM users where email=$1', [email]);

  if (!user) {
    res.status(404).json({
      success: true,
      error: 'No user with this data was found',
    });
  }

  const passwordCompare = await bcrypt.compare(String(password), user.password);

  if (!passwordCompare) {
    throw HttpError(401, 'Email or password invalid');
  }

  const payload = {
    id: user.id,
  };

  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: ACCESS_TOKEN_EXPIRES,
  });

  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: REFRESH_TOKEN_EXPIRES,
  });

  await db.query(
    'UPDATE users SET accessToken=$1, refreshToken=$2 WHERE id=$3',
    [accessToken, refreshToken, user.id]
  );

  res.status(200).json({
    success: true,
    data: {
      id: user.id,
      accessToken,
      refreshToken,
    },
  });
};

// refresh controller
const refresh = async (req, res) => {
  const { refreshToken: token } = req.body;
  try {
    const { id } = jwt.verify(token, REFRESH_SECRET_KEY);

    const {
      rows: [isExist],
    } = await db.query('SELECT * FROM users where refreshToken=$1', [token]);

    if (!isExist) {
      throw HttpError(403, 'Token invalid');
    }

    const payload = {
      id,
    };

    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: ACCESS_TOKEN_EXPIRES,
    });

    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: REFRESH_TOKEN_EXPIRES,
    });

    await db.query(
      'UPDATE users SET accessToken=$1, refreshToken=$2 WHERE id=$3',
      [accessToken, refreshToken, id]
    );

    res.status(200).json({
      success: true,
      data: {
        id,
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    throw HttpError(403, error.message);
  }
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  refresh: ctrlWrapper(refresh),
};
