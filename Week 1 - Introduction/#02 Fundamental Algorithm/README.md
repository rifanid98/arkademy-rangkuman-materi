# fundamental-algorithm

## Algoritma
<b>Apa itu algoritma?</b> adalah suatu <b>tahapan</b> yang <b>berurutan</b> untuk mencapai <b>tujuan tertentu</b>. Contohnya, ketika hendak memasak mie instan. Apa saja tahapan yang harus dilakukan? secara sederhana, tahapan memasak mie instan adalah sebagai berikut:
><ol>
><li>Pilih <b>Mie</b> yang hendak dimasak</li>
><li>Ambil alat untuk memasak mie (bisa panci, atau penggorengan)</li>
><li>Masukkan air tadi ke panci atau penggorengan yang sudah disiapkan</li>
><li>Nyalakan kompor</li>
><li>Letakkan mie kedalam air mendidih</li>
><li>Siapkan piring jika yang dimasak adalah mie goreng, siapkan mangkok jika yang dimasak adalah mie kuah</li>
><li>Letakkan mie yang sudah matang tadi di wadah yang sudah disediakan</li>
><li>Masukkan bumbu mie</li>
><li>Tambahkan kuah jika yang dimasak adalah mie kuah, jika bukan, skip</li>
><li>Aduk mie hingga merata dengan bumbu</li>
></ol>
Algoritma masing-masing orang pastinya berbeda-beda, namun tujuannya adalah sama. Jika dijabarkan lagi lebih detail, maka tahapan memasak mie menjadi seperti berikut:
><ol>
><li>Pilih <b>Mie</b> yang hendak dimasak</li>
><li><b>Letakan di mie tadi meja dapur</b></li>
><li>Ambil alat untuk memasak mie (bisa panci, atau penggorengan)</li>
><li><b>Ambil air secukupnya</b></li>
><li>Masukkan air tadi ke panci atau penggorengan yang sudah disiapkan</li>
><li>Nyalakan kompor <b>(diasumsikan gas sudah terpasang dan siap digunakan)</b></li>
><li><b>Tunggu hingga air mendidih</b></li>
><li>Letakkan mie kedalam air mendidih tadi</li>
><li><b>Tunggu mie hingga matang</b></li>
><li>Siapkan piring jika yang dimasak adalah mie goreng, siapkan mangkok jika yang dimasak adalah mie kuah</li>
><li><b>Angkat atau tiriskan mie ketika sudah matang</b></li>
><li>Letakkan mie yang sudah matang tadi di wadah yang sudah disediakan</li>
><li>Masukkan bumbu mie</li>
><li>Tambahkan kuah jika yang dimasak adalah mie kuah, jika bukan, skip</li>
><li>Aduk mie hingga merata dengan bumbu</li>
><li><b>Mie siap untuk dihidangkan dan disantap</b></li>
></ol>

Dengan kata lain, semua orang tidak terkecuali bahkan seseorang yang tidak ada hubungannya dengan IT pun tetap bisa membuat algoritma. Tetapi bedanya, programmer harus lebih jelas dan tertata serta teratur dalam membuat suatu algoritma. Agar bisa dibaca oleh anggota tim atau programmer lainnya. <br>

Lalu, bagaimana cara membuat algoritma yang sesuai dengan standar? Kita bisa mengubah algoritma yang sudah kita buat ke dalam bentuk notasi. Apa itu notasi? mudahnya, notasi algoritma bisa dikatakan sebuah bentuk standar dalam pembuatan algoritma sehingga bisa dan mudah dibaca oleh orang lain, terutama programmer. Berikut notasi-notasi yang ada:
> - Pseudocode
> - Flowchart
> - etc.

#### Pseudocode
Pseudocode merupakan notasi algoritma yang hampir menyerupai syntax kodingan suatu bahasa pemrograman, namun tidak terkait suatu bahasa pemrograman tertentu, bisa dibuat dengan menggunakan bahasa indonesia. contoh:

```
Jika x > 50 maka:
   cetak 'lulus'
Jika tidak maka:
   cetak 'tidak lulus'
```

lalu, apa keuntungannya mengubah algoritma biasa (yang ada dalam pikiran kita, atau yang sudah ditulis di buku atau entah di mana algoritma tersebut ditulis) ke dalam bentuk notasi pseudocode? salah satunya adalah kita bisa dengan mudah mengkonversikan pseudocode tadi ke dalam bahasa pemrograman. Pseudocode tadi bisa menjadi seperti ini dalam bahasa pemrograman php :

