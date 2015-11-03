if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var filesArray = [], dirArray = [];
      readDirectory(data);
      function readDirectory(dir) {
        var files = dir.files;
        var len = files.length, file; // Get the files length
        dirArray.push(dir.dir);
        for (var i = 0; i < len; i++) { 
          file = files[i];
          if (typeof file === 'string') {
            if (!dirName || dirArray.indexOf(dirName) > -1) {
              filesArray.push(files[i]);
            }
          } else {
            arguments.callee(files[i]);
          }
        }
        dirArray.pop();
      }
      return filesArray;
    },

    permute: function(arr) {
      var tmpArray = [], finalArray = [];
      return permutation(arr);
      function permutation(arr) {
        var len = arr.length, item;
        for (var i = 0; i < len; i++) {
          item = arr.splice(i, 1)[0];
          tmpArray.push(item);
          if (arr.length) {
            arguments.callee(arr); // recursive call
          } else {
            finalArray.push(tmpArray.slice()); // copy the array to final Array
          }
          arr.splice(i, 0, item);
          tmpArray.pop();
        }
        return finalArray;
      }
    }
  };
});
