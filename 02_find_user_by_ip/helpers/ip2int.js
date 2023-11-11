function ip2int(ip) {
  return ip.split`.`.reduce((acc, value) => acc * 256 + +value);
}

module.exports = ip2int;
