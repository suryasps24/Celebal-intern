const getBinaryNumber = (N) => {
    var number = N.toString(2);
    var str = '';
    var N = 32 - number.length;
    while (n--){
        str+='0';
    }
    return str+number;
}
const flipbits = (bits) => {
    var str = '';
    var n = 0;
    while (n < bits.length){
        str+= (bits[n] === '0') ? '1': '0';
        n++;
    }
    return str;
}

function flippingBits(N) {
  var bits = getBinaryNumber(N);
  return parseInt(flipbits(bits), 2);
}
