/**
Terimakasih kepada : Dimas Mokodompit
Github: https://github.com/danielwetan/
Source: https://github.com/danielwetan/day3-bootcamp/
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
