# 📘 PR Tracker - Panduan untuk Guru

## 🎯 Cara Menggunakan Sistem

### 1️⃣ Membuka Aplikasi
- Double-click file `pr-tracker.html`
- Pilih role **"👨‍🏫 Guru"**
- Masukkan nama Anda
- Klik **"Masuk →"**

---

## 📥 CARA IMPORT DATA DARI SPREADSHEET

### Metode 1: Import CSV (RECOMMENDED)

#### Langkah 1: Download Template
1. Login sebagai Guru
2. Klik tombol **"📄 Download Template"** di pojok kanan atas
3. File `template_pr.csv` akan terdownload

#### Langkah 2: Isi Data di Excel/Google Sheets

**Di Microsoft Excel:**
1. Buka Excel
2. File → Open → Pilih **"All Files (*.*)"**
3. Pilih file `template_pr.csv`
4. Isi data PR sesuai kolom yang tersedia

**Di Google Sheets:**
1. Buka Google Sheets
2. File → Import → Upload
3. Pilih file `template_pr.csv`
4. Isi data PR sesuai kolom yang tersedia

#### Langkah 3: Format Data

**Kolom WAJIB diisi:**
| Kolom | Format | Contoh |
|-------|--------|--------|
| Nama Siswa | Teks | Ahmad Fauzi |
| Kelas | X-A / X-B / X-C | X-A |
| Judul PR | Teks | Membuat Halaman HTML |
| Mata Pelajaran | HTML / CSS / JavaScript / Lainnya | HTML |
| Tanggal Diberikan | YYYY-MM-DD | 2026-04-01 |
| Deadline | YYYY-MM-DD | 2026-04-08 |
| Status | Sudah Dikumpulkan / Belum Dikumpulkan / Terlambat | Belum Dikumpulkan |

**Kolom OPSIONAL:**
- **Nilai**: Angka 0-100 (kosongkan jika belum ada)
- **Catatan**: Teks bebas

#### Langkah 4: Save as CSV

**Di Excel:**
1. File → Save As
2. Pilih lokasi penyimpanan
3. **Save as type**: Pilih **"CSV UTF-8 (Comma delimited) (*.csv)"**
4. Klik Save

**Di Google Sheets:**
1. File → Download
2. Pilih **"Comma Separated Values (.csv)"**

#### Langkah 5: Import ke Web
1. Buka `pr-tracker.html` di browser
2. Login sebagai Guru
3. Klik tombol **"📥 Import CSV"**
4. Klik **"Choose File"** dan pilih file CSV yang sudah diisi
5. Preview data akan muncul
6. Klik **"✅ Import Data"**
7. Selesai! Data akan langsung muncul di sistem

---

### Metode 2: Input Manual

1. Login sebagai Guru
2. Klik tombol **"＋ Tambah PR"**
3. Isi form yang muncul:
   - Nama Siswa
   - Kelas
   - Judul PR
   - Mata Pelajaran
   - Status
   - Tanggal Diberikan
   - Deadline
   - Nilai (opsional)
   - Catatan (opsional)
4. Klik **"💾 Simpan"**

---

## ✏️ Mengedit Data PR

1. Buka menu **"📋 Daftar PR"**
2. Cari PR yang ingin diedit
3. Klik tombol **"✏️"** (Edit)
4. Ubah data yang diperlukan
5. Klik **"💾 Simpan"**

---

## 🗑️ Menghapus Data PR

1. Buka menu **"📋 Daftar PR"**
2. Cari PR yang ingin dihapus
3. Klik tombol **"🗑️"** (Hapus)
4. Konfirmasi penghapusan

---

## 📊 Fitur Dashboard

Dashboard menampilkan:
- **Total PR**: Jumlah semua PR yang ada
- **Sudah Dikumpulkan**: PR yang sudah diserahkan siswa
- **Belum Dikumpulkan**: PR yang belum diserahkan
- **Terlambat**: PR yang melewati deadline
- **Progress Bar**: Persentase pengumpulan keseluruhan
- **Daftar PR Terbaru**: 10 PR terakhir

---

## ⚠️ TIPS PENTING

### Format Tanggal
✅ **BENAR**: `2026-04-15` (YYYY-MM-DD)  
❌ **SALAH**: `15/04/2026`, `15-04-2026`, `04/15/2026`

### Format Status
✅ **BENAR**: 
- `Sudah Dikumpulkan`
- `Belum Dikumpulkan`
- `Terlambat`

❌ **SALAH**: 
- `sudah dikumpulkan` (huruf kecil)
- `Sudah` (tidak lengkap)
- `Done` (bahasa Inggris)

### Format Kelas
✅ **BENAR**: `X-A`, `X-B`, `X-C`  
❌ **SALAH**: `10A`, `XA`, `X A`

### Encoding File
- Selalu save CSV dengan **UTF-8 encoding**
- Ini penting agar karakter Indonesia tidak rusak

---

## 🔧 Troubleshooting

### ❓ Data tidak muncul setelah import?
**Solusi:**
1. Cek format CSV sudah benar
2. Pastikan tidak ada baris kosong di tengah data
3. Tekan F12 di browser, cek tab Console untuk error

### ❓ Tanggal tidak terbaca dengan benar?
**Solusi:**
- Gunakan format `YYYY-MM-DD`
- Contoh: `2026-04-15` bukan `15/04/2026`

### ❓ Karakter Indonesia jadi aneh (é, á, dll)?
**Solusi:**
- Save file dengan encoding **UTF-8**
- Di Excel: pilih "CSV UTF-8 (Comma delimited)"

### ❓ Import gagal terus?
**Solusi:**
1. Download ulang template dari web
2. Jangan ubah nama kolom di baris pertama
3. Pastikan semua kolom wajib terisi
4. Cek tidak ada karakter aneh (", ', dll) di data

### ❓ Data hilang setelah refresh browser?
**Catatan:**
- Data disimpan di browser (localStorage)
- Jika clear browser data, data akan hilang
- Untuk backup, export data secara berkala

---

## 📱 Akses dari HP/Tablet

Aplikasi ini responsive dan bisa diakses dari:
- 💻 Komputer/Laptop
- 📱 Smartphone
- 📲 Tablet

Cukup buka file `pr-tracker.html` di browser perangkat Anda.

---

## 🎨 Fitur Warna

Sistem menggunakan color palette:
- 🟢 **Hijau** (#8ACB88): Sudah dikumpulkan
- 🟡 **Kuning** (#FFBF46): Belum dikumpulkan
- 🔴 **Merah**: Terlambat / Urgent
- 🔵 **Teal** (#648381): Informasi
- ⚫ **Dark** (#575761): Header/Sidebar

---

## 📞 Bantuan

Jika mengalami kesulitan:
1. Baca file `PANDUAN_IMPORT.txt`
2. Cek template contoh di `template_pr.csv`
3. Hubungi admin IT sekolah

---

**Selamat menggunakan PR Tracker! 🎉**
