var marks = [50, 51, 22, 12, 98, 45, 46, 13, 49, 100, 6];
var max = marks[0];

    for (let i = 0; i < marks.length; i++) {

        var marksResult = marks[i];
        if(max < marksResult){
            max = marksResult;
        }
    
    }

console.log("Max Higest Valu IS = ", max);