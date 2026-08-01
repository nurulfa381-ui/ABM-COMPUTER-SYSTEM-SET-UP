# SYSTEM-COMPUTER-SET-UP-C01

ABM interaktif untuk unit **IT-020-3:2013-C01 COMPUTER SYSTEM SET-UP**.

## Status Sambungan

- Tapak asas C01 dibina sebagai static website.
- C05 tidak disentuh.
- Login pelajar wajib sebelum dashboard.
- Nama penuh dan ID pelajar divalidasi.
- Dashboard C01 memaparkan kemajuan, KT lulus, purata dan tahap.
- KP01 hingga KP15 disediakan.
- Kuiz KT menggunakan syarat lulus 60%.
- KP seterusnya hanya terbuka selepas KT semasa lulus.
- Sokongan bahasa BM/EN.
- Audio bacaan menggunakan `speechSynthesis` browser.
- Simulasi asas perkakasan disediakan untuk topik komponen dan pemasangan.

## Fail

- `index.html`
- `style.css`
- `app.js`

## Cara Uji

Buka `index.html` dalam browser, atau jalankan server lokal:

```bash
python3 -m http.server 8080
```

Kemudian buka:

```text
http://localhost:8080
```
