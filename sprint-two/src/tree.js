var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // if(this.children.length === 0){
  //   this.children[this.children.length] = Tree(value);
  // }
  // console.log('value: ', value);
  var newerTree = Tree(value);
  this.children.push(newerTree);
  // console.log('children: ', this.children[0].value)

};

treeMethods.contains = function(target){
  var recursiveCheck = function(node){

    if(node.value === target){
      // console.log('inside the first if: ', node.value, target);
      // console.log('log true motherfucker: ', node.value===target);
      return true;
    }

    // var found = false;
    for(var i = 0; i<node.children.length; i++){
      //console.log('current node: ', node.children[i].value, 'target: ', target)
      if( recursiveCheck(node.children[i]) ){
        return true;
      }
    }


    return false;
  }
  return recursiveCheck(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
