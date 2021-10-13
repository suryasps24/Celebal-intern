function beautifulQuadruples(a, b, c, d) {
    let arr = []
    arr.push(a)
    arr.push(b)
    arr.push(c)
    arr.push(d)
    arr.sort((a,b)=>{return a-b})

    let A = arr[0]
    let B = arr[1]
    let C = arr[2]
    let D = arr[3]
    
        var count
    let Array =[]
    let y
     for (let i = 1 ; i <= A ; i++)
     {
            for (let j = 0 ; j <= B ; j++)
            {
                for (let k = 0 ; k < C ; k++)
                {
                    for (let l = 0 ; l < D ; l++)
                        {
                        // Check whether XOR is equal to x
                        y=(arr[i] ^ arr[j] ^ arr[k] ^ arr[l]) 
                                // count++;
                            Array.push(y);
                        }
                    }
                }
            }
                return Array;
    }


   let result =  beautifulQuadruples(1,2,3,4)
   console.log(result);
