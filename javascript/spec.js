const test = require('tape');
const { compress, uncompress } = require('./');

test('compress', t => {
  t.plan(4);

  t.equal(compress('a'), 'a');
  t.equal(compress('aaa'), 'a3');
  t.equal(compress('aaabbb'), 'a3b3');
  t.equal(compress('aaabccc'), 'a3b1c3');
});

test('uncompress', t => {
  t.plan(4);

  t.equal(uncompress('a'), 'a');
  t.equal(uncompress('a3'), 'aaa');
  t.equal(uncompress('a3b3'), 'aaabbb');
  t.equal(uncompress('a3b1c3'), 'aaabccc');
});
