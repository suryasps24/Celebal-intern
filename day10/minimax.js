let a = arr.sort((a, b) => {
        if (a.length == b.length) {
            return a > b ? 1 : -1;
        }
        return a.length - b.length;
    })
    
    let min = a[0] + a[1] + a[2] + a[3];
    let max = a[4] + a[1] + a[2] + a[3];
    
    console.log(min,max);
}
