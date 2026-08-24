# DailyBoard - Personal Produktif
**DailyBoard** merupakan sebuah website *dashboard* yang dirancang untuk mengatur produktifitas atau kegiatan sehari-hari. Proyek ini dibangun dengan menggunakan **Vanilla JavaScript dengan Modular** yang memisahkan logika di setiap section yang berbeda untuk meringankan pencarian bug atau kekurangan yang terjadi.

## 1. Fitur

* 📋 TO DO LIST
  * Fitur pencarian tugas menggunakan teknik **Debounce** supaya device tidak mengalami lag saat tugas di render.
  * Fitur tambah dan hapus tugas.
  * Fitur filter status tugas (*Semua*, *Sudah*, *Belum*).
  * Fitur edit nama tugas via *double click* dengan ketentuan tertentu.
  * Fitur Drag & Drop untuk mengatur ururtan dari daftar tugas.
  * Fitur selesai dengan via ***click* pada text tugas** untuk menandai tugas telah selesai. Dan *click* kembali jika ingin menandainya belum selesai.
* 📝 CATATAN
  * Fitur tambah catatan.
  * Fitur hapus catatan.
  * Fitur edit isi catatan via *double click* dengna ketentuan.
* 💬 KUTIPAN
  * Mengambil kutipan motivasi acak secara otomatis via **motivaional-spark-api**.
  * Tombol *Refresh* untuk mengambil/mengganti kutipan.
* 🌤️ CUACA
  * Menggunakan **OpenWatheMap API** untuk mengambil data cuaca *real time* di seluruh dunia.
  * Mengambil data *Kota*, *suhu*, *ikon cuaca*, *deskripsi cuaca*.
* 🌙 DARK MODE
  * Mengalihkan mode gelap/terang dengan *click* ikon bulan/matahari di pojok kanan atas.
  * Menyimpan pengaturan tema ke localStorage untuk menyimpan preferensi tema pada setiap kali kunjungan.
* 💾 DATA STORAGE
  * Menyimpan semua data tugas dan catatan ke **Storage** dan akan di muat ulang saat halaman *dikunjungi kembali* atau saat *direfresh*.
* 📱 Responsif Desain
  * Menyediakan tampilan yang fleksibel untuk dibuka dengan device baik **Desktop** maupun **Mobile**.

## 2. Cara Pakai
* 🌙 DARK MODE
  * Klik logo **Bulan** atau **Matahari** di pojok kanan atas untuk mengganti preferensi tema.
  * Tema akan tersimpan otomatis dan saat halaman *direfresh* atau *dikumjungi* kembali. Tema web akan tetap seperti apa yang sudah dipilih.
* 📋 Cara Mengelola To Do List
  * **Tambah tugas**: Ketik nama tugas pada kolom *Masukkan tugas...* dan *klik* *Tambah* untuk menambahkan tugas.
  * **Tandai Selesai**: *Klik* pada nama tugas untuk mencoret/menandai
  * **Edit Tugas**: *double click* pada kotak list tugas lalu isi nama baru lalu *tekan* **Enter**.
  * **Hapus Tugas**: List tugas yang sudah tidak terpakai bisa dihapus dengan cara *Klik* tombol (x) yang ada di kanan nama tugas.
  * **Cari Tugas**: Jika memiliki list tugas yang sangat banyak dan ingin melakukan sesuatu dengan list terserbut. *Klik* kolom *Cari tugas...* dan masukkan **kata kunci** berdasarkan nama yang nanti akan menghilangkan list yang namanya tidak sama dengan **kata kunci** nya.
  * **Filter Tugas**: *Klik* tombol **Status** yang ada pada sebelah kanan tombol tambah dan pilih opsi (*Semua*, *Sudah*, *Belum*) yang nanti akan memuat tugas sesuai dengan kondisi dari opsinya.
  * **Drag & Drop**: Tahan pada list tugas yang ingin dipindahkan lalu seret ke tempat list itu ingin dipindahkan lalu lepas.
  * Dan semua aktivitas di atas akan tersimpan ke dalam **localStorage** dan akan *di muat* ulang saat halaman *direfresh* atau *dikunjungi kembali*.
  > Yang Drag & Drop, sekarang masih hanya berfungsi pada desktop dan sedang dalam tahap penegerjaan untuk membuatnya bisa di Mobile.

* 📝 Cara Mengelola Catatan
  * **Tambah Catatan**: Buat catatan apapun pada kolom *Masukkan catatan...* lalu *klik* Tambah untuk mengambahkan catatan.
  * **Edit Catatan**: *double click* pada kotak list catatan lalu isi nama baru lalu *tekan* **Enter**.
  * **Hapus Catatan**: List catatan yang sudah tidak terpakai bisa dihapus dengan cara *Klik* tombol **Hapus** yang ada di kanan kolom catatan.
  * Dan semua aktivitas di atas akan tersimpan ke dalam **localStorage** dan akan *di muat* ulang saat halaman *direfresh* atau *dikunjungi kembali*.

* 💬 Kutipan
  * Kutipan akan otomoatis muncul saat halaman *dikunjungi*.
  * Klik tombol **Refresh** (↻) yang terletak di sudut kanan atas untuk mengubah kutipan menjadi kutipan yang lain.

* 🌤️ Cuaca
  * Masukkan nama *kota* pada kolom *Masukkan Nama Kota* lalu klik tombol **Sync**.
  * Akan muncul data *nama kota*, *suhu*, *ikon cuaca*, dan *deskripsi cuaca*.

## 3. Struktur File
```text
dailyBoardV2
├── 📁 aset
│   ├── 🖼️ Moon.png
│   └── 🖼️ Sun.png
├── 📄 api.js
├── 📄 catatan.js
├── 📄 index.html
├── 📄 READMI.md
├── 📄 script.js
├── 📄 storage.js
├── 📄 style.css
└── 📄 tugas.js
```

## 4. Lisensi

Hak Cipta © 2026 zgene2512-stack.

Kode sumber di repository ini bisa dijadikan bahan pembelajaran namun tifdak boleh disalin, dimodifikasi atau didistribusikan ulang tanpa izin hak cipta.
