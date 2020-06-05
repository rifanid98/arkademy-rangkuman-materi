/*
by Adnin Rifandi
Github: https://github.com/rifanid98/ 
*/
const words_reverse = (words) => {
    // cek input
    if(words.trim().length < 1 || words.trim() == null){
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
    return words + '\ndibalik menjadi\n' + string2;
}

console.log(words_reverse('Saya belajar Javascript'));
