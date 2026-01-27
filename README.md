# Kalpak.js 🧢

A lightweight, accurate JavaScript library for transliterating **Karakalpak** text between Latin and Cyrillic scripts.
Built by [**Ishipiskenler**](https://github.com/ishipiskenler) (The Doers).

> **Note:** This library follows the official Karakalpak alphabet tables (Yellow Table standards).

## ✨ Features

- **Latin ➡️ Cyrillic**: Handles complex digraphs (Sh, Ch, etc.) correctly.
- **Cyrillic ➡️ Latin**: Supports official mappings (e.g., И→I, Ы→Í).
- **Zero Dependencies**: Pure JavaScript. Fast and simple.

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ishipiskenler/karakalpak-translit-js.git
```

_(NPM package coming soon!)_

## 🚀 Usage

```javascript
const { latinToCyrillic, cyrillicToLatin } = require("./index");

// 1. Latin to Cyrillic
const cyrillic = latinToCyrillic("Sálem, Qaraqalpaqstan!");
console.log(cyrillic);
// Output: "Сәлем, Қарақалпақстан!"

// 2. Cyrillic to Latin
const latin = cyrillicToLatin("Мен сeни жақсы көремен ❤️");
console.log(latin);
// Output: "Men seni jaqsı kóremen"
```

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create your feature branch
3. Commit your changes
4. Open a Pull Request

---

© 2026 **Ishipiskenler**. Open Source.
