require_relative "../lib/compressor"
require "minitest/autorun"

class CompressorTest < Minitest::Test
  def test_compress
    assert_equal Compressor.compress("A"), "A"
    assert_equal Compressor.compress("AAA"), "3A"
    assert_equal Compressor.compress("AAABBB"), "3A3B"
    assert_equal Compressor.compress("AAABCCC"), "3AB3C"
  end

  def test_decompress
    assert_equal Compressor.decompress("A"), "A"
    assert_equal Compressor.decompress("3A"), "AAA"
    assert_equal Compressor.decompress("3A3B"), "AAABBB"
    assert_equal Compressor.decompress("3AB3C"), "AAABCCC"
    assert_equal Compressor.decompress("3A4BC"), "AAABBBBC"
  end
end
