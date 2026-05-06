# 📊 Setup Google Sheets Integration

## 🎯 Langkah-langkah Setup

### 1️⃣ Buat Google Sheets

1. Buka [Google Sheets](https://sheets.google.com)
2. Klik **"+ Blank"** untuk membuat spreadsheet baru
3. Beri nama: **"PR Tracker Database"**
4. Isi header di baris pertama:
   ```
   A1: Nama Siswa
   B1: Kelas
   C1: Judul PR
   D1: Mata Pelajaran
   E1: Tanggal Diberikan
   F1: Deadline
   G1: Status
   H1: Nilai
   I1: Catatan
   ```

### 2️⃣ Publish Google Sheets

1. Di Google Sheets, klik **File → Share → Publish to web**
2. Pilih **"Entire Document"**
3. Format: **"Comma-separated values (.csv)"**
4. Klik **"Publish"**
5. **Copy URL** yang muncul (simpan untuk langkah berikutnya)

### 3️⃣ Dapatkan Sheet ID

Dari URL Google Sheets Anda:
```
https://docs.google.com/spreadsheets/d/SHEET_ID_DISINI/edit
```

Copy bagian **SHEET_ID_DISINI**

Contoh:
```
URL: https://docs.google.com/spreadsheets/d/1abc123XYZ456/edit
Sheet ID: 1abc123XYZ456
```

### 4️⃣ Update File HTML

Buka `pr-tracker-sheets.html` dan cari baris:
```javascript
const SHEET_ID = 'GANTI_DENGAN_SHEET_ID_ANDA';
```

Ganti dengan Sheet ID Anda:
```javascript
const SHEET_ID = '1abc123XYZ456';
```

### 5️⃣ Selesai!

Buka `pr-tracker-sheets.html` di browser. Data dari Google Sheets akan otomatis muncul!

---

## 🔄 Cara Kerja

1. **Guru** mengisi data di Google Sheets
2. **Sistem** otomatis fetch data setiap kali halaman dibuka
3. **Murid** melihat data terbaru dari Google Sheets
4. **Auto-refresh** setiap 30 detik (bisa diatur)

---

## ✨ Keuntungan

✅ **Real-time** - Data selalu update  
✅ **Kolaboratif** - Banyak guru bisa edit bersamaan  
✅ **Backup otomatis** - Data tersimpan di Google  
✅ **Akses dimana saja** - Edit dari HP/laptop  
✅ **History** - Google Sheets punya version history  

---

## ⚠️ Catatan Penting

- Pastikan Google Sheets di-publish sebagai CSV
- Jangan ubah nama kolom di baris pertama
- Format tanggal: YYYY-MM-DD (2026-04-15)
- Status harus persis: "Sudah Dikumpulkan", "Belum Dikumpulkan", atau "Terlambat"

---

## 🔒 Keamanan

- Data bersifat **read-only** dari web
- Hanya yang punya akses Google Sheets yang bisa edit
- Tidak ada API key yang perlu disimpan
- Aman untuk digunakan

---

## 📱 Mobile Friendly

Guru bisa edit Google Sheets dari:
- 💻 Komputer
- 📱 HP (Google Sheets app)
- 📲 Tablet

Data otomatis sinkron ke web!
