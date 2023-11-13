const fs = require('fs/promises');
const path = require('path');

const { ctrlWrapper, urlCheck, generateShortUrl } = require('../helpers');

const { BASE_URL } = process.env;

const dbDir = path.join(__dirname, '../db/links.json');

// create short link and save in db
const createShortLink = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'Missing "url" parameter' });
  }

  if (!urlCheck(url)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  const shortUrl = generateShortUrl(url);

  const urlsList = await fs.readFile(dbDir, 'utf8');
  const urlsObj = JSON.parse(urlsList);

  urlsObj[shortUrl] = url;

  await fs.writeFile(dbDir, JSON.stringify(urlsObj, null, 2), 'utf8');

  res.json({ shortUrl: `${BASE_URL}/${shortUrl}` });
};

// get short link
const getShortLink = async (req, res) => {
  const { shortlink } = req.params;

  const urlsList = await fs.readFile(dbDir, 'utf8');
  const urlsObj = JSON.parse(urlsList);

  const originalUrl = urlsObj[shortlink];

  if (originalUrl) {
    res.json({ originalUrl });
  } else {
    res.status(404).json({ error: 'Short URL not found' });
  }
};

module.exports = {
  createShortLink: ctrlWrapper(createShortLink),
  getShortLink: ctrlWrapper(getShortLink),
};
