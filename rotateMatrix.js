function rotateMatrix (matrix) {
  var retArray = [];
  for (var i = 0; i < matrix.length; i++){
    retArray.push([]);
  }
  for (var i = matrix.length - 1; i >= 0; i--){
    for (var j = 0; j < matrix.length; j++){
      retArray[j].push(matrix[i][j]);
    }
  }
  return retArray;
}
