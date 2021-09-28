function processData(input) {
    var chars = input.split(''),
        w = Math.ceil(Math.sqrt(chars.length)),
        h = Math.ceil(Math.sqrt(chars.length)),
        result = [];
        
    for (var i = 0; i < h; i++) {
        var j = i, str = '';
        while (j < chars.length) {
            str += chars[j];
            j += w;
        }
        result.push(str);
    }
    
    console.log(result.join(' '));
} 
