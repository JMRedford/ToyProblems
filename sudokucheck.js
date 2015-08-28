function sudokuCheck (boardStr) {
  var rowArray = boardStr.split('\n')
  var boardArray = [];
  for (var i = 0; i < 9; i++){
    boardArray.push(rowArray[i].split(''))
    for (var j = 0; j < 9; j++){
      boardArray[i][j] = parseInt(boardArray[i][j]);
    }
  }
  var run;
  for (var i = 0; i < 9; i++){
    run = [0,0,0]
    for (var j = 0; j < 9; j++){
      run[0] = run[0]^boardArray[i][j];
      run[1] = run[1]^boardArray[j][i];
      run[2] = run[2]^boardArray[((j/3)|0)+(((i/3)|0)*3)][(j%3)+((i%3)*3)]
    }
    if (run[0] !== 1 || run[1] !== 1 || run[2] !== 1) return 'invalid'
  }
  return 'solved'
}
