var i = 1;
function factorialNum(num){
    var factorial = 1;

    while(i <= num){
        var factorial = factorial * i;
        i++
    }
    return factorial;
}
var myFactorial = factorialNum(4);
console.log(myFactorial);
