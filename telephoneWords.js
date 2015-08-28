function telephoneWords (digitString) {
  var numLetters = [['0'],['1'],['A','B','C'],['D','E','F'],['G','H','I'],
  ['J','K','L'],['M','N','O'],['P','Q','R','S'],['T','U','V'],['W','X','Y','Z']]
  
  digitArr = digitString.split('');
  if (digitString.length < 1){
    return [];
  }
  var stack = numLetters[digitArr[0]].slice()
  stack.push(numLetters[digitArr[0]].slice())
  var tempStack;
  digitArr.forEach(function(num,i,arr){
    if (i > 0){
      tempStack = [];
      stack.forEach(function(stackElem,j,stack){
        numLetters[num].forEach(function(letter,k){
          newPerm = stackElem.slice()
          newPerm += letter
          tempStack.push(newPerm)
        });
      })
      stack = []
      tempStack.forEach(function(tsEllement,j){
        stack.push(tsEllement)
      })
    }
  });
  return stack
}
