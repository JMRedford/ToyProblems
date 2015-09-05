// given an integer base (non-zero) between -z and z, output the integers
// in that base, starting at zero and counting up to the number
// of fingers and toes on a number of standard model humans
// equal to the number of fingers on one hand

function countInBase(n) {
  var letterValues = {'a':10,'b':11,'c':12,'d':13,'e':14,'f':15,'g':16,'h':17,'i':18,'j':19,
                      'k':20,'l':21,'m':22,'n':23,'o':24,'p':25,'q':26,'r':27,'s':28,'t':29,
                      'u':30,'v':31,'w':32,'x':33,'y':34,'z':35}
  if (typeof n === 'string') {
    // write this later
  } else {
    if (n > 0) {
      var log = Math.log(n);
      for (var i = 0; i < 100; i++){
        var result = ''
        var places = (Math.log(i)/log)|0
        for (var j = 0; j < places+1; j++){
          result = ((i/Math.pow(n,j))|0)%Math.pow(n,j+1) + result
        }
        console.log(result)
      }
    } else {
      //write this later
    }
  }
}