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
  return chunk([...string])
    .map(chars => `${chars.length > 1 ? chars.length : ''}${chars[0]}`)
    .join('');
}

function uncombine(chunk) {
  if (chunk.length < 2) return chunk;

  return Array(+chunk[0])
    .fill(chunk[1])
    .join('');
}

function decompress(string) {
  if (string.length < 2) return string;

  const breakpoint = string[0].match(/\d/) ? 2 : 1;
  const start = string.slice(0, breakpoint);
  const rest = string.slice(breakpoint);

  return uncombine(start) + decompress(rest);
}

module.exports = { compress, decompress, chunk };
