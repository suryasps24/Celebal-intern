function cavityMap(grid) {
    for (var i = 1; i < grid.length - 1; i++) {
        for (var j = 1; j < grid.length - 1; j++) {
            let left = (grid[i][j - 1]);
            let right = (grid[i][j + 1]);
            let up = (grid[i - 1][j]);
            let down = (grid[i + 1][j]);
            let x = (grid[i][j]);
            if (x > up &&
                x > right &&
                x > left &&
                x > down) {
                let f = grid[i].split('');
                f[j] = 'X';
                grid[i] = f.join('');
            }
        }
    }
    return grid;// Write your code here

}
