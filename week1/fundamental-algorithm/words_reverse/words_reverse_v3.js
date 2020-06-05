/**
Terimakasih kepada : Dimas Mokodompit
Github: https://github.com/dimasdompit/
Source: https://github.com/dimasdompit/Arkademy-B16.3---Tugas-1
 */

// words_reverse
function words_reverse(str) {
  if (str.length < 1) {
    return false;
  }

  const strRev = str.split(" ").reverse().join(" ");

  return strRev;
}

console.log(words_reverse("Saya Belajar Javascript"));
