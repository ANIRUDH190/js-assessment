if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var promiseObj = $.Deferred(); // jQuery Deferred Object
      setTimeout(function() { promiseObj.resolve(value); }, 20); // to work in the event loop rather than call stack
      return promiseObj.promise(); // return promise object
    },

    manipulateRemoteData : function(url) {
      var promiseObj = $.Deferred(); // jQuery Deferred Object
      var promise = $.ajax(url); // make AJAX request from the given URL
      promise.then(function(data) {
        var people = $.map(data.people, function(val) { // loop through the data.people object
          return val.name;
        });
        promiseObj.resolve(people.sort()); // sorting to match the expected output
      });
      return promiseObj.promise(); // return promise object
    }
  };
});
