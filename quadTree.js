//my own take on a quadTree

function QuadTree(levels, xStart, xEnd, yStart, yEnd, parentTree){
  if (arguments.length > 5) {
    this.parentTree = parentTree; 
  } else {
    this.parentTree = null;
  }
  this.bounds = [xStart,xEnd,yStart,yEnd];
  this.children = [[null,null],[null,null]];
  for (var i = 1; i < 5; i++){
    if (typeof(arguments[i]) !== 'number' || arguments[i]%1 !== 0){
      throw new TypeError('Bounds must be integers')
    }
  }
  if (xEnd - xStart < Math.pow(2,levels) || yEnd - yStart < Math.pow(2,levels)) {
    throw new RangeError('Range is not large enough to subdivide')
  }
  if (levels > 1) {
    this.isLeaf = false;
    this.children[0][0] = new QuadTree(levels - 1, xStart, parseInt((xStart + xEnd)/2), yStart, parseInt((yStart + yEnd)/2), this);
    this.children[0][1] = new QuadTree(levels - 1, parseInt((xStart + xEnd)/2), xEnd, yStart, parseInt((yStart + yEnd)/2), this);
    this.children[1][0] = new QuadTree(levels - 1, xStart, parseInt((xStart + xEnd)/2), parseInt((yStart + yEnd)/2), yEnd, this);
    this.children[1][1] = new QuadTree(levels - 1, parseInt((xStart + xEnd)/2), xEnd, parseInt((yStart + yEnd)/2), yEnd, this);
  } else {
    this.isLeaf = true;
    this.things = [];
  }
}

QuadTree.prototype.contains = function(thing) {
  // assumes that everything that is going to be checked is somewhere in the tree
  return (this.bounds[0] <= thing.x &&
          this.bounds[1] > thing.x &&
          this.bounds[2] <= thing.y &&
          this.bounds[3] > thing.y);
}

QuadTree.prototype.forChildren = function(callback) {
  callback(this.children[0][0]);
  callback(this.children[0][1]);
  callback(this.children[1][0]);
  callback(this.children[1][1]);
}

QuadTree.prototype.insert = function(thing) {
  if (this.isLeaf) {
    this.things.push(thing);
  } else {
    this.forChildren(function(child){
      if (child.contains(thing)) {
        child.insert(thing);
      }
    }); // I love javascript
  }
}
