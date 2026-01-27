const latinToCyrillicMap = {
    // Basic letters
    "A": "А",
    "a": "а",
    "B": "Б",
    "b": "б",
    "D": "Д",
    "d": "д",
    "E": "Е",
    "e": "е",
    "F": "Ф",
    "f": "ф",
    "G": "Г",
    "g": "г",
    "H": "Ҳ",
    "h": "ҳ",
    "X": "Х",
    "x": "х",
    "J": "Ж",
    "j": "ж",
    "K": "К",
    "k": "к",
    "Q": "Қ",
    "q": "қ",
    "L": "Л",
    "l": "л",
    "M": "М",
    "m": "м",
    "N": "Н",
    "n": "н",
    "O": "О",
    "o": "о",
    "P": "П",
    "p": "п",
    "R": "Р",
    "r": "р",
    "S": "С",
    "s": "с",
    "T": "Т",
    "t": "т",
    "U": "У",
    "u": "у",
    "V": "В",
    "v": "в",
    "Z": "З",
    "z": "з",
  
    // Special Karakalpak letters
    "Á": "Ә",
    "á": "ә",
    "Ó": "Ө",
    "ó": "ө",
    "Ú": "Ү",
    "ú": "ү",
    "I": "И",
    "i": "и",
    "Í": "Ы",
    "ı": "ы",
    "Ǵ": "Ғ",
    "ǵ": "ғ",
    "Ń": "Ң",
    "ń": "ң",
  
    // Extra letters
    "Y": "Й",
    "y": "й",
    "W": "Ў",
    "w": "ў",
  
    // Digraphs 
    "Sh": "Ш",
    "sh": "ш",
    "SH": "Ш",
    "Yu": "Ю",
    "yu": "ю",
    "Ya": "Я",
    "ya": "я",
    "Yo": "Ё",
    "yo": "ё",
  
    "Ch": "Ч",
    "ch": "ч",
    "CH": "Ч",
  
    // Optional / borrowed letters
    "C": "Ц",
    "c": "ц"
  };
  
  function latinToCyrillic(text) {
     let result = ""
  
     for(let i = 0; i < text.length; i++) {
  
          let twoChars = text[i] + (text[i+1] || "");
          if(latinToCyrillicMap[twoChars]) {
              result += latinToCyrillicMap[twoChars];
              i++;
              continue;
          }
  
          let oneChar = text[i];
          if(latinToCyrillicMap[oneChar]) {
              result += latinToCyrillicMap[oneChar];
          } else {
              result += oneChar;
          }
     }
  
     return result;
  }
  
  console.log(latinToCyrillic("Atash"))