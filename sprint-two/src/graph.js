// this.storage = {

//   puppies: {
//     name: puppies
//     edges: [kittens, penguins]
//   }
// }


var Graph = function(){
  this.storage = {};
  this.edge = {};
};

Graph.prototype.addNode = function(node){
  //check for edges

  this.storage[node] = node;
  this.edge[node] = [];
  console.log('this nodes edge: ', this.edge[node])
};

Graph.prototype.contains = function(node){
  if(this.storage[node]){
    return true;
  } else{
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // for(var i in this.edge){
  //   if(this.edge[fromNode]===toNode && this.edge[toNode] === fromNode){
  //     return true;
  //   }
  // }
  // console.log(this.edge);
  if(this.storage[fromNode] && this.storage[toNode]){
    for(var i = 0; i < this.edge[fromNode].length; i++){
      if (this.edge[fromNode][i] === toNode){
        return true;
      }
      else{
        return false;
      }
    }
  }


};

Graph.prototype.addEdge = function(fromNode, toNode){
  if((fromNode in this.storage) && (toNode in this.storage)){
    this.edge[fromNode].push(toNode);
    this.edge[toNode].push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){

};

Graph.prototype.forEachNode = function(cb){
  for(var item in this.storage){
    cb(this.storage[item]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



