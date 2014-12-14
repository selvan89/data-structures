var BinarySearchTree = function(value){
  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  _.extend(newTree, treeMethods);

  return newTree;
}

var treeMethods = {};

treeMethods.insert = function(value){
  var tree = BinarySearchTree(value);
  var self = this;
  var recursiveCheck = function(testTree, value){
    //console.log(testTree);
    if(value < testTree.value && testTree.left ===null){
      testTree.left = tree;
      return;
    }
    if(value>testTree.value && testTree.right === null){
      testTree.right = tree;
      return;
    }
    if(value<testTree.value && testTree.left != null){
      return recursiveCheck(testTree.left, value);
    }
    if(value>testTree.value && testTree.right != null){
      return recursiveCheck(testTree.right, value);
    }
  }
  return recursiveCheck(self, value);
}

treeMethods.contains = function(value){

  var self = this;
  //console.log(self);
  var checker = function(tree1){

    console.log(tree1);
    var found = false;
    if(value === tree1.value){
      found = true;
    }
    else if(tree1.right != null && value > tree1.value){
      console.log(tree1.right);
      found = checker(tree1.right)
    }
    else if(tree1.left != null && value < tree1.value){
      found = checker(tree1.left);
    }
    return found;
  }
  return checker(self);
}

treeMethods.depthFirstLog = function(callback){

  var recursiveCheck = function(testTree){
    //console.log(testTree);
    if(testTree.left ===null && testTree.right===null){
      callback(testTree.value);
      return;
    }
    if(testTree.right != null && testTree.left === null){
      callback(testTree.value);
      recursiveCheck(testTree.right);
    }
    if(testTree.left != null && testTree.right === null){
      callback(testTree.value);
      recursiveCheck(testTree.left);
    }
    if(testTree.left!=null && testTree.right != null){
      callback(testTree.value);
      recursiveCheck(testTree.right);
      recursiveCheck(testTree.left);
    }
  }
  return recursiveCheck(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

