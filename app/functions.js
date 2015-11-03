if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str1) {
      return function(str2){
        return str1+', '+ str2;
      };
    },

    makeClosures : function(arr, fn) {
      var array = [], len = arr.length;
      var closureFunc = function(val) { // forms a closure
        return function() {
          return fn(val);
        };
      };
      for(var i = 0; i < len; i++) {
        array.push(closureFunc(arr[i]));
      }
      return array;
    },

    partial : function(fn, str1, str2) {
      return fn.bind(this, str1, str2);
    },

    useArguments : function() {
      var len = arguments.length;
      var arr = [];
      for(var i=0; i<len; i++){ // using the argument object
        arr.push(arguments[i]);
      }
      return eval(arr.join('+'));
    },

    callIt : function(fn) {
      var givenArgs = Array.prototype.slice.call(arguments, 1, arguments.length); // slice the arguments object
      fn.apply(this, givenArgs);
    },

    partialUsingArguments : function(fn) {
      var givenArgs = Array.prototype.slice.call(arguments, 1, arguments.length); // slice the arguments object
      return function() {
        var finalArgs = givenArgs.concat(Array.prototype.slice.call(arguments)); // concat the split arguments together to form final args
          return fn.apply(this, finalArgs);
      };
    },

    curryIt : function(fn) {
      function applyArgs(fn, arguments) {
        return fn.apply(this, arguments); // use apply method to invoke the function from received args
      }

     function getAllArgs(finalArgs, expArgs) {
       return function (currentArgument) {  
         finalArgs.push(currentArgument);
         var allArgs = finalArgs.length === expArgs;
         if (allArgs) {
           return applyArgs(fn, finalArgs);
         } else {
           return getAllArgs(finalArgs, expArgs);
         }
       };
     }
     return getAllArgs([], fn.length);
    }
  };
});
