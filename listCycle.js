var hasCycle = function(linkedList){
  var tortoise = linkedList;
  var hare = linkedList.next;
  var tort = false;
  while(true){
    if (hare === null) return false;
    if (hare === tortoise) return true; 
    if (tort) tort = tort.next;
    hare = hare.next;
    tort = !tort;
  }
};