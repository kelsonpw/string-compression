class Compressor
  def self.compress(str)
    return str if str.length < 2

    str.chars.chunk { |c| c }.sum("") { |c, list| "#{c}#{list.length}" }
  end

  def self.uncompress(str)
    return str if str.length < 2

    (str[0] * Integer(str[1])) + self.uncompress(str[2..-1])
  end
end
