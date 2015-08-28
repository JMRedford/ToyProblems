function insertionSort (array) {
  var retArray = [];
  for (var i = 0; i < array.length; i++){
    var insertIndex = 0;
    for (var j = 0; j < retArray.length; j++){
      if (retArray[j] < array[i]) {
        insertIndex++;
      } else {
        break;
      }
    }
    retArray.splice(insertIndex,0,array[i]);
  }
  return retArray;
}
