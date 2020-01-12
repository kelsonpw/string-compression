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

So far I have solutions in:
- Javascript
- Elixir
- Ruby

With more on the way in the future!
