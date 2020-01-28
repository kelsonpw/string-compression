const test = require("tape");
const { compress, decompress } = require("./iterative");

test("compress", t => {
  t.equal(compress("A"), "A");
  t.equal(compress("AAA"), "3A");
  t.equal(compress("AAABBB"), "3A3B");
  t.equal(compress("AAABCCC"), "3AB3C");
  t.end();
});

test("decompress", t => {
  t.equal(decompress("A"), "A");
  t.equal(decompress("3A"), "AAA");
  t.equal(decompress("3A3B"), "AAABBB");
  t.equal(decompress("3AB3C"), "AAABCCC");
  t.end();
});
