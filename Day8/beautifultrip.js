function beautifulTriplets(d, arr) {
     let c = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
           if (Math.abs(arr[i] - arr[j]) === d) {
             for (var k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j]- arr[k]) === d) {
                 c++;
      }
      }
      }
      }
    }
    console.log(c);
}
