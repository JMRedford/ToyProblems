function lookAndSay (n) {
  if (n === 1) return '1';
  return seeSay(lookAndSay(n-1));
}

function seeSay(str) {
  var cur = str[0];
  var count = 1;
  var retStr = '';
  for (var i = 1; i < str.length; i++){
    if (str[i] === cur) count++;
    else {
      retStr += count + cur;
      cur = str[i];
      count = 1;
    }
  }
  retStr += count + cur;
  return retStr;
}