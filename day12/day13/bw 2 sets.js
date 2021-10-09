 let count=0;
        let i
        for(i=a[a.length-1];i<=b[0];i++)
        {       
                if(a.every(first=>(i%first==0))){
                    if(b.every(second=>(second%i==0))){
                        count++
                    }
                }
            }
        console.log(count)
        }
        
let a = [3,4,6]
let b = [24,48]
getTotalX(a,b)
