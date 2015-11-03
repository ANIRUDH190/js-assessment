if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = { /* added var keyword to make it a local variable */
        name : 'Jory'
      };

      return myObject;
    },

    getValue : function(val) {
      return val;
    },

    functions : function(flag) {
      if (flag) {
        return this.getValue('a');
      } else {
        return this.getValue('b');
      }
    },

    parseInt : function(num) {
      return parseInt(num, 10); /* Added the radix to parseInt */
    },

    identity : function(val1, val2) {
      return val1 === val2; /* Added Strict equality using === */
    }
  };
});
