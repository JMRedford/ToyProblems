function translateRomanNumeral (romanNumeral) {
  var total = 0;
  for (var i = 0; i < romanNumeral.length; i++){
    if (DIGIT_VALUES[romanNumeral[i]]){
      if (i < romanNumeral.length - 1 && 
        DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]){
        total = total - DIGIT_VALUES[romanNumeral[i]];
      } else {
        total = total + DIGIT_VALUES[romanNumeral[i]];
      }
    } else {
      return null;
    }
  }
  return total;
}
