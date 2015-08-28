//given a position on the grid ZxZ and a number of steps,
//find the number of paths from the origin to the position
//using exactly that number of steps
var storage = {
  0:1,
  1:1
};

var fact = function(n){
  if (storage[n]) return storage[n];
  storage[n] = n * fact(n-1);
  return storage[n];
}

var choose = function(n,r){
  return fact(n)/(fact(r)*fact(n-r));
}


var gridPaths = function(x,y,n){
  var sum = (Math.abs(x)+Math.abs(y))
  var isEven = sum%2 === 0;
  if (isEven === (n%2 === 0)){
    if (sum > n) return 0;
    var difference = n - sum;
    var purity = Math.abs(Math.abs(x)-Math.abs(y));
    var pos = (sum - purity)/2;
    var base = choose(sum,pos);
    var mult = choose(sum,(n - sum)/2);
    return base * mult;
  } else return 0;
}