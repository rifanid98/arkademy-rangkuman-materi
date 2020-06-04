// simpan string
let string1 = 'malam';
// konversi string ke array
let stringArray = string1.split('');
// inisiasi variabel penampung
let stringArrayNew = [];
// loop untuk mendapatkan value stringArray 
for (let i = stringArray.length-1; i >= 0; i--) {
    // dan dimasukkan ke stringArrayNew
    stringArrayNew.push(stringArray[i]);
}
// konversi dari array ke string
let string2 = stringArrayNew.join('');
// cek, palindrom kah?
if (string1 == string2) {
    console.log('palindrom');
} 
// atau bukan
else {
    console.log('!palindrom');
}