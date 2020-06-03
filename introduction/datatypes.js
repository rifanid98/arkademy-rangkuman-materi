
var age = 20;

console.log(age); //20 yellow (int)
// prototype bawaan integer
console.log(age.toString() + '\n'); //20 white (string)

var name = 'John';
console.log(name); //John
// prototype bawaan string
/**
   John => Jo,
   dipotong dari index ke 0 sebanyak 2 karakter
   karakter : J,o,h,n
   index    : 0 1 2 3
 */
console.log(name.slice(0,2) + '\n'); //20 white (string)


var sum = function(param1, param2) {
    console.log(param1+param2);
}
