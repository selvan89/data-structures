var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var nextUp = 0;
  // Implement the methods below
  var length = 0;

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
    length++;
  };

  someInstance.dequeue = function(){
    var val = storage[nextUp];
    delete storage[nextUp];
    nextUp++;
    length--;

    return val;

  };

  someInstance.size = function(){

    return length<0 ? 0 : length;
  };

  return someInstance;
};
