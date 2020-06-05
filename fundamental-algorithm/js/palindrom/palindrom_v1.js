const palindrom = (string) => {
    // cek input
    if(string.length < 1 || string == null){
        return 'oo tidak bisa';
    }
    // simpan string
    let string1 = string;

    // konversi string ke array
    let stringArray = string1.split('');

    // inisiasi variabel penampung
    let stringArrayNew = [];

    // pengganti builtin function reverse()
    // loop untuk mendapatkan value stringArray dari belakang
    for (let i = stringArray.length - 1; i >= 0; i--) {

        // dan dimasukkan ke stringArrayNew
        stringArrayNew.push(stringArray[i]);
    }

    // konversi dari array ke string
    let string2 = stringArrayNew.join('');

    // cek, palindrom kah?
    if (string1 == string2) {
        return 'palindrom';
    }
    // atau bukan
    else {
        return '!palindrom';
    }
}

console.log('malam adalah ' + palindrom('malam'));
console.log('pagi adalah ' + palindrom('pagi'));
