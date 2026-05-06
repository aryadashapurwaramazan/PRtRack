# 🎉 PR Tracker - Sistem Lengkap Siap Pakai!

## ✅ Status: SUDAH TERKONEKSI DENGAN GOOGLE SHEETS

---

## 📁 File yang Tersedia

### 🌟 File Utama (Pilih Salah Satu)

#### 1. **pr-tracker-sheets.html** ⭐ RECOMMENDED
- ✅ **SUDAH TERKONEKSI** dengan Google Sheets Anda
- Real-time sync dengan Google Sheets
- Auto-refresh setiap 30 detik
- Edit data dari HP/laptop via Google Sheets
- Backup otomatis oleh Google
- **BUKA FILE INI UNTUK MULAI!**

#### 2. **pr-tracker.html**
- Versi standalone (tidak perlu internet)
- Import CSV dari Excel/Google Sheets
- Data tersimpan di browser
- Cocok untuk offline mode

---

## 🚀 Quick Start (3 Langkah)

### Untuk Menggunakan Versi Google Sheets:

1. **Buka File**
   ```
   Double-click: pr-tracker-sheets.html
   ```

2. **Login**
   - Pilih role: Guru atau Murid
   - Masukkan nama (dan kelas jika murid)
   - Klik "Masuk"

3. **Selesai!**
   - Data dari Google Sheets akan otomatis muncul
   - Klik "📊 Edit di Sheets" untuk edit data
   - Klik "🔄 Refresh" untuk update manual

---

## 📊 Google Sheets Anda

