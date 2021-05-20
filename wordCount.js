var wordName = "Im A Good Person. I Don't snoer Night";
var count = 0;

for(var i = 0; i < wordName.length; i++){
    var char = wordName[i];
    if(char == " "){
        count++;
    }
}
count++;
console.log(count);