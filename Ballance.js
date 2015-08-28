function isBalanced (str) {
  var openParenCount  = 0;
  var openCurlyCount  = 0;
  var openSquareCount = 0;

  for (var i = 0; i < str.length; i++){
    switch(str[i]){
      case '(':
        openParenCount++;
        break;
      case '{':
        openCurlyCount++;
        break;
      case '[':
        openSquareCount++;
        break;
      case ')':
        if (openParenCount < 1) return false;
        openParenCount--;
        break;
      case '}':
        if (openCurlyCount < 1) return false;
        openCurlyCount--;
        break;
      case ']':
        if (openSquareCount < 1) return false;
        openSquareCount--;
        break;
    }
  // Write your code here, and
  // return your final answer.
  }
  if (openCurlyCount === 0 && openSquareCount === 0 && openParenCount === 0) return true;
  else return false;
}
