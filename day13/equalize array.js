function equalizeArray(arr) {
    let a = []
a.fill(0)
arr.forEach(x=>{
    if(a[x])
    {
        a[x]+=1
    }
    else{
        a[x]=1
    }
})
let max =0;
for(let i=0; i<a.length;i++)
{
    if(a[i]>max)
    max=a[i]
}
 console.log(arr.length-max)
}
let arr = [2,2,3,3,3,4]
equalizeArray(arr)
