const capitalize = require('./capitalize');

const camelCase = string => {
  const words = string.split(/[\s|\-|_]+/);
  return [words[0].toLowerCase(), ...words.slice(1).map(w => capitalize(w))].join('');
};

module.exports = camelCase;
