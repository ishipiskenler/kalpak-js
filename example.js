const { latinToCyrillic, cyrillicToLatin } = require("./index");

console.log("=== TRANSITERATION TEST ===");

const latinText = "Sálem, Qaraqalpaqstan!";
const cyrillicResult = latinToCyrillic(latinText);
console.log(`Latin:    ${latinText}`);
console.log(`Cyrillic: ${cyrillicResult}`);

console.log("---------------------------");

const cyrillicText = "Сәлем, Қарақалпақстан!";
const latinResult = cyrillicToLatin(cyrillicText);
console.log(`Cyrillic: ${cyrillicText}`);
console.log(`Latin:    ${latinResult}`);

console.log("===========================");
