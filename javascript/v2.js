const { chunk } = require('./');

function combine(chars) {
  return `${chars.length > 1 ? chars.length : ''}${chars[0]}`;
}
function compress(string) {
  return chunk([...string])
    .map(combine)
    .join('');
}

function uncombine(chunk) {
  if (chunk.length < 2) return chunk;

  return Array(+chunk[0])
    .fill(chunk[1])
    .join('');
}

function uncompress(string) {
  if (string.length < 2) return string;
  const breakpoint = string[0].match(/\d/) ? 2 : 1;
  const start = string.slice(0, breakpoint);
  const rest = string.slice(breakpoint);

  return uncombine(start) + uncompress(rest);
}

module.exports = { compress, uncompress };
