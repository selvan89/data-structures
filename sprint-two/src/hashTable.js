var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(Array.isArray(this._storage.get(i))){
    this._storage.get(i).push([k,v]);
  } else {
    var subArray = [];
    subArray.push([k,v]);
    this._storage.set(i, subArray);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
    return null;
  } else if(Array.isArray(this._storage.get(i))){
    for(var j = 0; j < this._storage.get(i).length; j++){
      if(this._storage.get(i)[j][0] === k){
        return this._storage.get(i)[j][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element, index, storage){
    if(i === index){
      delete storage[index];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
