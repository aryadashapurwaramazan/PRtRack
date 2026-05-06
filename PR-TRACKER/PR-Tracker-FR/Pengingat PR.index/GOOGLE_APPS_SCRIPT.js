/**
 * ============================================================
 * PR TRACKER - Google Apps Script Backend
 * ============================================================
 * CARA DEPLOY:
 * 1. Buka Google Spreadsheet kamu
 * 2. Klik menu Extensions > Apps Script
 * 3. Hapus kode yang ada, paste seluruh kode ini
 * 4. Klik Deploy > New Deployment
 * 5. Pilih Type: Web App
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Klik Deploy, copy URL yang muncul
 * 9. Paste URL tersebut ke pr-tracker-sheets.html di bagian APPS_SCRIPT_URL
 * ============================================================
 */

const SHEET_NAME = 'PR Data'; // Nama sheet/tab di Spreadsheet kamu

// Header kolom yang digunakan
const HEADERS = [
  'Nama Siswa',
  'Kelas',
  'Judul PR',
  'Mata Pelajaran',
  'Tanggal Diberikan',
  'Deadline',
  'Status',
  'Nilai',
  'Catatan'
];

// ─── GET: Ambil semua data ───────────────────────────────────
function doGet(e) {
  try {
    const sheet = getOrCreateSheet();
    const data = getAllData(sheet);
    return jsonResponse({ success: true, data: data });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

// ─── POST: Tambah / Edit / Hapus data ───────────────────────
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const action = body.action;
    const sheet = getOrCreateSheet();

    if (action === 'add') {
      const newRow = addRow(sheet, body.data);
      return jsonResponse({ success: true, message: 'PR berhasil ditambahkan', row: newRow });
    }

    if (action === 'edit') {
      editRow(sheet, body.rowIndex, body.data);
      return jsonResponse({ success: true, message: 'PR berhasil diupdate' });
    }

    if (action === 'delete') {
      deleteRow(sheet, body.rowIndex);
      return jsonResponse({ success: true, message: 'PR berhasil dihapus' });
    }

    return jsonResponse({ success: false, error: 'Action tidak dikenal: ' + action });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

// ─── Helper: Ambil atau buat sheet ──────────────────────────
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Tulis header
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setBackground('#575761')
      .setFontColor('#E4FDE1')
      .setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

// ─── Helper: Ambil semua data sebagai array of objects ──────
function getAllData(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  const range = sheet.getRange(2, 1, lastRow - 1, HEADERS.length);
  const values = range.getValues();

  return values.map((row, index) => ({
    rowIndex: index + 2, // baris di sheet (1-indexed, baris 1 = header)
    nama: row[0] || '',
    kelas: row[1] || '',
    judul: row[2] || '',
    mapel: row[3] || '',
    diberikan: formatDateForJS(row[4]),
    deadline: formatDateForJS(row[5]),
    status: row[6] || 'Belum Dikumpulkan',
    nilai: row[7] !== '' ? Number(row[7]) : null,
    catatan: row[8] || ''
  })).filter(r => r.nama !== ''); // filter baris kosong
}

// ─── Helper: Tambah baris baru ───────────────────────────────
function addRow(sheet, data) {
  const newRow = [
    data.nama || '',
    data.kelas || '',
    data.judul || '',
    data.mapel || '',
    data.diberikan || '',
    data.deadline || '',
    data.status || 'Belum Dikumpulkan',
    data.nilai !== null && data.nilai !== undefined ? data.nilai : '',
    data.catatan || ''
  ];
  sheet.appendRow(newRow);
  return sheet.getLastRow();
}

// ─── Helper: Edit baris ──────────────────────────────────────
function editRow(sheet, rowIndex, data) {
  const updatedRow = [
    data.nama || '',
    data.kelas || '',
    data.judul || '',
    data.mapel || '',
    data.diberikan || '',
    data.deadline || '',
    data.status || 'Belum Dikumpulkan',
    data.nilai !== null && data.nilai !== undefined ? data.nilai : '',
    data.catatan || ''
  ];
  sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([updatedRow]);
}

// ─── Helper: Hapus baris ─────────────────────────────────────
function deleteRow(sheet, rowIndex) {
  sheet.deleteRow(rowIndex);
}

// ─── Helper: Format tanggal dari Sheets ke format YYYY-MM-DD ─
function formatDateForJS(value) {
  if (!value) return '';
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, '0');
    const d = String(value.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
  return String(value);
}

// ─── Helper: Return JSON response dengan CORS headers ────────
function jsonResponse(data) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
