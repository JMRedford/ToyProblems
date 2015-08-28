function mergeSort(arr){
  if (arr.length === 1 || arr.length === 0) return arr;
  var arr1 = arr.slice(0,Math.floor(arr.length/2));
  var arr2 = arr.slice(Math.floor(arr.length/2), arr.length);
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  var retArray = [];
  while (true){
    if (arr1.length > 0 && arr2.length > 0){
      arr1[0] <= arr2[0] ? retArray.push(arr1.shift()) : retArray.push(arr2.shift());
    } else {
      retArray = retArray.concat(arr1);
      retArray = retArray.concat(arr2);
      break;
    }
  }
  return retArray;
}