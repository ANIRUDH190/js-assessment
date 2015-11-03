if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
      return (/([a-zA-Z]).*?\1/).test(str);
    },

    endsWithVowel : function(str) {
      return (/(a)$|(e)$|(i)$|(o)$|(u)$/i).test(str);
    },

    captureThreeNumbers : function(str) {
      var matches = (/\d+/g).test(str); console.log(matches);
      if(matches == true){
        if(str.match(/[0-9]{3}/)) {
          return str.match(/[0-9]{3}/)[0];
        } else {
          return false; 
        }
      } else {
        return false;
      }
    },

    matchesPattern : function(str) {
      return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(str);
    },
    isUSD : function(str) {
      return /^\$?\d+(,\d{3})*(\.[0-9]{2})?$/.test(str);
    }
  };
});
