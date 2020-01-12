function compress(string) {
  if (string.length < 2) return string;

  const chars = [...string];
  let current = [];

  const combine = chars => `${chars[0]}${chars.length}`;

  return chars.reduce((result, char, i) => {
    if (current[0] && current[0] !== char) {
      result += combine(current);
      current = [];
    }
    if (!current[0] || current[0] === char) {
      current.push(char);
    }
    if (i === chars.length - 1) {
      result += combine(current);
    }
    return result;
  }, '');
}

const uncompressChunk = string =>
  Array(Number(string[1]))
    .fill(string[0])
    .join('');

function uncompress(string) {
  if (string.length < 2) return string;

  return uncompressChunk(string.substr(0, 2)) + uncompress(string.substr(2));
}

module.exports = { compress, uncompress };
