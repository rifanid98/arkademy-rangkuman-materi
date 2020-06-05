/*
Terimakasih kepada : Daniel
Github: https://github.com/danielwetan/
Source: https://github.com/danielwetan/day3-bootcamp/
*/
const words_reverse = (string) => {
  return string.trim().length < 1 || string.trim() == null
    ? false
    : string.split(" ").reverse().join(" ");
};

console.log(words_reverse("Saya Belajar Javascript"));
