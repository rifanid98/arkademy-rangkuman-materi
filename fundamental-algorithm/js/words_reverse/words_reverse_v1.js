const words_reverse = (words) => {
    // cek input
    if(words.length < 1 || words == null){
        return 'tidak bisa ya...';
    }

    // simpan string
    let string1 = words;

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
    return string2;
}

console.log('Saya belajar Javascript dibalik menjadi ' + words_reverse('Saya belajar Javascript'));
