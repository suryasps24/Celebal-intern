
function pairs(k, arr) {
    let count =0;
    let map =[];
    // k=0
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length; j++){
            let diff = Math.abs(arr[i]-arr[j])
            if(diff===k)
            {
                count+=1;
            }
        }
        
    }
    
    return (count/2);

}
