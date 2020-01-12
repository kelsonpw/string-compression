# String Compression in Various Languages

These are solutions to a common string compression interview question.

The idea is to compress strings like:

```js
compress("a") === "a"
compress("aaabccc") === "a3b1c3"
compress("aaabbbbc") === "a3b4c1"
```

Each solution also has an uncompress method

```js
uncompress("a") === "a"
uncompress("a3b1c3") === "aaabccc"
uncompress("a3b4c1") === "aaabbbbc"
```

So far I have solutions in the following languages, each language has an accompanying test file:
- **Javascript** | [Source](javascript/index.js) | [Tests](javascript/spec.js)
- **Elixir** | [Source](elixir/lib/compressor.ex) | [Tests](elixir/test/compressor_test.exs)
- **Ruby** | [Source](ruby/lib/compressor.rb) | [Tests](ruby/test/compressor_spec.rb)

With more on the way in the future... hopefully!
 
