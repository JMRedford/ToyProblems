var linkedList = function (initialValue) {
  this.head = null;
  this.tail = null;
  this.addToTail = function(val){
    var newItem = {value: val, back: null}
    if (this.tail !== null) this.tail.back = newItem
    this.tail = newItem;
    if (this.head === null) this.head = newItem;
  }
  this.removeHead = function(){
    if (this.tail === this.head) this.tail = null
    var retVal = this.head.value;
    this.head = this.head.back;
  }
  this.contains = function(val){
    var current = this.head;
    while (true) {
      if (current.value === val) return true;
      current = current.back;
      if (current === null) return false
    }
  }
};
