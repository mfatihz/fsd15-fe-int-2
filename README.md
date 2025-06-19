# React + Vite

Stack: Vite + React + React Router + tailwind\
Demo: [netlify](https://fsd15-fe-int2.netlify.app/)

## Highlight:

Components disusun dengan menggunakan paradigma atomic design.

### Login dan Register

**Login** page dan **Register** page menggunakan **AuthTemplate**.\
AuthTemplate tersusun **AuthHeader** molecule, dengan props untuk mengatur nilai di dalamnya, serta Form organims (**LoginForm** dan **RegisterForm**).

## Home dan List

**Home** page dan **List** page dibentuk dengan menggunakan **HomeTemplate**
yang tersusun atas: **Header** organism, **Hero** organism dan **Galleries** template, dan **Footer** organism.

### Header

Header memiliki elemen yang dibuat secara dinamis berdasar data yaitu link navigasi (**NavigationalLinks** molecule) dan menu item pada avatar (**SettingMenu** organism).\
Data yang dipakai diletakkan pada **home-utils.jsx** pada folder **src/utils/app**.

### Galleries

Tampilan **Galleries** template dibuat secara dinamis berdasarkan list object **Gallery** (disimpan pada **home-page-data.js** dan **list-page-data.js** pada folder **src/utils/data/**).\
Jika data **Galleries** tidak kosong, list tersebut akan terender pada page. Sedangkan jika data **Galleries** kosong, teks alternatif akan ditampilkan untuk menandai bahwa tidak ada data

### Gallery

Data **Gallery** object berisi data **title** (misalnya: "Rilis Baru") dan list object **Movie**.\
seperti halnya pada **Galleries** Jika data **Movie** kosong, teks alternatif akan ditampilkan untuk menandai bahwa isi gallery masih kosong.\

Struktur data yang dipakai:
```
{
        title, \\ title untuk gallery
        galleryType, \\ bisa dikosongkan (default) atau diisi 'continue'
        movies, \\ list movie object
},
```

### movie

Data **movie** object merupakan unsur utama penyusun **gallery**. **movie** object memiliki struktur data seperti berikut ini:
```
 {
        id, // id unik movies. Harus diisi
        title, // judul movie/series
        type: // salah satu di antara: movies atau series. Harus diisi
        genres: // genre dari movies/series misalnya 'aksi, 'anime' atau 'drama'
        badges, // berupa list atau null. List bisa menggunakan nilai: 'new' atau 'top'.
        duration, // durasi movies
        episodes, // jumlah episode dalam series
        contentRating, // kategori rating movie atau series (mis: 'G' atau 'R')
        userRating, // nilai rating dari pengguna. Skala 0-5
        images: { // berisi url gambar
            hero:'/images/hero/<nama-hero-img>',
            portrait:'/images/poster-portrait/<nama-portrait-img>',
            landscape:'/images/poster-landscape/<nama-landscape-img>',
        },
        summary, // teks yang muncul di deskripsi Hero image (atau di bagian lainnya yang membutuhkan deskripsi movie/series)
    }
```

