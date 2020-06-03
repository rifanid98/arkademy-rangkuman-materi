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

## Function and Method
> 

## Loops and Iteration
- perulangan , dah gitu aja.
- dipakai itu paling sering case nya ketika menampilkan data dari database, biasanya pake loop, membuat nomor urut, biasanya pakai loop.


## Promise and async/await
>