function minimumLoss(price) {
    let arr = [];
    let min = Infinity;
    for(var i=price.length-1; i>0; i--)
    {
        for(var j=0; j<i; j++){
            let diff = price[j]-price[i]
            
            if(diff>0)
           arr.push(diff);
        }
        
    }
    return Math.min(...arr);
