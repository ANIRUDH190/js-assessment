if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) { 
      var timeout;
      function countFunction () {
        console.log(start++);
        if (start <= end) {
          timeout = setTimeout(countFunction, 100); // calling the function after 100ms
        }
      }
    countFunction();
    return { // return the cancel function as a module
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
    }
  };
});
