# 📌 DailyBoard

> **DailyBoard** adalah aplikasi dasbor produktivitas harian berbasis web yang ringan, interaktif, dan responsif. Aplikasi ini dirancang untuk membantu pengguna mengelola tugas harian, mencatat ide instan, memantau cuaca secara real-time, serta mendapatkan motivasi harian dalam satu antarmuka yang terintegrasi.

---

## ✨ Fitur Utama

- 📝 **To-Do List Interaktif:**
  - Tambah, edit (double click), dan hapus tugas harian.
  - Filter tugas berdasarkan status (*Semua*, *Sudah*, *Belum*).
  - Pencarian tugas secara real-time dengan teknik **Debounce** untuk menghemat resource rendering.
  - Urutkan ulang daftar tugas dengan fitur **Drag & Drop**.
- 📓 **Catatan Cepat (Notes App):**
  - Buat catatan ringkas dengan cepat.
  - Dukungan perbaikan/edit isi catatan via interaksi double click.
- ⛅ **Widget Cuaca Real-Time:**
  - Integrasi dengan **OpenWeatherMap API**.
  - Pencarian cuaca berdasarkan nama kota (Default: *Kyoto*).
- 💬 **Kutipan Harian (Motivational Quotes):**
  - Integrasi dengan **Motivational Spark API** untuk menampilkan motivasi acak.
  - Fitur *Refresh* kutipan mandiri.
- 🌓 **Mode Gelap / Terang (Dark/Light Theme):**
  - Pengalihan tema dengan tampilan visual yang nyaman di mata.
  - Pilihan tema tersimpan secara otomatis menggunakan LocalStorage.
- 💾 **Persistensi Data Lokal:**
  - Semua daftar tugas dan catatan tersimpan secara aman di browser (**LocalStorage**), sehingga data tidak hilang saat halaman diperbarui (refresh).

---

## 🛠️ Tech Stack & Modul

Aplikasi ini dibangun murni menggunakan **Vanilla Web Technologies** tanpa bantuan framework eksternal, memanfaatkan arsitektur **ES6 Modules** untuk menjaga modularitas kode:

- **Frontend:** HTML5, CSS3, JavaScript (ES6+ Native Modules)
- **APIs:** 
  - [OpenWeatherMap API](https://openweathermap.org/api) (Informasi Cuaca)
  - [Motivational Spark API](https://motivational-spark-api.vercel.app/) (Kutipan Motivasi)
- **Storage:** Browser LocalStorage API

---

## 📁 Struktur Direktori Proyek

```text
DailyBoard/
│
├── aset/                  # Asset gambar (Ikon tema Sun/Moon, dll)
├── api.js                 # Module integrasi API (Cuaca & Kutipan)
├── catatan.js             # Module logika aplikasi Catatan
├── index.html             # Entry point / Tampilan utama DOM
├── README.md              # Dokumentasi proyek
├── script.js              # Script utama (Inisialisasi aplikasi & Layout)
├── storage.js             # Module pembantu LocalStorage (Getter & Setter)
├── style.css              # Tata letak & styling (Light/Dark Mode)
└── tugas.js               # Module logika To-Do List & Drag & Drop

## 👤 Penulis
Dibuat dengan semangat oleh Edgar Dhamas Putra.

© Edgar Dhamas Putra. All rights reserved.