function longestPalindrome (string) {
  string = string.split('');
  var subStringStack = [[string[0]]];
  var longest = [string[0]];
  for(var i = 1; i < string.length; i++){
    for(var j = 0; j < subStringStack.length; j++){
      subStringStack[j].push(string[i]);
      if (isPalindrome(subStringStack[j]) && (subStringStack[j].length > longest.length)){
        longest = subStringStack[j].slice();
      }
    }
    subStringStack.push([string[i]]);
  }
  return longest.join('');
}

function isPalindrome (charArr) {
  for (var i = 0; i < (charArr.length/2)|0; i++){
    if (charArr[i] !== charArr[charArr.length - 1 - i]) return false;
  }
  return true;
}