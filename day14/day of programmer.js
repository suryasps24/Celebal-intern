function day(year){
    let normal = 243
    if(year == 1918)
    {
       console.log('26.09.1918')
    }
    else if (((year <= 1917) && (year%4 == 0)) || ((year%400 == 0) || ((year%4 ==0) & (year%100 != 0))))
    console.log( "12.09." + year);
    else
    console.log( "13.09." + year);
}
day(2100);
