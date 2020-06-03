/**
 * Integer
 */
var age = 20;

console.log(age); //20 yellow (int)
// prototype bawaan integer
console.log(age.toString() + '\n'); //20 white (string)

/**
 * String
 */
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

/**
 * Function
 */
var sum = function(param1, param2) {
    console.log(param1+param2);
}

/**
 * Object
 */
var profile = {
    name: 'John',
    age: 20
}
// update data object
profile.name = 'Jojon';
console.log(profile.name); // Jojon



/**
 * Array
 */
var fruits = ['buah1','buah2','buah3'];
// contoh method dari array
// menambah data atau element ke akhir array
console.log(fruits.push('buah4')); // array fruits menjadi : ['buah1','buah2','buah3', 'buah4']
// menghapus data atau element terakhir suatu array
console.log(fruits.pop()); //['buah1', 'buah2']

