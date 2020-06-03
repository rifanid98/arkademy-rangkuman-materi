/*
  var
  .
  var di deklarasikan ulang dan
  bisa diganti valuenya
 */
var name = 'John'; // John
var name = 'Doe';  // berubah jadi Doe

/*
  let
  .
  let tidak bisa di deklarasikan ulang tetapi
  bisa diganti valuenya
  .
  let yang di luar function itu berbeda 
  dengan let yang di dalam function
 */
let age = 20;
//let age = 21; error,

if(true) {
    var name = 'Jojon'; // berubah jadi Jojon
    let age = 22;
}

console.log(name); // akan menampilkan value terakhir dari variable name
console.log(age); // akan menampilkan age yang value nya 20, bukan yang value nya 22

/*
 const
 .
 pada const, kita gunakan ketika 
 mendefinisikan data yang tidak akan diubah-ubah
*/
const gender = 'male';
console.log(gender);
