# Kalem Sounds App

Kita akan membuat website pemutar musik ambience sederhana dengan menggunakan HTML, CSS dan Vanilla JS.
Fitur:

1. Terdapat 4 macam musik ambience
2. Dapat memutar musik

## Persiapan

Kamu dapat menggunakan code editor seperti [codesandbox](https://codesandbox.io/) atau [Replit](https://replit.com/). Kamu juga dapat menginstall [VSCode](https://code.visualstudio.com/download)

## Membuat halaman HTML

buat file baru dengan nama `index.html` dan tambahkan kode seperti dibawah ini.

--index.html--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Kalem Sounds</title>
  </head>
  <body></body>
</html>
```

Kita akan membuat sebuah Hero seperti ini.

Tambahkan tag `main` dan untuk memberi tahu browser posisi konten web kita.

```
<body>
    <main>

    </main>
 </body>
```

setelah itu kita akan menambahkan section hero.

```html
<body>
    <main>
        <section>
            <div>
              <h1>Kalem Sounds</h1>
            </div>
        </section>
    /main>
 </body>
```

kemudian kita akan mendekorasi bagian hero.
tambahkan file baru `styles.css`

```
.
├── index.html
├── styles.css
```

tambahkan class pada bagian section yang baru kita buat.

```html
<section class="wrapper">
  <div class="wrapper__hero">
    <h1 class="wrapper__title">Kalem Sounds</h1>
  </div>
</section>
```

dan pada css kita tambahkan style seperti ini.

```css
main {
  max-width: 640px; /* kita buat max-width: 640px agar website kita menjadi tampilan mobile website saja */
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  padding: 8px;
}

.wrapper {
  height: 400px;
  width: 100%;
}

/* memposisikan title kalem sounds ditengah */
.wrapper__title {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50px);
  color: #ffff;
}
```

untuk menambahkan gambar hero kita dapat menambahkan `background-url` dan juga tambahkan gambar `hero.png` ke dalam folder assets.

```
.
├── assets
│   ├──  hero.png
├── index.html
├── styles.css
```

```css
.wrapper__hero {
  background: url(./assets/hero.png) no-repeat;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
```

keseluruhan file styles.css kita jadi seperti ini:

```css
main {
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  padding: 8px;
}

.wrapper {
  height: 400px;
  width: 100%;
}
.wrapper__hero {
  background: url(./assets/hero.png) no-repeat;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}

.wrapper__title {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50px);
  color: #ffff;
}
```

Berikutnya kita akan buat `card` musik. Ada 4 buah card yang akan kita buat.
Tambahkan section baru dengan nama class `sounds`

```html
<main>
  <section class="wrapper">
    <div class="wrapper__hero">
      <h1 class="wrapper__title">Kalem Sounds</h1>
    </div>
  </section>
  <section class="sounds"></section>
</main>
```

kemudian tambahkan tag `div` dengan nama class `card`

```html
<section class="sounds">
  <div class="sounds__card">
    <div class="audio-box" id="sound-fire"></div>
    <h3>Fire</h3>
  </div>
</section>
```

Tambahkan tag `img` sebagai icon. Jangan lupa untuk tambahkan gambar flame.png ke dalam folder `assets`

```html
<section class="sounds">
  <div class="sounds__card">
    <div class="audio-box" id="sound-fire">
      <img src="./assets/flame.png" alt="icon flame" />
    </div>
    <h3>Fire</h3>
  </div>
</section>
```

untuk 3 card yang lain kamu dapat menambahkannya seperti kode di bawah ini.

```html
<section class="sounds">
  <div class="sounds__card">
    <div class="audio-box" id="sound-fire">
      <img src="./assets/flame.png" alt="icon flame" />
    </div>
    <h3>Fire</h3>
    <div class="sounds__card">
      <div>
        <div class="audio-box" id="sound-rain">
          <img src="./assets/rain.png" alt="" id="sound-rain" />
        </div>
        <h3>Rain</h3>
      </div>
    </div>
    <div class="sounds__card">
      <div>
        <div class="audio-box" id="sound-wind">
          <img src="./assets/wind.png" alt="" id="sound-wind" />
        </div>
        <h3>Wind</h3>
      </div>
    </div>
    <div class="sounds__card">
      <div>
        <div class="box" id="sound-bird">
          <img src="./assets/bird.png" alt="" id="sound-bird" />
        </div>
        <h3>Bird</h3>
      </div>
    </div>
  </div>
