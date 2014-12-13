var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] === undefined){
    this._storage[i] = [];
    this._storage[i].push([k,v]);
    console.log(this._storage[i]);
  }
  else{
    var found = false;
    for(var j in this._storage[i]){
      if(this._storage[i][j][0] === k){
        this._storage[i][j][1] = v;
        found = true;
        return;
      }
    }
    if(!found){
      this._storage[i].push([k,v]);
    }
  }

  // var checkBucket = function(index){
  //   if(this._storage[i][index][0] === k){
  //     this._storage[i][index][1] = v;
  //     return;
  //   }
  //   else if(index = this._storage[i].length){
  //     this._storage[i][index].push([k,v]);
  //     return;
  //   }
  //   else{
  //     checkBucket(index+1);
  //   }
  // }
  // checkBucket(0);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var found = false;
  for(var j in this.storage[i]){}

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
