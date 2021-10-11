function sherlockAndAnagrams(s) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            let key = s.slice(i, j).split('').sort().join('');
            hash[key] = hash[key] ? hash[key] + 1 : 1;
        }

    }
    let count = 0;
    for (let key in hash) {
        if (key !== s) {
            //  n * n-1 /2
            count += hash[key] * (hash[key] - 1) / 2;
        };
    }
    console.log(count);

}
let a = 'abba';
sherlockAndAnagrams(a);// Write your code here
