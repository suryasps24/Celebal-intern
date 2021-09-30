 var obj = {};
    let s1 = b;
    for (var i = 0; i < s1.length; i++) {
        if (!obj[s1[i]]) {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]] += 1;
        }
    }
    for (var i in obj) {
        if (i !== '_' && obj[i] === 1)
            return "NO";
    }

    if (b.indexOf('_') !== -1)
        return "YES";
    for (var i = 1; i < b.length; i++) {
        if (b[i] === b[i - 1] || b[i] === b[i + 1])
            continue;
        else
            return "NO";
    }
    return "YES";
