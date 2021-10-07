function cutTheSticks(arr)  {
   let cuts = [];
  let cu = 1;
  while (cu !== 0) {
      cu = 0
      let c = Number.MAX_VALUE;
      for (var i in arr) {
          if (arr[i] < c && arr[i] !== 0) {
              c = arr[i];
          }
      }
      console.log(arr)
      for (var i in arr) {
          if (arr[i] >= c) {
              arr[i] = arr[i] - c;
              cu = cu + 1;
          }
      }
      if (cu !== 0)
          cuts.push(cu);
  }
  return cuts;
  
}
