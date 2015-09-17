function rotatedArraySearch (rotated, target) {
  // Takes a rotated, ordered array and outputs the index of a target value
  // E.g.  [5,7,9,2,4],2 -> 3
  // Returns -1 if target is not in array
  var a = 0;
  var d = rotated.length - 1;
  var b = Math.floor(rotated.length/2);
  var c = b + 1;
  while (true) {
    if (rotated[a] === target) { return a }
    if (rotated[b] === target) { return b }
    if (rotated[c] === target) { return c }
    if (rotated[d] === target) { return d }
    if (a > d - 3) { return -1 }
    if (( rotated[a] > target && rotated[b] > target && rotated[c] > target && rotated[d] > target && rotated[a] > rotated[b] ) ||
        ( rotated[a] < target && rotated[b] < target && rotated[c] < target && rotated[d] < target && rotated[a] > rotated[b] ) ||
        ( rotated[a] < target && rotated[b] > target && rotated[c] > target && rotated[d] < target )){
      //must be in left half
      d = b;
      b = Math.floor((a+b)/2);
      c = b + 1;
    } else {
      //must be in right half
      a = c;
      b = Math.floor((c+d)/2);
      c = b + 1;
    }   
  }
}
