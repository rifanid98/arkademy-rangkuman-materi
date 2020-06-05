/*
Terimakasih kepada : Daniel
Github: https://github.com/danielwetan/
Source: https://github.com/danielwetan/day3-bootcamp/
*/
const palindrom = (string)  => {
    return string.trim().length < 1 || string.trim() == null
      ? false
      : string == string.split("").reverse().join("")
        ? "palindrom"
        : "bukan palindrom";
}

console.log(palindrom('malam'));
