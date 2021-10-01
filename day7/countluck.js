function countLuck(matrix, k) {
   let a = matrix.map(x => x.split(''));
    let start = [];
    let rows = a.length;
    let cols = a[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j =0; j < cols; j++) {
            if (a[i][j] === 'M') start = [i, j];
        }
    }

    let i = start[0];
    let j = start[1];
    let count = 0;
        
    if (a[i+1] && a[i+1][j] === '.') count += 1;
    if (a[i-1] && a[i-1][j] === '.') count += 1;
    if (a[i] && a[i][j-1] === '.') count += 1;
    if (a[i] && a[i][j+1] === '.') count += 1;

    let jump = 0;
    if (count > 1) { 
        jump = 1;
    }

    let t = [[1,0], [-1,0], [0, 1], [0, -1]];

    let guess;
    for (let z = 0; z < t.length; z++) {
        let x = countLuck(a, i+ t[z][0], j + t[z][1], rows, cols, jump);

        if (x !== false) {
            guess = x;
            //break;
        }
    }

    return (guess === k) ? "Impressed" : "Oops!";  // Write your code here

}
