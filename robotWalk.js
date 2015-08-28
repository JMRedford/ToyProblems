function robotPaths (n) {
  var solutions = 0;
  var stack = [];

  var gridCopy = function(aGrid){
    var retGrid = [];
    for (var i = 0; i < aGrid.length; i++){
      retGrid.push(aGrid[i].slice())
    }
    return retGrid;
  }

  var pushNext = function (currGrid){
    var x = 0;
    var y = 0;
    for (var i = 0; i < n; i++){
      for (var j = 0; j < n; j++){
        if (currGrid[i][j] === 1) {
          x = i;
          y = j;
          currGrid[i][j] = 2;
        }
      }
    }
    if (x !== 0 && x !== n-1) {
      //no need to check [x][y-1]
      if (y < n-1 && currGrid[x][y+1] === 0) {
        var newPoss = gridCopy(currGrid);
        newPoss[x][y+1] = 1;
        stack.push(newPoss);
      }
      if (x < n-1 && currGrid[x+1][y] === 0) {
        if (x+1 === n-1 && y === n-1){
          solutions++;
        } else {
          var newPoss = gridCopy(currGrid);
          newPoss[x+1][y] = 1;
          stack.push(newPoss); 
        }
      }
      if (x > 0 && currGrid[x-1][y] === 0) {
        var newPoss = gridCopy(currGrid);
        newPoss[x-1][y] = 1;
        stack.push(newPoss); 
      }
    } else if (y !== 0 && y !== n-1) {
      //no need to check [x-1][y]
      if (y < n-1 && currGrid[x][y+1] === 0) {
        if(y+1 === n-1 && x === n-1){
          solutions++;
        } else {
          var newPoss = gridCopy(currGrid);
          newPoss[x][y+1] = 1;
          stack.push(newPoss);
        }
      }
      if (x < n-1 && currGrid[x+1][y] === 0) {
        var newPoss = gridCopy(currGrid);
        newPoss[x+1][y] = 1;
        stack.push(newPoss); 
      }
      if (y > 0 && currGrid[x][y-1] === 0) {
        var newPoss = gridCopy(currGrid);
        newPoss[x][y-1] = 1;
        stack.push(newPoss); 
      }
    } else {
      if (y < n-1 && currGrid[x][y+1] === 0) {
        if (x === n-1 && y+1 === n-1) {
          solutions++;
        } else {
          var newPoss = gridCopy(currGrid);
          newPoss[x][y+1] = 1;
          stack.push(newPoss);
        }
      }
      if (x < n-1 && currGrid[x+1][y] === 0) {
        if (x+1 === n-1 && y === n-1){
          solutions++;
        } else {
          var newPoss = gridCopy(currGrid);
          newPoss[x+1][y] = 1;
          stack.push(newPoss); 
        }
      }
      if (x > 0 && currGrid[x-1][y] === 0) {
        var newPoss = gridCopy(currGrid);
        newPoss[x-1][y] = 1;
        stack.push(newPoss); 
      }
      if (y > 0 && currGrid[x][y-1] === 0) {
        var newPoss = gridCopy(currGrid);
        newPoss[x][y-1] = 1;
        stack.push(newPoss); 
      }
    }
  }

  //build initial grid
  var grid = [];
  for (var i = 0; i < n; i++){
    grid.push([]);
    for (var j = 0; j < n; j++){
      grid[i].push(0);
    }
  }
  grid[0][0] = 1;
  stack.push(grid);

  while (stack.length){
    pushNext(stack.pop());
  }
  return solutions;
}
