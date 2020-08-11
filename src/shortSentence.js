const shortSentence = (string, length) => {
  if (string.length > length) {
    return string.slice(0, length) + '...';
  } else {
    return string;
  }
};

module.exports = shortSentence;
