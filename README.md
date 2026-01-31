# Kalpak.js 🧢

Karakalpak language tools for JavaScript.

## Install

```bash
npm install kalpak-js
```

## Features

### 1. Transliteration

Convert text between Latin and Cyrillic scripts.

```javascript
const { latinToCyrillic, cyrillicToLatin } = require("kalpak-js");

latinToCyrillic("Sálem"); // "Сәлем"
cyrillicToLatin("Сәлем"); // "Sálem"
```

### 2. Number to Text

Convert numbers to Karakalpak words (0 to 1 trillion).

```javascript
const { numberToText } = require("kalpak-js");

numberToText(42); // "qırıq eki"
numberToText(2026); // "eki miń jigirma altı"
numberToText(1000000); // "bir million"
```

## API

| Function                | Input                   | Output           |
| ----------------------- | ----------------------- | ---------------- |
| `latinToCyrillic(text)` | Latin string            | Cyrillic string  |
| `cyrillicToLatin(text)` | Cyrillic string         | Latin string     |
| `numberToText(num)`     | Number (0 - 1 trillion) | Karakalpak words |

## License

MIT © [Ishipiskenler](https://github.com/ishipiskenler)
