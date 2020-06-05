/**
Terimakasih kepada : Dimas Mokodompit
Github: https://github.com/dimasdompit/
Source: https://github.com/dimasdompit/Arkademy-B16.3---Tugas-1
 */

// PALINDROM
function palindrom(str) {
  if (str.length < 1) {
    return false;
  }

  const strRev = str.split("").reverse().join("");

  if (str === strRev) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrom("malam")); // TRUE
console.log(palindrom("kotak")); // FALSE
