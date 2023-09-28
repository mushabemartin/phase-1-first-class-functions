// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    // Named function
    return function namedFunction() {
      // Function body
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    // Anonymous function
    return function() {
      // Function body
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };