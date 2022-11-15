# monster-class-based

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-qe5ibj)

# <span style="color: cyan;">Why React?</span> 🔥🔥

1. Apa itu react? react merupakan library javascript untuk membuat User Interface.
2. Kenapa react itu ada? Sebelum react muncul, ketika aplikasi semakin kompleks sangat sulit untuk me manage/mengelola flow data karena belum ada framework yang menggunakan component based, ketika menggunakan component based flow data menjadi efisien karena memperbarui dan me-render hanya komponen yang diperlukan ketika datanya berubah.
3. (Kalau ditanya apa itu Single Page Application) SPA adalah aplikasi web yang hanya menggunakan 1 dokumen HTML. Penjelasan lebih lanjutnya: Sebelum SPA ketika client request halaman tertentu, client akan request ke server kemudian server akan meresponse dengan file html, css dan js. Jadi tanpa SPA, kalau client request setiap halaman yang berbeda maka server akan terus meresponsenya dengan file html, css dan js yang berbeda juga. Beda halnya dengan SPA, dengan SPA untuk awalnya client request dulu ke server tapi di sini response servernya adalah file html, css dan js yang sudah di build oleh react, ketika client mau request halaman yang berbeda maka client tidak perlu request ke server, yang terjadi adalah react akan menghandle hal tersebut.
4. (Kalau ditanya apa itu DOM) DOM adalah Document Object Model, ini yang digunakan browser untuk menampilkan website.
5. (Kalau ditanya React itu imperative atau deklaratif?) react itu deklaratif. Kalau imperative, kita sebagai developer yang langsung update DOMnya. Kalau react enggak, react itu deklaratif karena react hanya butuh deklarasi tampilan aplikasinya seperti apa, untuk manipulasi DOM itu sudah urusan react. Cara mendeklarasikan tampilan aplikasinya seperti apa yaitu menggunakan state.
6. apa itu state pada react? State adalah wadah (object) untuk menyimpan data yang akan di render atau muat ulang ketika ada perubahan data.
7. Kelebihan React component based. Membuat tampilan di susun berdasarkan component. Component dibuat berdasarkan state menggunakan syntax JSX. JSX adalah ekstensi sintaks JavaScript (facebook nambahin fungsionalitasnya javascript untuk bisa di padukan dengan html) gunanya untuk membuat component tadi.
8. Component itu bisa dalam bentuk Function atau Class.
9. Perpaduan antara state dan components akan dibuatkan secara otomatis oleh react yang bernama virtual dom.
10. Apa itu virtual dom? Virtual dom merupakan alat bantu yang digunakan oleh react untuk manipulasi aktual dom dengan cara membandingkan 2 dom sehingga react tau mana aja yang harus di manipulasi dan yang tidak. Kemudian react akan mengupdate aktual dom setelah react tau mana aja yang harus dimanipulasi. Ini namanya konsep one way data flow.
11. Kelebihan react dibanding vue? React itu UI library dengan konsep learn once write everywhere. Jika kita membuat website dengan react kita 2 hal yang wajib kita import yaitu core react-nya dan react-dom. Jika kita membuat mobile apps dengan react, maka kita perlu import core reactnya dan kita import react-nativenya (react-nativenya ini berperan untuk menghubungkan react dengan android dan ios). Ini gak bisa dilakukan oleh vue atau angular.
12. Bagaimana cara menjadi react developer yang baik? 1. Tentukan component. Seberapa banyak kita mau pecah menjadi component terkecil? 2. Tentukan statenya, di component apa dia di manipulasi? 3. Tentukan perubahan apa yang terjadi ketika state berubah.

# <span style="color: cyan;">React Projects</span> 🔥🔥

1. package.json berisi informasi aplikasi library apa saja yang digunakan, gimana cara running projectnya.
2. Perhatikan ketika membuat project CRA. Di CRA terdapat react-scripts start itu berguna untuk menjalankan project react di local environment. Biasanya meminta port 3000. Kalau port 3000 sudah dipakai di local, biasanya ke port 3001 dan seterusnya.
3. Kalau di CRA, entry point project react yaitu index.js file. Karena disini pakai vite jadi entry pointnya main.jsx.
4. Ada 2 library yang critical (yang harus di import) yaitu react dan react-dom. Pada intinya ketika kita import react ini menandakan bahwa kita sedang mengimport engine untuk membuat aplikasi. Sedangkan react-dom ini terkait web dom yang bertugas untuk manipulasi domnya.
5. Biasanya di index.js (CRA) atau main.jsx (Vite) terdapat syntax .render. Pada intinya seluruh aplikasi react (<App>) itu di render oleh index.js atau main.jsx
6. strict mode artinya, karena ada beberapa yang masih menggunakan react versi lama, strict mode memastikan ketika ada developer menggunakan sesuatu yang sudah deprecated maka react tidak mengizinkannya atau memberi warning.
7. Rendernya gimana? Jadi dia bakalan nyari id root di index.html kalau udah ketemu maka di render.
8. Kalau misalkan di luar id root, di tambahin tag html pada index.htmlnya apakah itu valid? Ya Valid. Tapi tag tersebut di luar react application. Masih bisa running tag tersebut di luar id root pada index.html
9. Kalau di CRA (react-scripts build) kalau di vite (vite build). React menggunakan skrip build untuk memastikan bahwa proyek yang telah selesai dibundel (dibungkus), diperkecil, dan dioptimalkan untuk keperluan deployment supaya orang lain bisa akses aplikasi react menggunakan internet.
10. react-scripts test itu watch mode interaktif test runner menggunakan jest untuk keperluan test sesuatu yang spesifik. Jika ditanya kasih contoh aja yang model button itu ke render di page tersebut atau enggak.
11. component di react adalah bagian bagian kode yang mengembalikan (me-return) tampilan UI.

# <span style="color: cyan;">React Class Base Components</span> 🔥🔥

1. State harus di taro di dalam constructor.
2. saya sudah menambahkan state pada baris 10 dan menambahkan variable human pada baris 14. Keduanya bisa di render lihat di baris 50 dan 54 pada file App.jsx.
3. setState itu apa? memberi tahu ke React bahwa suatu component perlu dirender ulang dengan state yang diperbarui.
4. Hati-hati, setState itu asynchronous.
5. constructor Jalan pertama kali, initialize statenya, kedua: render your initial component UI, ketiga Ketika kita butuh API calls lakukan di componentDidMount lifecycle. Ketika itu terjadi maka update statenya pake setState untuk memastikan componentnya sudah di update dan ketika componentnya sudah di update maka panggil render methodnya lagi untuk me render ulang UInya.

# React Technical Definition

1. key membantu React mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihapus.
2. Jadi componentdidMount adalah metode yang dapat kita akses dan di dalamnya ketika apa pun yang ditulis di sini akan dijalankan setiap kali komponen dipasang (mounts). Mounting adalah saat pertama kali komponen ditempatkan ke DOM, jadi reaksi pertama kali akan merender komponen ke halaman yang sedang dipasang. Ini hanya terjadi sekali sepanjang life cycle komponen.
3. saat komponen ditempatkan ke dalam DOM adalah saat ingin membuat request API untuk sesuatu seperti get Users karena saat itulah kita ingin mendapatkan informasi sehingga dapat menampilkannya sesegera mungkin.
4. data yang diturunkan dari komponen induk ke komponen anak.
   Tujuan utama dari props di React adalah untuk menyediakan fungsionalitas komponen berikut: 1. Berikan data khusus ke suatu komponen. 2. Memicu perubahan state. 3. Gunakan this.props.namaProps di dalam metode render() komponen.
5. Components dimuat ulang berdasarkan 2 kondisi. 1. ketika setState dipanggil 2. ketika props di update

## Shallow merge

1. Artinya, jika suatu objek memiliki properti yang mereferensikan ke objek lain, properti objek asli dan hasil objek target akan mereferensikan objek yang sama.
2. Pada intinya, properti dari objek pertama ditimpa dengan nilai properti yang sama dari objek kedua.
