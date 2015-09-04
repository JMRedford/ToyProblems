function BloomFilter(m,k){
  // m is the size of the filter
  // k is the number of hashes
  this.filter = []
  for (var i = 0; i < m; i++){
    this.filter.push(false)
  }
  this.add = function(elem){
    var elemStr = JSON.stringify(elem)
    var num = Math.pow(2,k)
    for (var i = 0; i < elemStr.length; i++){
      num += elemStr.charCodeAt(i)
    }
    for (var i = 0; i < k; i++){
      this.filter[num%m] = true
      num = num>>1
    }
  }
  this.check = function(elem){
    var elemStr = JSON.stringify(elem)
    var num = Math.pow(2,k)
    for (var i = 0; i < elemStr.length; i++){
      num += elemStr.charCodeAt(i)
    }
    for (var i = 0; i < k; i++){
      if (!this.filter[num%m]) return false
      num = num>>1
    }
    console.log('be aware of false positives')
    return true
  }
  this.remove = function(elem){
    console.log('YOU DON`T REMOVE ELEMENTS FROM A BLOOM FILTER, YOU DODO!')
  }
}