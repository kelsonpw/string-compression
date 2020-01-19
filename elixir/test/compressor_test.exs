defmodule CompressorTest do
  use ExUnit.Case
  import Compressor

  test "compress" do
    assert compress("A") == "A"
    assert compress("AAA") == "3A"
    assert compress("AAABBB") == "3A3B"
    assert compress("AAABBBBC") == "3A4BC"
  end

  test "uncompress" do
    assert uncompress("A") == "A"
    assert uncompress("3A") == "AAA"
    assert uncompress("3A3B") == "AAABBB"
    assert uncompress("3A4BC") == "AAABBBBC"
  end
end
