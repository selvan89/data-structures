var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){

  this._storage[item] = true;

};

setPrototype.contains = function(item){
  return Boolean(this._storage[item]);
};

setPrototype.remove = function(item){
  // if(this._storage[item]){
  //   this._storage[item] = false;
  //   return this._storage[item];
  // }

  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
