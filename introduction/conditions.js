/**
 * if-else statement
 */

let isLogin = false;

if(isLogin) {
    console.log('user telah login');
} else {
    console.log('user belum login');
}

// output: user telah login

let price = 30000; //outputnya murah
// let price = 80000; //outputnya lumayan
// let price = 100000; //outputnya mahal

if (price >= 100000) {
    console.log('mahal');
} else if (price >= 50000) {
    console.log('lumayan');
} else {
    console.log('murah');
}

/**
 * switch-case
 */
// const day = new Date().getDay();
const day = 3; 
switch (day) {
    case 0:
        console.log('hari minggu');
        break;
    case 1:
        console.log('hari minggu');
        break;
    case 2:
        console.log('hari minggu');
        break;

    default:
        console.log('Hari libur yeay!');
        break;
}

// outputnya Hari libur yeay!

/**
 * ternary-operator
 */

 let isMahal = price > 100000 ? 'Mahal' : 'Murah';
 console.log(isMahal); //outputnya Murah

// sama juga seperti
/*
 if(price > 100000) {
    console.log('Mahal');
 } else {
    console.log('Mahal');       
 }
*/

let name = 'John' || 'Jojon'; //outputnya John
let umur;
let pilihUmur = umur || 21; 
//outputnya 21.
// karena akan diambil value yang bernilai true, sedangkan
// umur itu tidak ada valuenya, jadi yang diambil yang 21

