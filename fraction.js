function factor(number){
  var factors = [];
  var half = number/2
  for (var i = 2; i < half; i++){
    if (number%i === 0) {
      factors.push(i);
      number = number/i;
      while(number%i === 0){
        factors.push(i);
        number = number/i;
      }
    }
  }
  factors.push(number);
  console.log(factors);
  return factors;
}

function fractionConverter (number) {
  var n = number;
  var d = 1;

  while (Math.floor(n) !== n){
    n = n*10;
    d = d*10;
  }

  var nfactors = factor(n);
  var dfactors = factor(d);
  var reducedPair = [n,d]

  for (var i = 0; i < nfactors.length; i++){
    if (dfactors.indexOf(nfactors[i]) !== -1){
      dfactors.splice(dfactors.indexOf(nfactors[i]),1);
      reducedPair = [reducedPair[0]/nfactors[i],reducedPair[1]/nfactors[i]];
    }
  }
  return ''+reducedPair[0]+'/'+reducedPair[1];

}
