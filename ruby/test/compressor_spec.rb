require_relative "../lib/compressor"
require "minitest/autorun"

class CompressorTest < Minitest::Test
  def test_compress
    assert_equal Compressor.compress("a"), "a"
    assert_equal Compressor.compress("aaa"), "a3"
    assert_equal Compressor.compress("aaabbb"), "a3b3"
    assert_equal Compressor.compress("aaabccc"), "a3b1c3"
  end

  def test_uncompress
    assert_equal Compressor.uncompress("a"), "a"
    assert_equal Compressor.uncompress("a3"), "aaa"
    assert_equal Compressor.uncompress("a3b3"), "aaabbb"
    assert_equal Compressor.uncompress("a3b1c3"), "aaabccc"
  end
end
