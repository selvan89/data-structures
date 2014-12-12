var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }
    if(list.tail === null){
      list.tail = newNode;
    }else{
      list.head.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target){
    var recursiveChecker = function(node){
      if(node.value===target){
        return true;
      }
      else if(node.next === null){
        return false;
      }
      else{
        return recursiveChecker(node.next);
      }
    }
    return recursiveChecker(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
