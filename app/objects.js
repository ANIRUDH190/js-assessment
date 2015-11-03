if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
       var createdObj = constructor;
       createdObj.prototype.greeting = greeting;
    },

    iterate : function(obj) { 
      var objPropsArray = [];
      for (var val in obj) {
        if (obj.hasOwnProperty(val)) {
          objPropsArray.push(val + ': ' + obj[val]);
        }
      }
      return objPropsArray;
    }
  };
});
