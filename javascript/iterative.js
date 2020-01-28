function compress(string) {
  let char;
  let seen = 0;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!char) {
      char = string[i];
    }
    if (char && string[i] === char) {
      seen += 1;
    }
    if ((char && string[i] !== char) || i === string.length - 1) {
      if (seen > 1) {
        result += seen;
      }
      result += char;
      char = string[i];
      seen = 1;
    }
  }
  return result;
}

function decompress(string) {
  if (!string) return "";
  if (!string[0].match(/\d/)) {
    return string[0] + decompress(string.slice(1));
  }
  let result = "";
  let count = Number(string[0]);
  for (let i = 0; i < count; i++) {
    result += string[1];
  }
  return result + decompress(string.slice(2));
}

module.exports = { compress, decompress };
