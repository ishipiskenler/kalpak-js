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
  300: "úsh júz",
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

  if (num < -1000000000000 || num > 1000000000000)
    return "Error: Only numbers between (-1000000000000)(1000000000000) (up to one trillion) supported for now";

  // Handle negative numbers (minus sanlar)
  if (num < 0) return "minus " + numberToText(Math.abs(num));

  // Handle decimal numbers (pútin sanlar)
  if (!Number.isInteger(num)) {
    const parts = num.toString().split(".");
    const integerPart = parseInt(parts[0]);
    const decimalPart = parseInt(parts[1]);

    // Handle negative decimals
    if (integerPart < 0) {
      return `minus ${numberToText(Math.abs(integerPart))} pútin ${numberToText(
        Math.abs(decimalPart)
      )}`;
    }

    return `${numberToText(integerPart)} pútin ${numberToText(decimalPart)}`;
  }

  // 1. Handle exact whole numbers
  if (num === 100) return "júz";
  if (num === 1000) return "miń";
  if (num === 10000) return "on miń";
  if (num === 100000) return "júz miń";
  if (num === 1000000) return "bir million";
  if (num === 10000000) return "on million";
  if (num === 100000000) return "júz million";
  if (num === 1000000000) return "bir milliard";
  if (num === 10000000000) return "on milliard";
  if (num === 100000000000) return "júz milliard";
  if (num === 1000000000000) return "bir trillion";

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
    const hundredsPart = Math.floor(num / 100);
    const remainder = num % 100;

    if (remainder === 0) {
      return `${numberToText(hundredsPart)} júz`;
    }

    return `${numberToText(hundredsPart)} júz ${numberToText(remainder)}`;
  }

  // Handle (1000 - 999999) (thousands)
  if (num >= 1000 && num < 1000000) {
    const thousandsPart = Math.floor(num / 1000);
    const remainder = num % 1000;

    if (remainder === 0) {
      return `${numberToText(thousandsPart)} miń`;
    }

    return `${numberToText(thousandsPart)} miń ${numberToText(remainder)}`;
  }

  // Handle (million - billion) (millions)
  if (num >= 1000000 && num < 1000000000) {
    const millionsPart = Math.floor(num / 1000000);
    const remainder = num % 1000000;

    if (remainder === 0) {
      return `${numberToText(millionsPart)} million`;
    }

    return `${numberToText(millionsPart)} million ${numberToText(remainder)}`;
  }

  // Handle (billion - trillion) (billions)
  if (num >= 1000000000 && num < 1000000000000) {
    const billionsPart = Math.floor(num / 1000000000);
    const remainder = num % 1000000000;

    if (remainder === 0) {
      return `${numberToText(billionsPart)} milliard`;
    }

    return `${numberToText(billionsPart)} milliard ${numberToText(remainder)}`;
  }
}

module.exports = { numberToText };
