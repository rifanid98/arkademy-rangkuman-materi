// simpan string
let string1 = 'Saya belajar Javascript';
// konversi string ke array
let stringArray = string1.split(' ');
// inisiasi variabel penampung
let stringArrayNew = [];
// loop untuk mendapatkan value stringArray
for (let i = stringArray.length - 1; i >= 0; i--) {
    // dan dimasukkan ke stringArrayNew
    stringArrayNew.push(stringArray[i]);
}
//  konversi dari array ke string
let string2 = stringArrayNew.join(' ');
// print hasilnya
console.log(string2);
