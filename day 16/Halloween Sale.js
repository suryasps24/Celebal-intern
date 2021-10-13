function howManyGames(p, d, m, s) {
    var count = 0;
    while (s >= p) {
        count++;
        s = s - p;
        p = Math.max(p - d, m);

    }
    return count;

}

let result= howManyGames(16,2,1,9981)
console.log(result);
