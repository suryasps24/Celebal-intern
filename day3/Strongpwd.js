function minimumNumber(n, password) {
const   numbers = "0123456789"
const  lower_case = "abcdefghijklmnopqrstuvwxyz"
const  upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special_characters = "!@#$%^&*()-+"

var char = 0;
var lower = 0;
for(var i = 0; i < lower_case.length; i++) {
  if(lower_case.includes(password[i])) {
    lower++;
  }
}

var upper = 0;
for(var i = 0; i < upper_case.length; i++) {
  if(upper_case.includes(password[i])) {
    upper++;
  }
}

var symbol = 0;
for(var i = 0; i < special_characters.length; i++) {
  if(special_characters.includes(password[i])) {
    symbol++;
  }

}

var num = 0;
for(var i = 0; i < numbers.length; i++) {
  if(numbers.includes(password[i])) {
    num++;
  }

}

if(upper==0){
    char++;
}
if(lower==0){
    char++;
}
if(symbol==0){
    char++;
}
if(num==0){
    char++;
}

var len= n+char;
if(len<6){
    return ((6-len) + char);
}
else{
    return char;
}


}
minimumNumber(3,'afb');
