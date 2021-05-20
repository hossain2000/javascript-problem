

function getArrySum(number){
    var sum = 0;

    for(var i = 0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;

    }
    return sum;
}
var marks = [50, 51, 22, 12, 45, 46, 13, 49, 100, 6];
var result = getArrySum(marks);
var total = getArrySum([10, 45, 58, 45, 54, 100]);
console.log("Tottal Of The Number: ", result);
console.log("Tottal Of The Number: ", total);