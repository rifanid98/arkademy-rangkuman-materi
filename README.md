# javascript-fundamental

## Variables
> - var (ES5) <br>
> - let (ES6) <br>
> - const (ES6) <br>

#### var
- digunakan untuk menandakan suatu variabel
- variabel yang ditandai dengan var, tipe data dan value (isinya) bisa diubah
  contoh: 
  > var umur = 10; (integer) <br>
  > var umur = 'sepuluh'; (berubah jadi string)
- apabila var dibuat diluar function, maka var bisa juga diakses di dalam function
  contoh:
  ```
  var umur = 10;
  function setUmurNew(){
    var umur = 20; // berhasil diubah
  }
  ```
#### let
- dapat dikatakan bahwa let itu bentuk impovisasi dari var, jadi ya..., versi kerennya var gitu deh.
- berbeda dengan var, let bisa diubah datanya , tapi <b>tidak bisa diubah tipe datanya</b>
- variabel yang ditandai dengan let, hanya bisa diakses di blok kode dimana variabel tersebut ditulis.
- let yang ada di luar function, maka itu berlaku untuk di luar function
- let yang ada di dalam function maka itu berbeda dengan let yang di luar function, dan hanya berlaku di dalam function di mana let tersebut ditulis atau dideklarasikan.
  contoh:
  ```
  let umur = 10;

  function setUmur(){
    let umur = 20;
    console.log(umur);
  }

  console.log(umur); //menampilkan variabel umur yang di luar function
  setUmur(); //menampilkan variabel umur yang di dalam function
  ```
 (memang bikin bingung sih, kalo udah ada penjelasan lebih mudah, nanti diupdate)

#### const
- konstanta, nilainya tetap tidak bisa diubah, begitu juga tipe datanya
 <br>
 contoh lain: <a href="https://github.com/rifanid98/arkademy-rangkuman-materi/tree/master/introduction/variable.js">variable.js</a>

## Conditions
> - if-else <br>
> - switch-case <br>
> - ternary operator <br>

#### if-else
- digunakan untuk mengecek suatu kondisi (tapi kondisinya umum, bisa cek angka, bisa cek hari, bisa cek variabel, etc)
- if-else bisa mengecek kondisi yang berbeda dengan satu if denga if lainnya. contoh, kita bisa cek hari di if pertama, kita bisa cek bulan di if kedua, etc.
#### switch-case
- digunakan untuk mengecek suatu kondisi tertentu (cuma bisa menentukan suatu kondisi tersebut yang dicek sampai switch-case selesai)
- tidak bisa mengecek kondisi yang lain, hanya bisa mengecek kondisi tertentu. contoh, kita cek hari, jadi bisa cek hari aja, gabisa cek bulan etc.
#### ternary operator
- gampangnya itu, if-else versi pendek, versi satu baris.
- biasa digunakan hanya untuk menentukan atu mengecek satu kondisi saja.
<br>
contoh lain: <a href="https://github.com/rifanid98/arkademy-rangkuman-materi/tree/master/introduction/conditions.js">conditions.js</a>

## Function and Method
- ES5
Function di ES5 dan ES6 berbeda. 
Function di ES5 struktrunya seperti ini :
```
function nama_function(parameter1, parameter2, parameter3,...){
  //code here
}

nama_function(1,2,3); //memanggil function
```
- ES6
Function di ES6 strukturnya berbeda, seperti ini :
```
const nama_variabel = (parameter1, parameter2, parameter3,...) => {
  //code here
}

nama_variabel(1,2,3); //memanggil function
```
nama_variabel merupakan nama function yang diguanakan pada arrow function.
kenapa dipanggil arrow function? karena menggunakan tanda panah <b>=></b>
<br>
contoh lain: <a href="https://github.com/rifanid98/arkademy-rangkuman-materi/tree/master/introduction/function.js">function.js</a>

## Loops and Iteration
- perulangan , dah gitu aja.
- dipakai itu paling sering case nya ketika menampilkan data dari database, biasanya pake loop, membuat nomor urut, biasanya pakai loop.
- ada for loop, while loop, foreach loop, map loop etc.
<br>
contoh : <a href="https://github.com/rifanid98/arkademy-rangkuman-materi/tree/master/introduction/loops.js">loops.js</a>

## Promise and async/await
### Promise
Promise itu digunakan untuk mengganti metode eksekusi syntax javascript dari asyncronous ke syncronous.
apa itu ?
- <b>Asyncronous</b>
Semua blok kode akan dieksekusi bersamaan, andaikan terdapat 2 function yang ada dalam 1 file js, kedua function itu akan dieksekusi bersamaan, tak peduli walaupun function pertama belum selesai dieksekusi, function kedua akan dieksekusi tanpa menunggu function pertama selesai.
- <b>Syncronous</b>
Misalkan ada 2 function dalam 1 file js, function kedua tidak akan dieksekusi ketika function 1 belum selesai di eksekusi. Dengan syarat kedua function tersebut harus berada di blok kode promise.
```
const data =  new Promise((resolve, reject) => {
  function a(){
    setTimeout(() => {
      console.log('awal yeay');
    }, 1000);
    console.log('yah terakhir dung...');
  }
}
```
output 'awal yeay' akan ditampilkan dan output 'yah terakhir dung...' akan ditampilkan setelah 1 detik.
<br>
contoh lain : <a href="https://github.com/rifanid98/arkademy-rangkuman-materi/tree/master/introduction/promise.js">promise.js</a>

### async/await
Gampangnya, async/await itu digunakan bersamaan dengan Promise. Biasanya sih sebagai pengganti .then() dan .catch(), tapi digunakannya untuk tujuan yang lebih kompleks.
<br>
Jika biasanya digunakan kode seperti ini :
```
const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('harusnya ini dulu!');
    }, 2000);

    setTimeout(() => {
        reject('rejected!');
    }, 3000);
})

data.then(() => {
  //sukses
  //code here
}).catch(() => {
  //gagal atau error
  //code here
})
```
tetapi kita gunakan async/await :
```
const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('harusnya ini dulu!');
    }, 2000);

    setTimeout(() => {
        reject('rejected!');
    }, 3000);
})

const asyncFunc = async () => {
    try {
        const getData = await data
        console.log(getData);
        console.log('sesudah promise');
    } catch (error) {
        console.log(error);
    }
}
```
pada kode :
```const getData = await data
```
<b>asyncFunc</b> akan menungggu hasil dari eksekusi kode :
```const data = new Promise((resolve, reject)
```
apabila hasilnya resolve() (disetujui gitu yah, atau sukses), maka eksekusi blok kode <b>try{}</b>, jika hasilnya reject() (gagal gitu deh ya) maka blok kode <b>catch{}</b> akan eksekusi
contoh : <a href="https://github.com/rifanid98/arkademy-rangkuman-materi/tree/master/introduction/asyncawait.js">asyncawait.js</a>