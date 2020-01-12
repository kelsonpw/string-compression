defmodule CompressorTest do
  use ExUnit.Case
  import Compressor

  test "compress" do
    assert compress("a") == "a"
    assert compress("aaa") == "a3"
    assert compress("aaabbb") == "a3b3"
    assert compress("aaabccc") == "a3b1c3"
  end

  test "uncompress" do
    assert uncompress("a") == "a"
    assert uncompress("a3") == "aaa"
    assert uncompress("a3b3") == "aaabbb"
    assert uncompress("a3b1c3") == "aaabccc"
  end
end
