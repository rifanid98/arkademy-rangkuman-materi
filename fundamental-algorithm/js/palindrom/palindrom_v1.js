const palindrom = (string) => {
    // cek input
    if(string.trim().length < 1 || string.trim() == null){
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
        return string + ' adalah palindrom';
    }
    // atau bukan
    else {
        return string + ' adalah !palindrom';
    }
}

console.log(palindrom('malam'));
console.log(palindrom('pagi'));
