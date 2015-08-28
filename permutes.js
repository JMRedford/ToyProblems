function permutations (str) {
  // Write your code here, and
  // return your final answer.
  str = str.split('').sort();
  var N = str.length;
  var results = [];
  var queue = [];
  for (var i = 0; i < N; i++){
    var otherLetters = str.slice();
    otherLetters.splice(i,1);
    queue.push([[str[i]],otherLetters]);
  }
  console.log(queue)
  while (queue.length){
    var curr = queue.shift();
    for (var i = 0; i < curr[1].length; i++){
      console.log(curr)
      var newPoss = curr[0].slice();
      newPoss.push(curr[1][i]);
      if (newPoss.length === N) {
        var res = newPoss.join('');
        //if (!res.length || res !== results[results.length-1]){
        results.push(res);
        //}
      } else {
        queue.push([newPoss, curr[1].slice().splice(i,1)]);  
      }
    }
  }
  return results;
}