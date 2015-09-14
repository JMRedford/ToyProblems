// the function permutationNumber takes a string and outputs
// its position in the ordered list of all permutations of the string

var bang = function(num){
  var memory = [1];
  if (memory[num]) return memory[num];
  retval = num * bang(num-1);
  return retval;
}

var numPerms = function (lettersAndAmmountsArray) {
  //good
  var fullLength = 0;
  var denom = 1;
  for (var i = 0; i < lettersAndAmmountsArray.length; i++){
    denom = denom * bang(lettersAndAmmountsArray[i][1]);
    fullLength += lettersAndAmmountsArray[i][1];
  }
  return bang(fullLength)/(denom);
}

var deepCopy = function (obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
      var out = [], i = 0, len = obj.length;
      for ( ; i < len; i++ ) {
          out[i] = arguments.callee(obj[i]);
      }
      return out;
  }
  if (typeof obj === 'object') {
      var out = {}, i;
      for ( i in obj ) {
          out[i] = arguments.callee(obj[i]);
      }
      return out;
  }
  return obj;
}

var makeLetterAmmountArray = function(stringArray) {
  //good
  var retArray = [];
  var saCopy = stringArray.slice();
  var ssa = saCopy.sort(); 
  var previousChar = '';
  for (var i = 0; i < ssa.length; i++){
    if (ssa[i] !== previousChar) {
      retArray.push ([ssa[i],1]);
      previousChar = ssa[i];
    } else {
      retArray[retArray.length - 1][1]++;
    }
  }
  return retArray;
}

var permutationNumber = function (str) {
  console.time('timer');
  var sa = str.split('');
  //sa = string array
  var totLength = sa.length;
  
  var laa = makeLetterAmmountArray(sa);
  // [[letter, ammount],[letter, ammount],...]

  var min = 1;

  for (var i = 0; i < totLength; i++){ // i is never used
    for (var j = 0; j < laa.length; j++){ // complexity is O(n^2)
      if (laa[j][0] !== sa[0]){ // havent got to the current first letter
        var tempLaa = deepCopy(laa);
        if (tempLaa[j][1] > 1){
          tempLaa[j][1]--;
        } else {
          tempLaa.splice(j,1);
        }
        min += numPerms(tempLaa);
      } else {
        sa.shift();
        laa = makeLetterAmmountArray(sa);
        if (numPerms(makeLetterAmmountArray(sa)) === 1){
          console.timeEnd('timer');
          return min;
        }
        break;
      }
    }
  }
}