
function fiboNum(num){

    var fibo = [0, 1];
    for(i = 2; i <= num; i++){

        fibo[i] = fibo[i - 1] + fibo[i - 2];
    
    }
    return fibo;
}

var fiboNumber = fiboNum(12);
console.log(fiboNumber);