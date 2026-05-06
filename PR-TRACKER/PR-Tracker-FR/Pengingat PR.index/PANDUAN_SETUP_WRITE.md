# 📋 Panduan Setup: Guru Bisa Edit Jadwal PR di Google Sheets

## Gambaran Umum

Web PR Tracker sudah terhubung ke Spreadsheet:
👉 https://docs.google.com/spreadsheets/d/1C1rpYrXtPicUncJs4UwKDJJP-atyMQMbLi1wJzOJGkQ/edit

Untuk guru bisa **tambah / edit / hapus** PR langsung dari web, perlu deploy satu Google Apps Script sebagai backend API.

---

## Langkah 1 — Siapkan Sheet di Spreadsheet

1. Buka Spreadsheet di atas
2. Pastikan ada tab/sheet bernama **`PR Data`** (persis, case-sensitive)
3. Jika belum ada, buat sheet baru dengan nama itu — Apps Script akan otomatis membuat header kolom

---

## Langkah 2 — Deploy Google Apps Script

1. Di Spreadsheet, klik menu **Extensions > Apps Script**
2. Hapus semua kode yang ada di editor
3. Buka file `GOOGLE_APPS_SCRIPT.js` di folder ini, copy semua isinya
4. Paste ke editor Apps Script
5. Klik **Save** (ikon disket atau Ctrl+S)
6. Klik **Deploy > New Deployment**
7. Klik ikon ⚙️ di sebelah "Select type", pilih **Web App**
8. Isi pengaturan:
   - **Description**: PR Tracker API
   - **Execute as**: Me
   - **Who has access**: Anyone
9. Klik **Deploy**
10. Klik **Authorize access** jika diminta, ikuti langkah-langkahnya
11. Copy URL yang muncul (bentuknya: `https://script.google.com/macros/s/AKfycb.../exec`)

---

## Langkah 3 — Sambungkan URL ke Web

### Cara A: Lewat tombol Setup di web (Direkomendasikan)
1. Buka `pr-tracker-sheets.html` di browser
2. Login sebagai Guru
3. Klik tombol **⚙️ Setup** di pojok kanan atas
4. Paste URL Apps Script yang sudah di-copy
5. Klik **Simpan URL**
6. Selesai! URL disimpan di browser (localStorage)

### Cara B: Edit langsung di kode HTML
1. Buka `pr-tracker-sheets.html`
2. Cari baris: `let APPS_SCRIPT_URL = '';`
3. Ganti menjadi: `let APPS_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXX/exec';`

---

## Langkah 4 — Publish Spreadsheet untuk Dibaca (Opsional tapi Direkomendasikan)

Agar data bisa dibaca tanpa Apps Script (fallback):

1. Di Spreadsheet, klik **File > Share > Publish to web**
2. Pilih sheet **PR Data**
3. Format: **Comma-separated values (.csv)**
4. Klik **Publish**

---

## Fitur yang Tersedia Setelah Setup

| Fitur | Guru | Murid |
|-------|------|-------|
| Lihat semua PR | ✅ | ✅ (kelas sendiri) |
| Tambah PR baru | ✅ | ❌ |
| Edit PR | ✅ | ❌ |
| Hapus PR | ✅ | ❌ |
| Kumpulkan PR | ❌ | ✅ |
| Auto-refresh 30 detik | ✅ | ✅ |

---

## Troubleshooting

**❌ "Apps Script URL belum dikonfigurasi"**
→ Ikuti Langkah 2 dan 3 di atas

**❌ "Gagal memuat data"**
→ Pastikan Spreadsheet sudah di-publish ke web (Langkah 4)

**❌ "Gagal menyimpan" saat edit/tambah**
→ Pastikan Apps Script di-deploy dengan akses "Anyone"
→ Coba deploy ulang dengan "New Deployment" (bukan update)

**❌ Error CORS**
→ Ini normal untuk Apps Script. Pastikan URL diakhiri `/exec` bukan `/dev`
