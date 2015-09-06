function sumArray (array) {
  // finds the largest sum of a contigigous string of numbers in an array
  var largeSums = [];
  var largest = array[0];
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < i; j++){
      largeSums[j] = parseInt(largeSums[j]) + parseInt(array[i]);
      if (largeSums[j] > largest){
        largest = largeSums[j];
      }  
    }
    largeSums.push([array[i]]);
    if (array[i] > largest) largest = array[i];
  }
  return largest;
}
