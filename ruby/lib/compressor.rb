class Compressor
  def self.compress(str)
    return str if str.length < 2

    str.chars.chunk { |c| c }.sum("") do |char, list|
      list.length < 2 ? char : "#{list.length}#{char}"
    end
  end

  def self.uncombine(chunk)
    return chunk if chunk.length < 2

    (chunk[1] * Integer(chunk[0]))
  end

  def self.decompress(str)
    return str if str.length < 2
    breakpoint = str[0].match(/\d/) ? 2 : 1

    uncombine(str[0...breakpoint]) + decompress(str[breakpoint..-1])
  end
end
