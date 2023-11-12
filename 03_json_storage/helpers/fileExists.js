const fs = require('fs/promises');

const fileExists = async path => {
  try {
    const stat = await fs.stat(path);
    return stat.isFile();
  } catch (error) {
    return false;
  }
};

module.exports = fileExists;
