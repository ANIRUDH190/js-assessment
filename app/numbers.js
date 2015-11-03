if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var converted = num.toString(2);
      return Number(converted.charAt(bit));
    },

    base10: function(str) {
      return parseInt(str,2);
    },

    convertToBinary: function(num) {
      return num.toString(2);
    },

    decimalCheck: function(num) { /* Added a new function to check the number of decimal points*/
      return (num.toString().split('.')[1] || []).length;
    },

    multiply: function(a, b) {
      var decVal = this.decimalCheck(b);
      return parseFloat((a*b).toFixed(decVal));
    }
  };
});
