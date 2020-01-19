const test = require('tape');
const { compress, decompress, chunk } = require('./');

test('chunk', t => {
  t.deepEqual(chunk([1, 1, 2, 2, 3, 3]), [
    [1, 1],
    [2, 2],
    [3, 3],
  ]);
  t.deepEqual(
    chunk([2, 4, 6, 3, 5, 8, 10, 12, 11], el => el % 2 === 0),
    [[2, 4, 6], [3, 5], [8, 10, 12], [11]]
  );
  t.end();
});

test('compress', t => {
  t.equal(compress('A'), 'A');
  t.equal(compress('AAA'), '3A');
  t.equal(compress('AAABBB'), '3A3B');
  t.equal(compress('AAABCCC'), '3AB3C');
  t.end();
});

test('decompress', t => {
  t.equal(decompress('A'), 'A');
  t.equal(decompress('3A'), 'AAA');
  t.equal(decompress('3A3B'), 'AAABBB');
  t.equal(decompress('3AB3C'), 'AAABCCC');
  t.end();
});
