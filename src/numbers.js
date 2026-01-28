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

function numberToText(num) {
  // 0. Safety check (Validation)
  if (typeof num !== "number") return "Error: Not a number";
  if (num < 0 || num > 100) return "Error: Only 0-100 supported for now";

  // 1. Handle exact 100
  if (num === 100) return "júz";

  // 2. Handle 0-9
  if (num < 10) {
    return digits[num];
  }

  // 3. Handle 10-99 (Combination logic)
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

module.exports = { numberToText };