**URL Published CSV:**
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vTsJB8EIo2-vj6d8PRK44yQIQp2JRdDaBpC_Kz6Aet7aTmJQyAP7Pf-JHysgUogiBczy3EczY8la0Hl/pub?output=csv
```

**Link Edit (klik tombol "📊 Edit di Sheets" di web):**
```
https://docs.google.com/spreadsheets/d/1vTsJB8EIo2-vj6d8PRK44yQIQp2JRdDaBpC_Kz6Aet7aTmJQyAP7Pf-JHysgUogiBczy3EczY8la0Hl/edit
```

---

## 📖 Panduan Lengkap

### Untuk Memulai:
- **SUDAH_TERKONEKSI.txt** - Panduan singkat (BACA INI DULU!)
- **QUICK_START_GOOGLE_SHEETS.txt** - Quick start guide

### Untuk Detail:
- **PANDUAN_LENGKAP_GOOGLE_SHEETS.md** - Panduan lengkap dengan troubleshooting
- **SETUP_GOOGLE_SHEETS.md** - Setup dari awal (jika ingin ganti sheets)

### Untuk Versi Standalone:
- **MULAI_DISINI.txt** - Panduan versi standalone
- **README_GURU.md** - Panduan lengkap untuk guru
- **PANDUAN_IMPORT.txt** - Cara import CSV

### Template & Format:
- **TEMPLATE_GOOGLE_SHEETS.txt** - Template untuk copy-paste ke Google Sheets
- **FORMAT_DATA.txt** - Format data yang benar
- **template_pr.csv** - Template CSV untuk import
- **template_pr_lengkap.csv** - Template dengan contoh data

### Perbandingan:
- **PILIH_VERSI_MANA.txt** - Perbandingan standalone vs Google Sheets

---

## 🎯 Cara Menggunakan

### Untuk Guru:

#### Edit Data di Google Sheets:
1. Buka web (pr-tracker-sheets.html)
2. Klik tombol **"📊 Edit di Sheets"**
3. Google Sheets akan terbuka
4. Edit data (tambah/ubah/hapus baris)
5. Kembali ke web
6. Klik **"🔄 Refresh"** atau tunggu 30 detik
7. Data akan update!

#### Format Data di Google Sheets:
| Kolom | Format | Contoh |
|-------|--------|--------|
| A: Nama Siswa | Teks | Ahmad Fauzi |
| B: Kelas | X-A/X-B/X-C | X-A |
| C: Judul PR | Teks | Membuat Halaman HTML |
| D: Mata Pelajaran | HTML/CSS/JavaScript/Lainnya | HTML |
| E: Tanggal Diberikan | YYYY-MM-DD | 2026-04-15 |
| F: Deadline | YYYY-MM-DD | 2026-04-22 |
| G: Status | Sudah Dikumpulkan/Belum Dikumpulkan/Terlambat | Belum Dikumpulkan |
| H: Nilai | 0-100 (boleh kosong) | 85 |
| I: Catatan | Teks bebas (boleh kosong) | Bagus |

### Untuk Murid:

1. Buka **pr-tracker-sheets.html**
2. Pilih role **"🎒 Murid"**
3. Masukkan nama & kelas
4. Lihat PR yang harus dikerjakan
5. Klik **"🔄 Refresh"** untuk update data

---

## ✨ Fitur Utama

### ✅ Real-time Sync
- Data di Google Sheets otomatis sinkron ke web
- Auto-refresh setiap 30 detik
- Manual refresh dengan tombol "🔄 Refresh"

### ✅ Kolaborasi
- Banyak guru bisa edit Google Sheets bersamaan
- Perubahan langsung terlihat di web

### ✅ Mobile Friendly
- Guru: Edit di Google Sheets app (HP/tablet)
- Murid: Lihat PR di browser HP

### ✅ Notifikasi Otomatis
- Notifikasi jika ada PR deadline hari ini
- Countdown waktu pengumpulan
- Badge status berwarna

### ✅ Dashboard Lengkap
- Statistik total PR
- Progress pengumpulan
- Filter & pencarian

---

## 🎨 Color Palette

- 🟢 **Hijau** (#8ACB88) - Sudah dikumpulkan
- 🟡 **Kuning** (#FFBF46) - Belum dikumpulkan
- 🔴 **Merah** - Terlambat/Urgent
- 🔵 **Teal** (#648381) - Informasi
- ⚫ **Dark** (#575761) - Header/Sidebar
- 🟩 **Mint** (#E4FDE1) - Background

---

## 🔧 Troubleshooting

### ❌ Data tidak muncul?
**Solusi:**
- Cek koneksi internet
- Klik tombol "🔄 Refresh"
- Refresh halaman browser (F5)

### ❌ Data tidak update setelah edit di Sheets?
**Solusi:**
- Tunggu 5-10 detik (Google butuh waktu untuk publish)
- Klik tombol "🔄 Refresh"
- Pastikan edit sudah di-save di Google Sheets

### ❌ Format tanggal salah?
**Solusi:**
- Gunakan format: **YYYY-MM-DD**
- Contoh: `2026-04-15` bukan `15/04/2026`

### ❌ Status tidak terbaca?
**Solusi:**
- Gunakan persis: `Sudah Dikumpulkan`, `Belum Dikumpulkan`, atau `Terlambat`
- Huruf besar/kecil harus sama

---

## 📱 Akses dari HP

### Guru (Edit Data):
1. Install **Google Sheets app**
2. Buka spreadsheet Anda
3. Edit data seperti biasa
4. Data otomatis sinkron ke web

### Murid (Lihat PR):
1. Buka browser di HP
2. Buka file **pr-tracker-sheets.html**
3. Login sebagai Murid
4. Lihat PR yang harus dikerjakan

---

## 💡 Tips & Best Practices

### ✅ DO (Lakukan):
- Backup Google Sheets secara berkala
- Gunakan format tanggal konsisten (YYYY-MM-DD)
- Beri akses edit hanya ke guru yang dipercaya
- Test koneksi setelah setup
- Bookmark file HTML untuk akses cepat

### ❌ DON'T (Jangan):
- Jangan ubah nama kolom di baris pertama Google Sheets
- Jangan hapus baris header
- Jangan gunakan format tanggal yang berbeda-beda
- Jangan share link Google Sheets ke publik
- Jangan edit data langsung di web (edit di Google Sheets)

---

## 🔒 Keamanan

### Data di Google Sheets:
- Hanya yang diberi akses yang bisa edit
- Bisa diatur: View only, Comment, atau Edit
- Version history tersedia (bisa undo)

### Data di Web:
- Bersifat **read-only** (tidak bisa edit dari web)
- Tidak ada login/password (untuk kemudahan)
- Data di-fetch langsung dari Google Sheets

---

## 📞 Bantuan

### File Panduan:
1. **SUDAH_TERKONEKSI.txt** - Panduan singkat ⭐ BACA INI DULU
2. **QUICK_START_GOOGLE_SHEETS.txt** - Quick start
3. **PANDUAN_LENGKAP_GOOGLE_SHEETS.md** - Panduan detail
4. **PILIH_VERSI_MANA.txt** - Perbandingan versi

### Kontak:
- Hubungi admin IT sekolah
- Baca troubleshooting di panduan lengkap

---

## 🎉 Selamat!

Sistem PR Tracker Anda sudah siap digunakan!

**Langkah selanjutnya:**
1. ✅ Buka **pr-tracker-sheets.html**
2. ✅ Test login sebagai Guru
3. ✅ Klik "📊 Edit di Sheets" untuk edit data
4. ✅ Share file HTML ke murid
5. ✅ Mulai gunakan sistem!

---

**Happy Teaching! 🎓**

*Dibuat dengan ❤️ menggunakan color palette: #E4FDE1 · #8ACB88 · #648381 · #575761 · #FFBF46*
