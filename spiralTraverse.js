var spiralTraverse = function(arr){
  if (arr === []) return [];
  var height = arr.length
  var width = arr[0].length;
  retArr = []
  var numSpirals = Math.ceil(Math.min(height,width)/2);
  for (var i = 0; i < numSpirals; i++){
    //right
    for (j = i; j < width - i; j++){
      retArr.push(arr[i][j]);
    }
    //down
    for (j = i+1; j < height - i; j++){
      retArr.push(arr[j][width - 1 - i]);
    }
    //left
    for (j = width - 2 - i; j >= i; j--){
      retArr.push(arr[height - 1 - i][j]);
    }
    //up
    for (j = height - 2 - i; j > i; j--){
      retArr.push(arr[j][i]);
    }
  }
  return retArr;
}