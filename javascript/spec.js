const test = require('tape');
const { compress, uncompress, chunk, duplicate } = require('./');

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
  t.equal(compress('a'), 'a');
  t.equal(compress('aaa'), 'a3');
  t.equal(compress('aaabbb'), 'a3b3');
  t.equal(compress('aaabccc'), 'a3b1c3');
  t.end();
});

test('duplicate', t => {
  t.equal(duplicate('a', 5), 'aaaaa');
  t.equal(duplicate('z', 3), 'zzz');
  t.equal(duplicate('d4', 2), 'd4d4');
  t.equal(duplicate('cats', 1), 'cats');
  t.equal(duplicate('cats', 3), 'catscatscats');
  t.end();
});

test('uncompress', t => {
  t.equal(uncompress('a'), 'a');
  t.equal(uncompress('a3'), 'aaa');
  t.equal(uncompress('a3b3'), 'aaabbb');
  t.equal(uncompress('a3b1c3'), 'aaabccc');
  t.end();
});
