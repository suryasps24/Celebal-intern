function acmTeam(topic) {
   var obj = {};
for (var i = 0; i < topic.length; i++) {
    obj[i] = {};
    for (var j = 0; j < topic[i].length; j++) {
        obj[i][j] = topic[i][j];
    }
}
var ans = {};
for (var i = 0; i < topic.length; i++) {
    for (var j = i + 1; j < topic.length; j++) {
        var count = 0;
        for (var k = 0; k < topic[0].length; k++) {
           
            if (obj[i][k] === '1' || obj[j][k] === '1') {
                count++;
            }
        }
        if (typeof ans[count] === 'undefined') {
            ans[count] = 1;
        } else {
            ans[count] = ans[count] + 1;
        }
      
    }
    
}
let l = Object.keys(ans)[Object.keys(ans).length - 1]

return [l, ans[l]] // Write your code here

}
