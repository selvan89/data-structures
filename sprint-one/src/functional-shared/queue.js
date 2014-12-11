var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.nextUp = 0;
  someInstance.lengthSize = 0;

  _.extend(someInstance, stackMethods);

  //someInstance.pop = stackMethods.pop;

  //someInstance.size = stackMethods.size;

  return someInstance;
};


var stackMethods = {};

stackMethods.enqueue = function(value){

  this.storage[this.counter] = value;
  this.counter++;
  this.lengthSize++;
}
stackMethods.dequeue = function(){
  var value = this.storage[this.nextUp];
  delete this.storage[this.nextUp];
  this.nextUp++;
  this.lengthSize--;
  return value;

}
stackMethods.size = function(){
  return this.lengthSize < 0 ? 0 : this.lengthSize;
}



