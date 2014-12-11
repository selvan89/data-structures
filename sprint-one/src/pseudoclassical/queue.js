var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
  this.nextUp = 0;
  this.lengthSize = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
  this.lengthSize++;
};

Queue.prototype.dequeue = function(){
  var value = this.storage[this.nextUp];
  delete this.storage[this.nextUp];
  this.lengthSize--;
  this.nextUp++;
  return value;
};

Queue.prototype.size = function(){
  return this.lengthSize < 0 ? 0 : this.lengthSize;
};

var newQueue = new Queue();
