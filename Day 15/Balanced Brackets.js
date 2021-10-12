function isBalanced(s) {
    if (Math.floor(s.length % 2) !== 0)
        return "NO";
    var obj = {
        "}": "{",
        "]": "[",
        ")": "(",
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (typeof obj[s[i]] === 'undefined') {
            stack.push(s[i]);
        }
        else {
            let c = stack.pop();
            if (c !== obj[s[i]])
                return "NO";
        }
    }
    if(stack.length !==0)
      return "NO";
    return "YES";
return stack// Write your code here

}
