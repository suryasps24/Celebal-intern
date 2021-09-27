function formingMagicSquare(s) {
    const min_outcome = 45;
    var sequence =
    [
        [[8,1,6],[3,5,7],[4,9,2]],
        [[6,1,8],[7,5,3],[2,9,4]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,3,8],[9,5,1],[2,7,6]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[2,7,6],[9,5,1],[4,3,8]],
    ];
     for(var k = 0; k < 8; k++){
        var outcome = 0;
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                outcome += Math.abs(s[i][j] - sequence[k][i][j]);
            };
        };
        if( min_outcome > outcome ){ min_outcome = outcome };
    };
    return (min_outcome);
    }
