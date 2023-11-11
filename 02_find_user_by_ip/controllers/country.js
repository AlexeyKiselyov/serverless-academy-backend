const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const { ctrlWrapper, ip2int } = require('../helpers');

const countrysDbPath = path.join(__dirname, '../data/IP2LOCATION-LITE-DB1.CSV');

const ipDb = [];

// load the CSV file into memory
fs.createReadStream(countrysDbPath)
  .pipe(csv())
  .on('data', row => {
    ipDb.push(Object.values(row));
  })
  .on('end', () => {
    console.log('CSV file loaded successfully');
  });

// get country by IP controller
const getCountry = async (req, res) => {
  const userIP = req.body.ip;

  const userIPInt = ip2int(userIP);

  const filteredArr = ipDb
    .filter(el => +el[0] <= userIPInt)
    .filter(el => +el[1] >= userIPInt);

  if (filteredArr) {
    const [lowerRange, upperPange, country] = filteredArr[0];

    res.json({
      addressRange: `${lowerRange}-${upperPange}`,
      country,
    });
  } else {
    res.status(404).json({ error: 'Country not found for the given IP' });
  }
};

module.exports = {
  getCountry: ctrlWrapper(getCountry),
};
