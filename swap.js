var a = 5;
var b = 7;
console.log("Before Swap: A =", a, "B =", b);
var temp = a;
a = b;
b = temp;
console.log("After Swap: A =", a, "B =", b);

var x = 5;
var y = 7;
console.log("After Swap: X =", x, "Y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After Swap: X =", x, "Y =", y);

var p = 5;
var q = 7;
console.log("After Swap: P =", p, "Q =", q);
[p, q] = [q, p];
console.log("After Swap: P =", p, "Q =", q);


