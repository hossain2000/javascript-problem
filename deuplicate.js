var nameId = [50, 41, 50, 52, 65, 12, 41, 52];
var uniqeName = [];

for(var i = 0; i < nameId.length; i++){
    var element = nameId[i];
    var index = uniqeName.indexOf(element);
    if(index == -1){
        uniqeName.push(element);
    }
}

console.log(uniqeName);