function trimpath(url) {
  const prefix = 'https://devinstruction.austincc.edu/catalog'
  // const prefix = 'https://devinstruction.austincc.edu/catalog2018-19';

  return url.substr(prefix.length)
}

module.exports = trimpath
