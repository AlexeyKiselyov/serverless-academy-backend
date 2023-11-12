const fs = require('fs/promises');
const path = require('path');

const { ctrlWrapper, fileExists } = require('../helpers');

const dbDir = path.join(__dirname, '../db');

// save data by path controller
const saveData = async (req, res) => {
  const { folder, filename } = req.params;
  const data = req.body;

  const folderPath = path.join(dbDir, folder);
  const filePath = path.join(folderPath, filename);

  if (await fileExists(filePath)) {
    return res.status(409).json({ error: 'File already exists' });
  }

  await fs.mkdir(folderPath, { recursive: true });

  await fs.writeFile(filePath, JSON.stringify(data));

  res.status(201).json(data);
};

// get  data by path controller
const getData = async (req, res) => {
  const { folder, filename } = req.params;

  const folderPath = path.join(dbDir, folder);
  const filePath = path.join(folderPath, filename);

  if (!(await fileExists(filePath))) {
    return res.status(404).json({ error: 'File Not Found' });
  }

  const data = await fs.readFile(filePath, 'utf-8');
  const jsonData = JSON.parse(data);

  res.json(jsonData);
};

module.exports = {
  saveData: ctrlWrapper(saveData),
  getData: ctrlWrapper(getData),
};
