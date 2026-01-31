// 1. Define the building blocks
const digits = [
  "nól",
  "bir",
  "eki",
  "úsh",
  "tórt",
  "bes",
  "altı",
  "jeti",
  "segiz",
  "toǵız",
];

const tens = {
  10: "on",
  20: "jigirma",
  30: "otız",
  40: "qırıq",
  50: "eliw",
  60: "alpıs",
  70: "jetpis",
  80: "seksen",
  90: "toqsan",
};

const hundreds = {
  100: "bir júz",
  200: "eki júz",
  300: "ush júz",
  400: "tórt júz",
  500: "bes júz",
  600: "altı júz",
  700: "jeti júz",
  800: "segiz júz",
  900: "toǵız júz",
};

function numberToText(num) {
  // 0. Safety check (Validation)
  if (typeof num !== "number") return "Error: Not a number";
  if (num < 0 || num > 1000) return "Error: Only 0-1000 supported for now";

  // 1. Handle exact whole numbers
  if (num === 100) return "júz";
  if (num === 1000) return "miń";

  // 2. Handle 0-9
  if (num < 10) {
    return digits[num];
  }

  // 3. Handle 10-99
  if (num > 9 && num < 100) {
    const tenPart = Math.floor(num / 10) * 10; // e.g. 42 -> 40
    const onePart = num % 10; // e.g. 42 -> 2

    const tenText = tens[tenPart];

    // If perfectly 20, 30, 40... (onePart is 0), just return the tenText
    if (onePart === 0) {
      return tenText;
    }

    // Otherwise combine them: "qırıq" + " " + "eki"
    const oneText = digits[onePart];
    return `${tenText} ${oneText}`;
  }

  // Handle 100-999
  if (num >= 100 && num < 1000) {
    const hundredsPart = Math.floor(num / 100) * 100;
    const tenPart = Math.floor((num % 100) / 10) * 10;
    const onePart = (num % 100) % 10;

    const hundredsText = hundreds[hundredsPart];
    const tenText = tens[tenPart];
    const oneText = digits[onePart];

    if (tenPart === 0 && onePart === 0) {
      return `${hundreds[num]}`;
    }

    // If the ten-part is zero, return hundreds and one-part only (101,102, ...)
    if (tenPart === 0) {
      return `${hundredsText} ${oneText}`;
    }

    // If the one-part is zero, return hundreds-part and tens-part only (110,120, ...)
    if (onePart === 0) {
      return `${hundredsText} ${tenText}`;
    }

    // You know this broo :)
    return `${hundredsText} ${tenText} ${oneText}`;
  }
}

module.exports = { numberToText };
