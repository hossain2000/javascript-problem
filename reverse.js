function reverseString(str){
    
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var reverseArry = "Hello Alian Mama";
var forArry = reverseString(reverseArry);
console.log(forArry);