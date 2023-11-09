const { ctrlWrapper } = require('../helpers');

// get current user controller
const getUser = async (req, res) => {
  const { id, email } = req.user;

  res.json({
    success: true,
    data: {
      id,
      email,
    },
  });
};

module.exports = {
  getUser: ctrlWrapper(getUser),
};
