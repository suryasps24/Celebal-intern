function findMedian(arr)
{
   var length = arr.length
    arr.sort((a,b)=>{return a-b})
   return arr[((length-1)/2)] // Write your code here

}
