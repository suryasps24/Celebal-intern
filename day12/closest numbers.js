function closestnumber(arr){
arr = arr.sort((a, b) => a - b);
    var minDiff = arr[1] - arr[0];
    for (var i = 2; i != arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }
    let res = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i]=== minDiff) {
            res.push(arr[i]);
            res.push(arr[i+1]);
        }
    }
    console.log(minDiff);
    return res;
}
