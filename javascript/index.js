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

function compress(string) {
  if (string.length < 2) return string;

  return chunk([...string]).reduce(
    (acc, chars) => `${acc}${chars[0]}${chars.length}`,
    ''
  );
}

function duplicate(char, num) {
  return Array(num)
    .fill(char)
    .join('');
}

function uncompress(string) {
  if (string.length < 2) return string;

  return duplicate(string[0], +string[1]) + uncompress(string.substr(2));
}

module.exports = { compress, uncompress, chunk, duplicate };
