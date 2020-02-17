# String Compression/Encoding in Various Languages

These are solutions to a common string compression interview question.

The idea is to compress strings like:

```js
compress("A") === "A"
compress("AAABCCC") === "3AB3C"
compress("AAABBBC") === "3A3BC"
```

Each solution also has an uncompress method

```js
uncompress("A") === "A"
uncompress("3AB3C") === "AAABCCC"
uncompress("3A4BC") === "AAABBBBC"
```

So far I have solutions in the following languages, each language has an accompanying test file:
- **Javascript** | [Source](javascript/index.js) | [Tests](javascript/spec.js)
- **Elixir** | [Source](elixir/lib/compressor.ex) | [Tests](elixir/test/compressor_test.exs)
- **Ruby** | [Source](ruby/lib/compressor.rb) | [Tests](ruby/test/compressor_spec.rb)

With more on the way in the future... hopefully!
 
