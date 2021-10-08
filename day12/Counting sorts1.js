function countingSort(arr) {
     var obj = new Array(100);
     obj.fill(0);
     for (var i = 0; i < arr.length; i++) {
         if (typeof obj[arr[i]] === '0') {
             obj[arr[i]] = 1;
         } else {
             obj[arr[i]] = obj[arr[i]] + 1;
         }
     }
    return obj;
