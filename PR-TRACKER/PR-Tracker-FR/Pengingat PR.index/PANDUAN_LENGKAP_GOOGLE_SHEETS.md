# 📊 Panduan Lengkap: Koneksi ke Google Sheets

## 🎯 Apa yang Akan Dicapai?

Setelah setup ini, guru bisa:
- ✅ Edit data PR langsung di Google Sheets
- ✅ Data otomatis muncul di web (real-time)
- ✅ Kolaborasi dengan guru lain
- ✅ Akses dari HP/laptop/tablet
- ✅ Backup otomatis oleh Google

---

## 📋 Langkah 1: Buat Google Sheets

### 1.1 Buka Google Sheets
1. Buka browser
2. Ketik: `sheets.google.com`
3. Login dengan akun Google Anda
4. Klik tombol **"+ Blank"** (pojok kiri atas)

### 1.2 Beri Nama Spreadsheet
1. Klik "Untitled spreadsheet" di pojok kiri atas
2. Ketik nama: **"PR Tracker Database"**
3. Tekan Enter

### 1.3 Isi Header (Baris Pertama)
Copy paste baris ini ke cell A1:

```
Nama Siswa	Kelas	Judul PR	Mata Pelajaran	Tanggal Diberikan	Deadline	Status	Nilai	Catatan
```

**ATAU** ketik manual:
- A1: `Nama Siswa`
- B1: `Kelas`
- C1: `Judul PR`
- D1: `Mata Pelajaran`
- E1: `Tanggal Diberikan`
- F1: `Deadline`
- G1: `Status`
- H1: `Nilai`
- I1: `Catatan`

### 1.4 Format Header
1. Pilih baris 1 (klik angka "1" di kiri)
2. Klik **Bold** (Ctrl+B)
3. Klik **Background color** → Pilih warna hijau muda
4. Klik **Text color** → Pilih hitam

### 1.5 Isi Data Contoh
Copy data dari file `TEMPLATE_GOOGLE_SHEETS.txt` dan paste mulai dari baris 2.

---

## 📋 Langkah 2: Publish Google Sheets

### 2.1 Buka Menu Publish
1. Klik menu **File** (pojok kiri atas)
2. Pilih **Share**
3. Pilih **Publish to web**

### 2.2 Setting Publish
1. **Tab pertama**: Pilih **"Entire Document"**
2. **Tab kedua**: Pilih format **"Comma-separated values (.csv)"**
3. Centang **"Automatically republish when changes are made"**
4. Klik tombol **"Publish"**
5. Klik **"OK"** pada konfirmasi

### 2.3 Copy Published URL
Setelah publish, akan muncul URL seperti ini:
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vQ.../pub?output=csv
```
**Simpan URL ini** (tidak akan dipakai, tapi sebagai backup)

---

## 📋 Langkah 3: Dapatkan Sheet ID

### 3.1 Lihat URL Google Sheets
Di address bar browser, Anda akan melihat URL seperti:
```
https://docs.google.com/spreadsheets/d/1abc123XYZ456def789/edit#gid=0
```

### 3.2 Copy Sheet ID
Sheet ID adalah bagian setelah `/d/` dan sebelum `/edit`:
```
1abc123XYZ456def789
```

**Contoh:**
- URL: `https://docs.google.com/spreadsheets/d/1abc123XYZ456/edit`
- Sheet ID: `1abc123XYZ456`

**COPY Sheet ID ini!** Anda akan membutuhkannya di langkah berikutnya.

---

## 📋 Langkah 4: Update File HTML

### 4.1 Buka File HTML
1. Klik kanan file `pr-tracker-sheets.html`
2. Pilih **"Open with"** → **"Notepad"** atau **"VS Code"**

### 4.2 Cari Baris Konfigurasi
Tekan **Ctrl+F** dan cari:
```javascript
const SHEET_ID = 'GANTI_DENGAN_SHEET_ID_ANDA';
```

### 4.3 Ganti dengan Sheet ID Anda
Ganti menjadi (contoh):
```javascript
const SHEET_ID = '1abc123XYZ456def789';
```

**PENTING:** Jangan hapus tanda petik `'...'`

### 4.4 Update Link "Edit di Sheets"
Cari baris:
```html
href="https://docs.google.com/spreadsheets/d/GANTI_DENGAN_SHEET_ID_ANDA/edit"
```

Ganti menjadi:
```html
href="https://docs.google.com/spreadsheets/d/1abc123XYZ456def789/edit"
```

### 4.5 Save File
1. Tekan **Ctrl+S** untuk save
2. Tutup editor

---

## 📋 Langkah 5: Test Koneksi

### 5.1 Buka File HTML
1. Double-click file `pr-tracker-sheets.html`
2. Browser akan terbuka

### 5.2 Login
1. Pilih role **"Guru"** atau **"Murid"**
2. Masukkan nama
3. Klik **"Masuk"**

### 5.3 Cek Data
- Jika berhasil: Akan muncul toast **"✅ Berhasil memuat X data dari Google Sheets"**
- Jika gagal: Akan muncul pesan error

### 5.4 Test Refresh
1. Klik tombol **"🔄 Refresh"** di pojok kanan atas
2. Data akan di-reload dari Google Sheets

