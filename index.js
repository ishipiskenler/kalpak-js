const { latinToCyrillic, cyrillicToLatin } = require("./src/transliterate");
const { numberToText } = require("./src/numbers");

console.log(numberToText(142));
console.log(numberToText(300));
console.log(numberToText(200));

module.exports = {
  latinToCyrillic,
  cyrillicToLatin,
  numberToText,
};
