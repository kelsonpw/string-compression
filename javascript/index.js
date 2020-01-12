function chunk(array, fn = el => el) {
  return array.reduce((acc, el, i, arr) => {
    if (!acc[acc.length - 1]) {
      acc.push([el]);
    } else {
      if (fn(acc[acc.length - 1][0]) === fn(el)) {
        acc[acc.length - 1].push(el);
      } else {
        acc.push([el]);
      }
    }
    return acc;
  }, []);
}

function uncompressChunk(string) {
  return Array(Number(string[1]))
    .fill(string[0])
    .join('');
}

function compress(string) {
  if (string.length < 2) return string;

  return chunk([...string]).reduce(
    (acc, chars) => `${acc}${chars[0]}${chars.length}`,
    ''
  );
}

function uncompress(string) {
  if (string.length < 2) return string;

  return uncompressChunk(string.substr(0, 2)) + uncompress(string.substr(2));
}

module.exports = { compress, uncompress, chunk };
