function longestRun (string) {
  var indexPair = [0,0];
  if (string.length === 0) return indexPair;
  var a = [string[0],1,0]; //current character, length of run, and starting index

  for (var i = 0; i < string.length; i++){
    if (string[i] === a[0]) {
      a[1]++;
      if (a[1] > indexPair[1] - indexPair[0] + 1) {
        indexPair = [a[2],i];
      }
    } else {
      a = [string[i],1,i];
    }
  }
  return indexPair;
}