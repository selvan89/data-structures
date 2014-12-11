var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter++;

}

stackMethods.pop = function(){
  this.counter--;
  var value = this.storage[this.counter];
  delete this.storage[this.counter];
  return value;
}

stackMethods.size = function(){
  return this.counter < 0 ? 0 : this.counter;
}
