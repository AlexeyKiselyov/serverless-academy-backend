const crypto = require('crypto');

const generateShortUrl = url => {
  const hashedUrl = crypto
    .createHash('md5')
    .update(url)
    .digest('hex')
    .slice(0, 8);

  return hashedUrl;
};

module.exports = generateShortUrl;
