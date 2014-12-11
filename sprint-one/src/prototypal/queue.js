var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.nextUp = 0;
  someInstance.lengthSize = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){

  this.storage[this.counter] = value;
  this.counter++;
  this.lengthSize++;
};

queueMethods.dequeue = function(){
  var value = this.storage[this.nextUp];
  delete this.storage[this.nextUp];
  this.nextUp++;
  this.lengthSize--;
  return value;

};

queueMethods.size = function(){
  return this.lengthSize < 0 ? 0 : this.lengthSize;
};

