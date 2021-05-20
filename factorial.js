function factorial(num){
    var factorial = 1;
for(var i = 1; i <= num; i++){
    var factorial = factorial * i;
    
}
return factorial;
}

var mainFactorial = factorial(10);
console.log(mainFactorial);