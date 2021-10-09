function processData(input) {
    
    var input = input.split("\n");
    var a1 = input[0];
    var a2 = input[1];
    var n = a1.length;
    var t = [[]];
    var a = [];
    var k=0;
    for(var i = 0; i<= n;i++)
        t[i] = 0;
    for(var i = 0; i<= n;i++)
    {
        t[i] = new Array(n);
        for(var j = 0; j <= n; j++)
            t[i][j] =0;
    }
    if( a1 == a2)
        console.log(a1.length);
    else
    {
        for(var i = 1; i<= n;i++)
        {
            for(var j = 1; j <= n; j++)
            {
                if(a1[i-1] == a2[j-1])
                {
                    t[i][j] = t[i-1][j-1]+1;

                }
                else if(t[i-1][j] >= t[i][j-1])
                {
                    t[i][j] = t[i - 1][j];
                }
                else
                {
                    t[i][j] = t[i][j - 1];
                }
            }
        }
        console.log(t[n][n]);
    }
}
