/*
Thursday
04-06-2020
-
Terimakasih kepada : Daniel
Github: https://github.com/danielwetan/
Source: https://github.com/danielwetan/day3-bootcamp/
*/

function Palindrome(str) {
  let reversed = ""; // variable kosong, nanti diisi str versi reversed

  if (str < 1) {
    return false;
  }

  // loop untuk me-reserve str
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // setiap data yang diakses loop ditambahkan ke "reversed"
  }

  // pengecekan apakah versi reserved nilainya sama seperti inputan default
  if (reversed == str) {
    return "Ini palindrome";
  } else {
    return "Bukan palindrome";
  }
}

console.log(Palindrome("level"));
