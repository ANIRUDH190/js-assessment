if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) { 
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return eval(arr.join('+'));
    },

    remove : function(arr, item) {
      return arr.filter(function(val) {
        return val!=item;
      });
    },

    removeWithoutCopy : function(arr, item, all) {
      var i, removedItems = [];
        if (all) {
          for(i = arr.length; i--;){
            if (arr[i] === item) removedItems.push(arr.splice(i, 1));
          }
        }
        else {
          i = arr.indexOf(item);
          if(i>-1) removedItems = arr.splice(i, 1);
        }
        return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var array = arr.slice(0), count = 0; // clone array and reset count
         for(i = 0; i < array.length; i++){
             if(array[i] == item)
                 count++;
         }
     return count;
    },

    duplicates : function(arr, justCheck) {
      var len = arr.length, tmp = {}, arrCopy = arr.slice(), duplicates = [];
        arrCopy.sort();
        while(len--){
         var val = arrCopy[len];
          if (tmp[JSON.stringify(val)]){
             if (justCheck) { return true; }
             duplicates.push(val);
          }
          tmp[JSON.stringify(val)] = true;
        }
        return justCheck ? false : duplicates.length ? duplicates : null;
    },

    square : function(arr) {
      return arr.map(function(num){
        return num * num;
      });
    },

    findAllOccurrences : function(arr, target) {
      var indexes = [], i;
      for(i = 0; i < arr.length; i++) {
          if (arr[i] === target)
              indexes.push(i);
          }
      return indexes;
    }
  };
});