```
<?php
if( $x > 50 ) {
    echo 'lulus';
} else {
    echo 'tidak lulus';
}
?>
```

atau dalam bahasa pemrograman javascript :

```
let x = 60; //inisiasi atau deklarasi atau pembuatan variabel

if( x > 50 ) {
    console.log('lulus');
} else {
    console.log('tidak lulus');
}
```

#### Flowchart
Flowchart adalah <b>diagram alur</b> yang merupakan notasi dari algoritma juga sama halnya seperti pseudocode. Bedanya, pada flowchart kita gunakan diagram atau bentuk-bentuk yang mewakili makna tertentu. Misalnya bentuk oval menandakan start dan end (awal dan akhir) dari suatu algoritma, trapesium menandakan input/output dan sebagainya. Legenda atau arti-arti dari masing-masing diagram flowchart bisa dilihat di sini <a href="https://www.smartdraw.com/flowchart/flowchart-symbols.htm">smartdraw.com</a>. (bisa saja link mati atau berubah, silahkan cari referensi lain).
<br><br>
contoh flowchart <a href="https://www.google.com/search?safe=strict&tbm=isch&sxsrf=ALeKk01nORw61MXfOJ5rp7PXyVavsPwO6A%3A1591339018927&source=hp&biw=1366&bih=623&ei=CujZXorsNLGhmgeLybwY&q=flowchart&oq=flowchart&gs_lcp=CgNpbWcQAzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzoHCCMQ6gIQJ1CxD1jjFmCUGGgBcAB4AIAB-wKIAd4LkgEHMC40LjIuMZgBAKABAaoBC2d3cy13aXotaW1nsAEK&sclient=img&ved=0ahUKEwiKmb_nh-rpAhWxkOYKHYskDwMQ4dUDCAY&uact=5">flowchart</a>

## Contoh Kasus
Ada beberapa contoh kasus dari algoritma. Yaitu:
> - Palindrom
> - Words Reverse

#### Palindrom
Palindrom adalah kata yang jika dibalik makan akan dibaca sama. Contohnya adalah kata <b>malam</b>. Kata malam akan dibaca malam juga jika dibalik dari belakang. Beda dengan kata <b>kasur</b>, kata kasur akan dibaca <b>rusak</b> jika dibalik dari belakang. Bagaimana algoritma nya? seperti berikut :
- Buat variabel <b>string1</b>
- Input variabel string1
- Cek, apakah panjang data dari string1 itu lebih dari 0
- Konversi value string1 menjadi array, lalu simpan di variabel <b>stringArray</b>
- Buat variabel <b>stringArrayNew</b> dan isi dengan array kosong
- Looping stringArray, masukkan value stringArray ke stringArrayNew
- Konversikan value stringArrayNew dari array ke bentuk string, lalu simpan di variabel <b>string2</b>
- Jika string1 sama dengan string2 cetaklah 'palindrom'
- Jika tidak, cetak '!palindrom'

Source Code :
<a href="https://github.com/rifanid98/arkademy-rangkuman-materi/tree/master/Week%201%20-%20Introduction/%2302%20Fundamental%20Algorithm/01%20-%20palindrom">palindroms</a>
<br><br>
Flowchartnya :
<img src="https://github.com/rifanid98/arkademy-rangkuman-materi/blob/master/Week%201%20-%20Introduction/%2302%20Fundamental%20Algorithm/01%20-%20palindrom/palindrom_flowchart.jpg" alt="words_reverse" width="500">

#### Words Reverse
Words Reverse atau pembalikan kata. Contohnya Saya Belajar Javascript, jika dibalik menjadi Javascript Belajar Saya. Bagaimana algoritmanya? sebagai berikut:
- Buat variabel <b>string1</b>
- Input variabel string1
- Cek, apakah panjang data dari string1 itu lebih dari 0
- Konversi value string1 menjadi array, lalu simpan di variabel <b>stringArray</b>
- Buat variabel <b>stringArrayNew</b> dan isi dengan array kosong
- Looping stringArray, masukkan value stringArray ke stringArrayNew
- Konversikan value stringArrayNew dari array ke bentuk string, lalu simpan di variabel <b>string2</b>
- Cetaklah string2

Source Code :
<a href="https://github.com/rifanid98/arkademy-rangkuman-materi/blob/master/week1/fundamental-algorithm/words_reverse/">words_reverses</a>
<br><br>
Flowchartnya :
<img src="https://github.com/rifanid98/arkademy-rangkuman-materi/blob/master/week1/fundamental-algorithm/words_reverse/words_reverse_flowchart.jpg" alt="words_reverse">