</section>
```

sekarang kita tambahkan style untuk sounds card

```css
.sounds__card {
  width: 100%;
  height: 124px;
  background: #ffffff;
  box-shadow: 0px -1px 6px 4px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px 0;
}

.sounds__card img {
  width: 50px;
  height: 50px;
}

.sounds {
  padding: 20px;
  display: grid;
  grid-template-columns: 150px 150px;
  grid-gap: 20px;
  justify-content: space-around;
}
```

setelah itu kita akan masuk ke bagian javascript.
kita akan buat event handler. Saat card-nya diklik akan memutar audio yang sudah kita siapkan.

buat folder baru js dan file `index.js`

```
.
├── assets
│   ├── songs
|   │   ├──  bird.wav
|   │   ├──  fire.wav
│   ├──  hero.png
├── js
│   ├── index.js
├── index.html
├── index.html
├── styles.css
```

di dalam file index.js

kita buat sebuah function dengan nama playAudio
yang menerima 2 parameter. URL dan SELECTOR

```js
function playAudio(url, selector) {}
```

url adalah file path yang mengarah ke sound yang kita simpan di folder assets sedangkan selector adalah penanda element card yang mana yang sedang diklik.

kemudian buat 2 variable.

```js
function playAudio(url, selector) {
  const element = document.querySelector(`#${selector}`);
  const isPlaying = element.classList.contains("bounce");
}
```

1. variable element untuk menampung hasil seleksi dom. Baca lebih lengkap tentang [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

2. variable isPlaying kita gunakan sebagai penanda apakah sedang memutar audionya.

lanjut kita buat (control flow)[https://developer.mozilla.org/en-US/docs/Glossary/Control_flow]

```js
function playAudio(url, selector) {
  const element = document.querySelector(`#${selector}`);
  const isPlaying = element.classList.contains("bounce");

  if (element && !isPlaying) {
  } else {
  }
}
```

pada blok `if` kita mengecek apakah ada element yang berhasil kita seleksi dan apakah element itu tidak terdapat class `bounce`. Jika benar maka kita akan putar musiknya.
dan menambahkan class `bounce` ke bagian `div.card`

```js
function playAudio(url, selector) {
  const element = document.querySelector(`#${selector}`);
  const isPlaying = element.classList.contains("bounce");

  if (element && !isPlaying) {
    const sound = new Audio(url);
    sound.play();
    element.classList.add("bounce");
  } else {
  }
}
```

selain itu kita perlu menampung selector dan sound yang sedang diputar. tapi sebelum itu kita harus buat variable penampung
`currentPlaylist` sebagai [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Kita gunakan array method `.push` untuk menambahkan sebuah object `{key: '', sound: ''}`

```js
const currentPlaylist = [];

function playAudio(url, selector) {
  const element = document.querySelector(`#${selector}`);
  const isPlaying = element.classList.contains("bounce");

  if (element && !isPlaying) {
    const sound = new Audio(url);
    sound.play();
    element.classList.add("bounce");
    currentPlaylist.push({ key: selector, sound });
  } else {
  }
}
```

kita akan buat animasi `bounce`. Pada file `styles.css` tambahkan kode berikut.

```css
.bounce {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}
```

Cool. sekarang kita buat blok `else`.
pada else statement kita akan `pause` musik yang sedang berjalan.
Kita coba mengecek apakah ada audio yang kita pilih sedang berjalan atau tidak. Jika ya maka akan kita hapus `class bounce`.

kita mengunakan array method `.find` untuk mencari object dengan key yang sesuai di dalam variable `currentPlaylist`
baca mengenai `Array.find` [di sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```js
if (element && !isPlaying) {
  const sound = new Audio(url);
  sound.play();
  element.classList.add("bounce");
  currentPlaylist.push({ key: selector, sound });
} else {
  const selectedAudio = currentPlaylist.find((item) => item.key === selector);
  element.classList.remove("bounce");

  selectedAudio.sound.pause();
}
```

Ok. fungsi javascript sudah jadi sekarang kita bisa mencoba untuk memutar audio-nya.
Selamat aplikasi Kalem sounds mu sudah jadi. Jangan lupa untuk share hasilnya ke sosmed. Boleh tag aku juga di twitter @azharieazharou :)
