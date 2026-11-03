# Sistem Pengurusan Kejohanan Sukan — SK Maludam

Aplikasi berdiri sendiri (standalone) untuk **Sistem Pengurusan Kejohanan Sukan Tahunan**, dihoskan di GitHub Pages.
Sistem sebenar berjalan di Google Apps Script; halaman ini memaparkannya dengan logo sendiri, menyembunyikan
pautan Apps Script yang panjang, dan boleh dipasang di skrin utama telefon/komputer.

## Pemasangan (sekali sahaja)

1. **Apps Script** — Deploy › Manage deployments › pastikan *Who has access* = **Anyone**. Salin **Web app URL** (`.../exec`).
2. **GitHub** — cipta repositori baharu (cth `kejohanan-sukan`), *Public*.
3. Klik **Add file › Upload files**, seret **semua** fail dan folder `icons` ke dalamnya, kemudian **Commit changes**.
4. Buka `config.js` › ✏️ Edit › tampal Web app URL pada `APP_URL` › **Commit changes**.
5. **Settings › Pages** › *Source*: **Deploy from a branch** › Branch: **main** / **(root)** › **Save**.
6. Tunggu 1–2 minit. Pautan aplikasi: `https://NAMA-PENGGUNA.github.io/kejohanan-sukan/`

## Pasang di telefon / komputer

- **Android (Chrome):** buka pautan › menu ⋮ › **Tambah ke skrin utama / Install app**.
- **iPhone (Safari):** butang Kongsi › **Add to Home Screen**.
- **Komputer (Chrome/Edge):** ikon ⊕ *Install* di bar alamat.

## Bila sistem dikemas kini

Kemas kini Apps Script seperti biasa (Deploy › Manage deployments › ✏️ › New version). **Web app URL kekal sama**,
jadi fail GitHub tidak perlu diubah. Jika anda membuat *New deployment* (URL baharu), kemas kini `config.js` sahaja.

## Fail

| Fail | Fungsi |
|---|---|
| `index.html` | Halaman aplikasi (splash logo, iframe sistem, butang Back tidak menutup aplikasi, amaran luar talian) |
| `config.js` | **Satu-satunya fail yang perlu diubah** — Web app URL |
| `manifest.webmanifest` | Nama, warna dan ikon aplikasi untuk pemasangan |
| `sw.js` | Service worker (pemasangan & muat pantas) |
| `icons/` | Ikon aplikasi daripada logo sistem |
