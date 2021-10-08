function extraLongFactorials(n) {
    let factorial = 1;
    for(let i=n; i>0; i--)
    {
        factorial = BigInt(factorial)*BigInt(n)
    }
console.log(BigInt(factorial));
}