### 5.5 Test Edit di Sheets
1. Klik tombol **"📊 Edit di Sheets"**
2. Google Sheets akan terbuka di tab baru
3. Edit data (misalnya ubah nama siswa)
4. Kembali ke tab web
5. Klik **"🔄 Refresh"**
6. Data akan update!

---

## 🔧 Troubleshooting

### ❌ Error: "Gagal memuat data dari Google Sheets"

**Penyebab 1:** Sheet belum di-publish
- **Solusi:** Ulangi Langkah 2 (Publish to web)

**Penyebab 2:** Sheet ID salah
- **Solusi:** Cek kembali Sheet ID, pastikan tidak ada spasi atau karakter tambahan

**Penyebab 3:** Sheet name salah
- **Solusi:** Jika nama sheet bukan "Sheet1", update di HTML:
  ```javascript
  const SHEET_NAME = 'NamaSheetAnda';
  ```

### ❌ Data tidak update setelah edit di Sheets

**Solusi:**
1. Tunggu 5-10 detik (Google butuh waktu untuk publish)
2. Klik tombol **"🔄 Refresh"**
3. Jika masih tidak update, cek apakah "Automatically republish" sudah dicentang

### ❌ Karakter Indonesia jadi aneh (é, á, dll)

**Solusi:**
1. Di Google Sheets: File → Download → CSV
2. Buka di Notepad
3. File → Save As → Encoding: **UTF-8**
4. Upload ulang ke Google Sheets

### ❌ Tanggal tidak terbaca

**Solusi:**
- Pastikan format tanggal: **YYYY-MM-DD**
- Contoh: `2026-04-15` bukan `15/04/2026`

---

## ⚙️ Konfigurasi Lanjutan

### Ubah Interval Auto-Refresh

Default: 30 detik. Untuk mengubah, edit di HTML:

```javascript
const AUTO_REFRESH_INTERVAL = 60000; // 60 detik (60000 ms)
```

Rekomendasi:
- **30000** (30 detik) - Untuk kelas kecil
- **60000** (60 detik) - Untuk kelas besar
- **120000** (2 menit) - Untuk menghemat bandwidth

### Ubah Nama Sheet

Jika nama sheet bukan "Sheet1":

```javascript
const SHEET_NAME = 'Data PR'; // Ganti dengan nama sheet Anda
```

---

## 🎨 Tips & Best Practices

### ✅ DO (Lakukan)
- Backup Google Sheets secara berkala
- Gunakan format tanggal konsisten (YYYY-MM-DD)
- Beri akses edit hanya ke guru yang dipercaya
- Test koneksi setelah setup
- Gunakan data validation di Google Sheets untuk kolom Status

### ❌ DON'T (Jangan)
- Jangan ubah nama kolom di baris pertama
- Jangan hapus baris header
- Jangan gunakan format tanggal yang berbeda-beda
- Jangan share Sheet ID ke publik
- Jangan edit langsung di web (edit di Google Sheets)

---

## 📱 Akses dari HP

### Untuk Guru (Edit Data)
1. Install **Google Sheets app** di HP
2. Buka spreadsheet "PR Tracker Database"
3. Edit data seperti biasa
4. Data otomatis sinkron ke web

### Untuk Murid (Lihat Data)
1. Buka browser di HP
2. Buka file `pr-tracker-sheets.html`
3. Login sebagai Murid
4. Lihat PR yang harus dikerjakan

---

## 🔒 Keamanan & Privacy

### Siapa yang Bisa Akses?

**Google Sheets:**
- Hanya yang diberi akses oleh owner
- Bisa diatur: View only, Comment, atau Edit

**Web (pr-tracker-sheets.html):**
- Siapa saja yang punya file HTML
- Data bersifat **read-only** (tidak bisa edit dari web)
- Tidak ada login/password (untuk kemudahan)

### Cara Membatasi Akses

**Opsi 1:** Share Google Sheets hanya ke email tertentu
1. Di Google Sheets: klik **Share**
2. Masukkan email guru yang boleh edit
3. Pilih permission: **Editor**

**Opsi 2:** Buat Google Sheets private
1. Jangan publish to web
2. Gunakan Google Sheets API dengan authentication
3. (Lebih kompleks, butuh setup tambahan)

---

## 📊 Contoh Workflow

### Skenario: Guru Menambah PR Baru

1. **Guru** buka Google Sheets di HP/laptop
2. **Guru** tambah baris baru dengan data PR
3. **Guru** isi: Nama, Kelas, Judul PR, dll
4. **Guru** save (otomatis)
5. **Murid** buka web di HP
6. **Murid** klik "🔄 Refresh" (atau tunggu 30 detik)
7. **Murid** lihat PR baru muncul
8. **Murid** klik "📤 Kumpulkan" setelah selesai
9. **Guru** update status di Google Sheets menjadi "Sudah Dikumpulkan"
10. **Murid** refresh dan lihat status berubah

---

## 🎉 Selesai!

Sistem Anda sekarang terkoneksi dengan Google Sheets!

**Next Steps:**
1. Share file `pr-tracker-sheets.html` ke murid
2. Share Google Sheets ke guru lain (jika ada)
3. Mulai gunakan sistem

**Butuh bantuan?**
- Baca file `SETUP_GOOGLE_SHEETS.md`
- Lihat `TEMPLATE_GOOGLE_SHEETS.txt` untuk contoh data
- Hubungi admin IT sekolah

---

**Happy Teaching! 🎓**
