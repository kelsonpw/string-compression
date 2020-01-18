const test = require('tape');
const { compress, uncompress } = require('./v2');


test('compress', t => {
  t.equal(compress('A'), 'A');
  t.equal(compress('AAA'), '3A');
  t.equal(compress('AAABBB'), '3A3B');
  t.equal(compress('AAABCCC'), '3AB3C');
  t.end();
});


test('uncompress', t => {
  t.equal(uncompress('A'), 'A');
  t.equal(uncompress('3A'), 'AAA');
  t.equal(uncompress('3A3B'), 'AAABBB');
  t.equal(uncompress('3AB3C'), 'AAABCCC');
  t.end();
});
