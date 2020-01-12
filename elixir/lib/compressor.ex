defmodule Compressor do
  def compress(str) do
    cond do
      String.length(str) < 2 ->
        str

      true ->
        str
        |> String.graphemes()
        |> Enum.chunk_by(& &1)
        |> Enum.map(&combine(&1))
        |> Enum.join("")
    end
  end

  defp combine(chunk) do
    "#{Enum.at(chunk, 0)}#{Enum.count(chunk)}"
  end

  def uncompress(str) do
    cond do
      String.length(str) < 2 ->
        str

      true ->
        {start, rest} = String.split_at(str, 2)
        uncompress_chunk(start) <> uncompress(rest)
    end
  end

  defp uncompress_chunk(str) do
    String.duplicate(String.at(str, 0), String.to_integer(String.at(str, 1)))
  end
end
