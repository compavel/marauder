# Design Brief — Website Marauder

| | |
| --- | --- |
| Dokumen | Design brief sebelum implementasi. Belum ada kode, belum ada Figma. |
| Versi | 1.0 |
| Tanggal | 10 November 2026 |
| Sumber | `PRD.md` v1.0 (10 bagian, 21 user story, 14 FR, 22 open question) |
| Peran penulis | Senior product designer |
| Aturan dokumen | Setiap keputusan visual harus bisa ditelusuri ke satu FR atau satu alasan tertulis. Angka kontras di bawah dihitung, bukan dikira-kira. |

**Cara membaca.** Bagian 1–3 menetapkan aturan. Bagian 4–9 menerjemahkannya ke layar. Bagian 10 mengunci aksesibilitas. Bagian 11 mencatat keputusan yang masih bisa diperdebatkan dan pertanyaan desain yang belum terjawab.

**Ketergantungan yang belum aman.** Brief ini bisa dikerjakan sampai tahap hi-fi, tetapi tiga hal masih memblokir finalisasi: katalog nyata (`OQ-03`), pemilik checkout (`OQ-04`), dan bahasa situs (`OQ-08`). Semua copy di bawah ditulis dalam bahasa Inggris karena itu asumsi kerja, bukan keputusan klien.

---

## 1. Design principles

Tiga aturan. Kalau sebuah layar melanggar salah satunya, layar itu salah, bukan aturannya yang perlu dikecualikan.

### P1 — Satu aksi utama per layar

Hanya satu elemen per layar yang boleh memakai tombol terisi penuh (`brand`). Sisanya: tautan teks, tombol bergaris, atau tanpa hiasan.

**Alasan.** Palet monokrom menghapus warna sebagai pembeda hierarki. Satu-satunya cara mempertahankan hierarki adalah kelangkaan: kalau semua tombol berwarna sama, tidak ada yang menonjol. Aturan ini memaksa desainer memilih, bukan menumpuk.

**Cara menguji.** Peer layar dari jarak satu meter atau blur 8px. Harus ada tepat satu bidang gelap yang menonjol. Kalau ada dua, salah satunya turun jadi tautan.

**Penerapan.** Landing: `Shop the collection` (nav, hero, penutup memakai label dan tujuan yang sama, jadi dihitung satu aksi). PDP: `Add to cart`. Contact: `Send message`. ToS: tidak ada tombol terisi — lihat catatan di bagian 6.4.

### P2 — Bukti sebelum bujukan

Setiap klaim yang meminta pembeli percaya harus punya bukti spesifik di dekatnya. Klaim tanpa bukti dihapus, bukan diperhalus.

**Alasan.** Dua persona di PRD punya keberatan yang sama dari arah berbeda: Alya takut salah beli, Rani tidak mau beli dari toko anonim. Keduanya tidak bisa dijawab dengan kata sifat. Jawabannya bahan, ukuran, cara perawatan, nama orang, kebijakan retur.

**Cara menguji.** Ambil semua kalimat persuasif di satu layar. Untuk tiap kalimat, cari fakta konkret dalam jarak satu layar gulir. Kalau tidak ada, kalimat itu keluar.

**Konsekuensi yang harus diterima.**

| Dilarang | Diganti dengan |
| --- | --- |
| Hitung mundur, "only 2 left", "12 people viewing" | Status stok apa adanya: `In stock`, `Sold out` |
| Bintang rating tanpa data | Tidak ada rating sama sekali |
| "AI-powered", "revolutionary", "seamless" | Fungsi konkret: model mencocokkan barang berdasarkan lima jawaban |
| "Premium quality" | "Stoneware, fired at 1,240°C, glaze matte" |
| Coret harga promo | Satu harga, tanpa pembanding palsu |
| Foto model tersenyum | Foto benda di meja, tangan, ruang rumah |

### P3 — Tua karena struktur, bukan karena dekorasi

Kesan old-fashioned datang dari susunan, bukan tempelan: nomor bagian, garis tipis, grid katalog, harga rata kanan dengan angka tabular, judul serif. Maksimal tiga perangkat dekoratif per halaman.

**Alasan.** "Old-fashioned" adalah permintaan yang paling mudah gagal. Satu tekstur sepia, satu font script, satu bingkai ornamen, dan brand langsung terasa murah — persis anti-goal PRD: situs harus terasa penting, bukan kitsch. Struktur tidak bisa berlebihan; ornamen bisa.

**Cara menguji.** Hitung perangkat dekoratif per halaman (nomor bagian, garis ganda, stempel, ornamen). Lebih dari tiga: buang yang paling hias. Tidak ada tekstur kertas, vignette, ornamen bunga, bayangan dalam, atau filter sepia — tanpa pengecualian.

---

## 2. Visual direction

### 2.1 Arah

**Katalog department store cetak, bukan toko online.** Bayangkan halaman katalog Sears 1968 yang dicetak di kertas krem, atau katalog lelang rumah lelang: judul serif berani, nomor lot, harga rata kanan, garis rambut sebagai pemisah, dan foto barang berwarna penuh di atas kertas krem. Halaman tidak berteriak; ia menyusun.

Kata kunci yang dituju: **tertib, tenang, bernilai, agak tua, percaya diri.** Bukan: mewah, ramai, trendi, ramah berlebihan.

### 2.2 Referensi

| Referensi | Yang diambil | Yang tidak diambil |
| --- | --- | --- |
| Katalog Sears / JCPenney 1960–70an | Grid produk, harga rata kanan, penomoran halaman, kertas krem | Keramaian iklan dan badge diskon |
| Katalog lelang (Sotheby's, Phillips) | Kesan penting lewat tipografi dan ruang kosong; nomor lot | Bahasa hukum dan formalitas berlebihan |
| Toko perkakas lama / ledgers | Garis rambut, label huruf kapital kecil, angka tabular | Tekstur lusuh dan font tulisan tangan |
| Toko desain independen (mis. toko studio keramik) | Satu foto besar, deskripsi jujur, tanpa diskon | Gaya "artisanal" berlebihan |

### 2.3 Yang dihindari

- **Gradient dan glassmorphism.** Merusak kesan cetak dan tidak perlu.
- **Kartu membulat dengan drop shadow.** Itu bahasa aplikasi, bukan katalog.
- **Hero gelap penuh layar dengan teks di tengah.** Menghabiskan layar pertama dan mendorong katalog ke bawah, melanggar `FR-02`.
- **Badge "New", "AI", "Best seller".** Melanggar P2 dan `FR-13`.
- **Inter, Poppins, atau font sistem sebagai display.** Terlalu sering dipakai, tidak punya suara.
- **Duotone dan filter oranye pada foto produk.** Lihat 2.5.
- **Parallax, animasi scroll, autoplay video.** Melanggar `FR-12` dan `prefers-reduced-motion`.
- **Dark mode.** Lihat bagian 11, keputusan D-05.

### 2.4 Tipografi: Bodoni Moda + Archivo

**Bodoni Moda (display).** Didone dengan kontras tebal-tipis ekstrem dan serif datar. Ini huruf yang dipakai masthead majalah mode dan katalog mewah sejak 1800-an: tepat untuk "penting" dan "old-fashioned" sekaligus. Dipakai hanya untuk judul, nama produk, dan angka besar — minimal 24px, karena di bawah itu garis tipisnya pecah di layar.

**Archivo (teks dan UI).** Grotesque yang dibuat untuk label dan cetak padat, dengan huruf kecil yang kokoh dan angka tabular yang rapi. Dipilih, bukan Inter, karena Inter adalah font default semua produk digital dan akan menghapus kesan cetak; Archivo punya karakter sign-painting yang sejalan dengan label harga dan aturan tabel. Ini juga yang membuat harga bisa rata kanan tanpa bergoyang.

**Pembagian tugas, tegas.** Bodoni tidak pernah dipakai untuk tombol, label, isi paragraf, atau tabel. Archivo tidak pernah dipakai untuk judul halaman. Tidak ada keluarga ketiga, tidak ada italic di UI.

### 2.5 Fotografi

**Keputusan: foto berwarna natural, bukan duotone.** Latar krem (kertas atau dinding), cahaya alami dari satu sisi, tanpa filter. Overlay hangat maksimal 6% hanya untuk menyatukan suhu warna.

**Alasan.** Pembeli barang rumah menilai bahan dan warna glasir; duotone oranye menghapus justru informasi yang dipakai untuk memutuskan. Secara historis, katalog cetak juga begitu: halaman teks monokrom, pelat warna untuk produk. Jadi kontras "UI monokrom, produk berwarna" bukan kompromi — itu memang bahasa katalog.

**Aturan foto.**

| Jenis | Rasio | Catatan |
| --- | --- | --- |
| Produk utama | 4:5 | Satu objek, latar polos, bayangan lembut boleh |
| Produk detail | 4:5 | Bahan, tepi, tekstur; dipakai sebagai thumbnail |
| Editorial / hero | 3:2 desktop, 4:5 mobile | Ada tangan atau meja, bukan orang menatap kamera |
| Tim | 1:1 | Wajah netral, latar sama untuk tiga orang |
| OG image | 1200×630 | Foto produk + wordmark, tanpa teks promosi |

**Yang tidak boleh:** stok foto model tersenyum, latar putih studio yang dingin, bayangan keras ke dinding, clip art, ilustrasi vektor dekoratif. Kalau aset belum ada (`OQ-10`), pakai blok `tint100` dengan label "Photography pending" — bukan gambar placeholder dari internet.

### 2.6 Suara copy

- Kalimat pendek, kata benda konkret, tanpa seru.
- "We" untuk perusahaan, "you" untuk pembeli, tidak ada "we're thrilled".
- Angka ditulis sebagai angka: `$64`, bukan "sixty-four dollars".
- Tidak ada kata "AI" di permukaan situs. Fungsinya yang ditulis: "our model matches pieces that were chosen together".

Contoh nada: *"Three of us choose every object in this catalogue. If it would not survive ten years in our own kitchen, it does not get listed."*

### 2.7 Wordmark dan detail lama

- Wordmark: `MARAUDER`, Bodoni Moda 500, uppercase, tracking 0.16em. 18px di nav, 15px di footer.
- Detail yang dipakai (pilih maksimal tiga per halaman): nomor bagian (`01 — Collection`), garis ganda 1px di bawah hero, label huruf kapital kecil, stempel `Est. 2026` di footer, harga rata kanan dengan angka tabular.
- Nama "Marauder" berkonotasi agresif. Itu diredam oleh wordmark serif, tracking lebar, dan copy tenang — bukan dengan mengubah nama. Konfirmasi ke klien ada di `OQ-13`/bagian 11.

### 2.8 Gerak

Hampir tidak ada. Transisi 120ms `ease-out` hanya untuk hover, fokus, dan buka-tutup accordion/menu. Tidak ada animasi masuk saat scroll. `prefers-reduced-motion: reduce` mematikan semua transisi non-esensial.

---

## 3. Design tokens

Nama token dipakai apa adanya saat implementasi (variabel CSS) supaya tidak ada penerjemahan ulang.

### 3.1 Warna

Dihitung dengan rumus kontras WCAG 2.1 terhadap `paper` kecuali dinyatakan lain.

| Token | Hex | Peran | Kontras | Aturan pakai |
| --- | --- | --- | --- | --- |
| `--paper` | `#FBF5EC` | Latar semua halaman | — | Satu-satunya latar dasar. Tidak ada putih murni di palet. |
| `--tint-100` | `#F9E4D2` | Latar section bergantian, isian field, kartu stok | ink 13,99:1 · brand 7,23:1 · muted 6,43:1 | Boleh untuk teks apa pun di atasnya |
| `--tint-300` | `#E8A87B` | Penanda stok, garis tebal, hover sekunder | ink 8,47:1 · brand 4,37:1 | Teks `brand` di atasnya hanya ≥24px (4,37 < 4,5) |
| `--ink` | `#2E1406` | Teks utama, garis tegas, cincin fokus | 15,90:1 (white 17,23) | Warna default semua teks isi dan judul |
| `--ink-soft` | `#6B4A33` | Teks sekunder, keterangan, bantuan field | 7,30:1 | Boleh untuk teks 14px ke atas |
| `--brand` | `#7A360C` | Tombol utama, tautan, garis input | 8,21:1 (white 8,90) | Bukan untuk teks di atas `brand` (lihat 3.1.1) |
| `--brand-hover` | `#5E2708` | Hover tombol dan tautan | paper 10,95:1 | Hanya untuk state |
| `--brand-active` | `#2E1406` | State ditekan | 15,90:1 | Sama dengan `ink`, sengaja: tekanan = gelap penuh |
| `--accent` | `#D4631F` | Aksen dekoratif, garis tebal, label besar | 3,46:1 | **Dilarang untuk teks < 24px.** Teks di atasnya harus `ink` (4,60:1) |
| `--rule` | `#E3CDB8` | Garis rambut 1px, pemisah dekoratif | 1,42:1 | Dekoratif saja. Tidak boleh jadi satu-satunya penanda field atau batas kontrol |
| `--danger` | `#7A1B0B` | Error field, aksi terblokir | 9,74:1 | Satu-satunya keluarga warna di luar oranye murni: rust, masih satu keluarga hangat |
| `--focus` | `#2E1406` | Cincin fokus | 15,90:1 | Selalu dua lapis: 2px `paper` + 2px `ink` |

**3.1.1 Aturan turunan yang wajib dipatuhi**

1. Tombol `brand` memakai teks `paper` (8,21:1). Tombol `accent` tidak dipakai — kalau butuh latar terang, pakai `tint-300` dengan teks `ink`.
2. Tidak ada teks `accent` di atas `paper`. `accent` hanya untuk garis, blok dekoratif, atau teks ≥24px bold.
3. `rule` tidak boleh jadi satu-satunya batas kontrol interaktif. Batas input, checkbox, dan tombol bergaris memakai `brand` (8,21:1) supaya lolos 1.4.11.
4. Tidak ada putih murni, tidak ada abu-abu netral, tidak ada hijau untuk sukses. Sukses = ikon centang + teks `brand` + label tebal.
5. Rasio di tabel ini adalah kontrak. Mengganti satu hex berarti menghitung ulang seluruh tabel.

### 3.2 Tipografi

| Token | Keluarga | Size/leading desktop | Size/leading mobile | Weight | Tracking | Pakai |
| --- | --- | --- | --- | --- | --- | --- |
| `--type-display-1` | Bodoni Moda | 72/72 | 40/42 | 500 | -0,01em | H1 landing |
| `--type-display-2` | Bodoni Moda | 48/52 | 32/36 | 500 | -0,005em | H2 section |
| `--type-display-3` | Bodoni Moda | 32/38 | 26/30 | 500 | 0 | Nama produk di PDP, ToS H2 |
| `--type-display-4` | Bodoni Moda | 24/30 | 22/28 | 500 | 0 | Nama anggota tim, ToS H3 |
| `--type-body-1` | Archivo | 18/30 | 17/28 | 400 | 0 | Paragraf utama, deskripsi produk |
| `--type-body-2` | Archivo | 16/26 | 16/26 | 400 | 0 | Teks UI, isi form |
| `--type-caption` | Archivo | 14/22 | 14/22 | 400 | 0 | Keterangan, bantuan field, footer |
| `--type-label` | Archivo | 12/16 | 12/16 | 600 | 0,14em, uppercase | Label section, tombol kecil, badge |
| `--type-price` | Archivo | 20/24 | 18/22 | 500 | 0,01em, `tnum` | Semua harga |
| `--type-section-number` | Archivo | 13/16 | 13/16 | 500 | 0,18em | `01 — Collection` |

Aturan:

- Bodoni tidak di bawah 24px. Di bawah itu pakai Archivo `display` 600.
- Panjang baris isi 60–68 karakter (`max-width: 68ch`), termasuk ToS.
- Harga selalu `tnum` dan rata kanan di kolom kartu, supaya digit sejajar antar kartu.
- Maksimal dua bobot per keluarga: Bodoni 500/600, Archivo 400/500/600.
- Italic hanya untuk nama produk di dalam paragraf. Tidak untuk tombol, label, atau judul.
- `letter-spacing` negatif hanya pada `display-1` dan `display-2`.

### 3.3 Spacing

Skala 4px, mengikuti `FR-13`.

| Token | Nilai | Pakai |
| --- | --- | --- |
| `--space-1` | 4px | Jarak ikon–teks, padding label |
| `--space-2` | 8px | Jarak antar baris meta |
| `--space-3` | 12px | Padding vertikal tombol kecil |
| `--space-4` | 16px | Jarak field, padding kartu |
| `--space-6` | 24px | Gutter grid desktop, jarak antar elemen form |
| `--space-8` | 32px | Jarak judul–isi dalam satu blok |
| `--space-12` | 48px | Jarak antar blok dalam section |
| `--space-16` | 64px | Padding section tablet |
| `--space-24` | 96px | Padding section desktop |

Tidak ada nilai di luar skala. Kalau butuh 20px atau 36px, artinya hierarkinya belum benar.

### 3.4 Layout dan grid

| Token | Nilai |
| --- | --- |
| `--container` | 1240px |
| `--gutter` | 24px (≥1024), 20px (<1024) |
| `--margin-page` | 40px (≥1024), 20px (<1024) |
| `--grid` | 12 kolom, gap `--space-6` |
| `--section-pad` | 96px (≥1024), 72px (768–1023), 56px (<768) |
| `--nav-h` | 72px (≥1024), 56px (<1024) |
| `--tap-min` | 44×44px |

### 3.5 Radius

**Satu nilai: `--radius: 0`.** Tidak ada skala radius, tidak ada pengecualian.

Alasan: sudut membulat adalah penanda bahasa aplikasi (kartu, sheet, tombol sistem). Sudut tajam adalah penanda cetak (halaman, label, bingkai foto). Karena arah visualnya katalog, radius 0 konsisten dan menghemat satu dimensi keputusan. Foto, tombol, input, badge, panel menu — semuanya 0.

### 3.6 Shadow

Hampir tidak ada bayangan. Dua token, dua pemakaian.

| Token | Nilai | Pakai |
| --- | --- | --- |
| `--shadow-overlay` | `0 1px 0 rgba(46,20,6,.06), 0 16px 40px rgba(46,20,6,.14)` | Panel menu mobile, sticky buy bar |
| `--ring-focus` | `0 0 0 2px var(--paper), 0 0 0 4px var(--focus)` | Semua elemen fokus |

Tidak ada shadow untuk kartu, tombol, atau gambar. Pemisah memakai `--rule` 1px, bukan bayangan.

**Kenapa cincin dua lapis.** `ink` di atas `brand` hanya 1,94:1, jadi cincin gelap di atas tombol gelap tidak terlihat. Lapisan `paper` di dalam memberi jarak 8,21:1 terhadap tombol, lapisan `ink` di luar memberi 15,90:1 terhadap latar. Hasilnya terlihat di semua permukaan.

### 3.7 Border dan z-index

| Token | Nilai | Pakai |
| --- | --- | --- |
| `--border-hair` | 1px `--rule` | Pemisah dekoratif |
| `--border-strong` | 1px `--ink` | Garis atas/bawah section, garis bawah nav |
| `--border-control` | 1px `--brand` | Input, checkbox, tombol sekunder |
| `--z-nav` | 100 | Nav sticky |
| `--z-overlay` | 200 | Menu mobile, sticky buy bar |
| `--z-skip` | 300 | Skip link |

---

## 4. Screen inventory

| ID | Rute | Tujuan | Satu aksi utama | Frame | FR |
| --- | --- | --- | --- | --- | --- |
| S1 | `/` | Menjelaskan siapa Marauder, menampilkan katalog, membangun kepercayaan, mengarahkan ke pembelian | `Shop the collection` | 1440, 390 | FR-01, 02, 03, 05, 14 |
| S2 | `/product/{slug}` | Membuat pembeli yakin pada satu objek dan menekan beli | `Add to cart` | 1440, 390 | FR-04 |
| S3 | `/contact` | Menjawab pertanyaan pra/pasca pembelian tanpa menunggu | `Send message` | 1440, 390 | FR-06 |
| S4 | `/terms` | Menjelaskan hak dan kewajiban sebelum membeli | *tidak ada* (lihat 6.4) | 1440, 390 | FR-07 |
| S5 | `/404` | Mengembalikan pengunjung ke katalog | `Back to the collection` | 1440, 390 | FR-10 |
| C1 | (overlay) | Menu mobile: akses ke empat tujuan | `Shop the collection` | 390 | FR-01 |

Layar internal, tidak dikirim ke klien: `kitchen-sink` (semua komponen dan state dalam satu halaman) untuk QA. Bukan halaman publik, tidak masuk sitemap.

Tiga instance S2 memakai satu template: `coupe-plate-set`, `two-handled-vessel`, `the-pairing-box`. Perbedaan antar instance hanya pada isi, jumlah thumbnail, ada tidaknya varian, dan status stok — bukan tata letak.

---

## 5. User flow

### A. Penemuan sampai pembelian (jalur utama, Alya)

1. Masuk dari Instagram ke `/`. Hero menyebut kategori dan pasangan dalam satu layar.
2. Lihat CTA `Shop the collection` sudah terlihat tanpa scroll → klik (atau scroll 500px).
3. Bagian `01 — Collection`: enam kartu dengan foto, nama, harga, satu baris keterangan.
4. Klik kartu → `/product/{slug}`. Fokus pindah ke `h1` produk.
5. Baca galeri, harga, bahan. Pilih varian (kalau ada) → harga berubah.
6. Klik `Add to cart` → keluar ke checkout sesuai `OQ-04`.
7. **Cabang gagal:** checkout belum dikonfigurasi → tombol nonaktif dengan status `Checkout not available yet`, plus tautan ke contact. **Cabang stok habis:** tombol `Sold out` nonaktif, harga tetap terlihat.

### B. Pemeriksaan kredibilitas (jalur Rani)

1. Masuk ke `/` dari pencarian.
2. Baca hero, langsung gulir ke `#values` — tiga nilai brand dan satu paragraf fungsi model (≤80 kata).
3. Gulir ke `#team` — tiga orang, peran, bio, satu paragraf cara memilih barang.
4. Klik `Talk to us` → `/contact`.
5. Baca siapa yang membalas dan dalam berapa lama, lalu tulis pesan atau simpan email.
6. **Cabang:** sebelum mengirim, buka `Terms` dari footer untuk memeriksa retur → kembali ke contact.

### C. Pengiriman form kontak

1. `/contact`. Form tampil dengan state `idle`.
2. Isi field. Validasi terjadi saat blur dan saat submit, bukan saat mengetik huruf pertama.
3. Klik `Send message` → tombol nonaktif, label berubah `Sending…`, `aria-busy="true"`.
4. **Sukses:** form diganti panel konfirmasi — tidak ada reset form yang membingungkan, ada estimasi balasan dan tautan kembali.
5. **Gagal validasi:** field bermasalah ditandai, ringkasan error di atas form, fokus pindah ke field pertama yang salah, isi lain dipertahankan.
6. **Gagal jaringan:** isi form dipertahankan, pesan menyebut kemungkinan koneksi, email alternatif ditampilkan.
7. **Rate limit (429):** pesan netral, tanpa menyebut aturan internal, email alternatif ditampilkan.

### D. Membaca syarat sebelum membeli

1. Dari PDP, klik `Shipping & returns` di accordion atau tautan `Terms`.
2. `/terms` dengan daftar isi menempel di kiri (desktop) / accordion di atas (mobile).
3. Klik satu bagian → anchor bergulir, heading tujuan mendapat fokus.
4. Kembali ke PDP lewat breadcrumb atau tombol kembali browser. Pilihan varian tidak hilang (tidak ada state yang di-reset tanpa sebab).

### E. Navigasi mobile

1. `/` di 390px. Nav 56px: wordmark, ikon cart, tombol menu.
2. Tombol menu → panel penuh dari bawah (bukan drawer dari kiri), tautan besar 20px, tinggi baris 56px.
3. `Esc` atau klik latar menutup panel, fokus kembali ke tombol menu.
4. Pilih `Collection` → panel tertutup, halaman bergulir ke `#products` tanpa lompatan.

### F. Pemulihan error

1. URL produk salah → `/404` dengan nav, satu kalimat, dua tautan: katalog dan contact.
2. Gambar produk gagal → blok `tint-100` dengan label teks, ukuran tetap, tanpa pergeseran tata letak.
3. JavaScript mati → nav, tautan, accordion (pakai `<details>`), dan ToS tetap berfungsi; hanya sticky buy bar dan validasi langsung yang tidak aktif.
4. Analitik diblokir → tidak ada error di console, situs tetap penuh.

---

## 6. Layout per screen

### 6.0 Anggaran vertikal (kenapa CTA pasti terlihat)

`FR-02` dan `FR-03` menuntut CTA terlihat di layar pertama dan katalog mulai terlihat. Ini dihitung, bukan diharapkan.

| Elemen (1440×900) | Tinggi | Kumulatif |
| --- | --- | --- |
| Nav sticky | 72 | 72 |
| Padding atas hero | 64 | 136 |
| H1 dua baris (72/72) | 144 | 280 |
| Jarak + sub satu baris dua kalimat | 24 + 60 | 364 |
| CTA + tautan sekunder | 32 + 52 | 448 |
| Padding bawah hero | 64 | 512 |
| Label section katalog | 96 + 56 | 664 |
| Baris pertama kartu (foto 4:5, lebar 397) | 496 | 1160 |

Di 900px, CTA berakhir di 448 dan bagian atas kartu pertama sudah terlihat mulai 664 — sekitar 236px foto. Syarat terpenuhi tanpa trik.

Mobile 390×844: nav 56 + padding 32 + H1 84 (dua baris 40/42) + 16 + sub 78 + 24 + CTA 52 = 342. Sisa 500px menampilkan bagian atas foto. CTA masuk layar pertama dengan margin 500px.

### 6.1 S1 — Landing

**Urutan dan hierarki.** Satu `h1`, lima `h2`.

| # | Section | Isi | Primary? | Komponen |
| --- | --- | --- | --- | --- |
| 1 | Nav | Wordmark, Products, Team, Contact, ikon cart, CTA | CTA | `Nav`, `Button/ghost-sm` (jadi `primary-sm` setelah scroll) |
| 2 | Hero | H1 dua baris, sub ≤25 kata, CTA + `Talk to us`, foto 3:2 di kanan (60/40) | **ya** | `Button/primary`, `Link/arrow` |
| 3 | `01 — Collection` `#products` | Grid 3×2; kartu: foto 4:5, nama, harga rata kanan, satu baris keterangan ≤80 karakter | tidak | `ProductCard`, `SectionHeader` |
| 4 | `02 — How we choose` `#values` | Tiga nilai bernomor (Penting / Dibuat untuk dipakai / Dibantu model), lalu satu paragraf ≤80 kata tentang fungsi model. Tanpa CTA | tidak | `ValueItem`, `Prose` |
| 5 | `03 — The people` `#team` | Pengantar + tiga `TeamCard` (foto 1:1, nama, peran, bio ≤40 kata), tautan ke contact | tidak | `TeamCard`, `Link/arrow` |
| 6 | Closing | Satu kalimat + `Shop the collection` + `Talk to us` | **ya** (label sama, dihitung aksi yang sama) | `Button/primary` |
| 7 | Footer | Wordmark, kolom Products/Company/Help, alamat, email, copyright, `Est. 2026` | tidak | `Footer` |

**Hierarki visual.** Hero: H1 72px ink > foto > sub 18px `ink-soft`. Katalog: foto > nama 30px Bodoni > harga 20px Archivo `tnum` > keterangan 14px `ink-soft`.

Tombol nav dan tombol hero memakai label yang sama, tapi dua bidang gelap di satu layar tetap melanggar P1. **Keputusan:** tombol nav memakai gaya `ghost` bergaris (`brand` 1px, teks `brand`) selama halaman belum digulir, lalu berubah jadi `primary-sm` setelah 200px — saat tombol hero sudah keluar layar. Satu bidang gelap pada satu waktu.

**Grid.** Hero 7/5 kolom. Katalog 3×2, gap 24/48. Nilai 3 kolom. Tim 3 kolom.

**Mobile.** Hero: H1 → sub → CTA → foto (CTA di atas foto, supaya masuk layar pertama). Katalog 1 kolom, kartu lebar penuh, gap 40. Nilai bertumpuk dengan garis pemisah. Tim 1 kolom, foto 1:1 selebar container.

### 6.2 S2 — Product detail

**Desktop 1440: dua kolom 58/42, gap 64, tanpa sticky.**

| # | Blok | Isi | Primary? |
| --- | --- | --- | --- |
| 1 | Breadcrumb | `Home / Collection / Coupe Plate Set No. 01` | tidak |
| 2 | Galeri (kiri) | Foto utama 4:5, maksimal 4 thumbnail 1:1 di bawah, thumbnail aktif bergaris `brand` 2px | tidak |
| 3 | Info (kanan) | `h1` nama 32px, harga 20px `tnum`, deskripsi 18px, pemilih varian, `Add to cart`, catatan pengiriman 2 baris, tautan `Shipping & returns` | **ya** |
| 4 | Accordion detail | Bahan / Ukuran / Perawatan / Pengiriman & retur — 1 terbuka maksimal | tidak |
| 5 | Penutup | `Back to the collection` (teks, bukan tombol) | tidak |

**Yang sengaja tidak ada di MVP.** Bagian "Paired with" dan `Add to registry` adalah V2 (`PRD §5.2`, `US-06`, `US-11`). Tidak digambar sebagai placeholder kosong.

**Hierarki.** H1 dan harga satu blok (jarak 8px). CTA 24px di bawah harga. Tidak ada elemen lain di kolom kanan yang boleh memakai `brand` terisi.

**Mobile 390.** Urutan: breadcrumb → galeri → nama + harga → varian → CTA → catatan pengiriman → accordion → kembali. `StickyBuyBar` muncul setelah CTA inline keluar viewport (IntersectionObserver), tinggi 64px, berisi nama pendek + harga + tombol. Saat `sold_out`, bar tetap muncul dengan tombol nonaktif — supaya pengguna tidak menggulir balik mencari tombol.

**Galeri tanpa JavaScript.** Tiga foto ditumpuk vertikal, thumbnail disembunyikan. Tidak ada carousel yang butuh JS.

### 6.3 S3 — Contact

**Desktop: dua kolom 60/40.**

| # | Blok | Isi | Primary? |
| --- | --- | --- | --- |
| 1 | Header | `h1` `Talk to us`, satu paragraf: siapa yang membalas dan estimasi waktu (≤2 hari kerja) | tidak |
| 2 | Form (kiri) | Nama, email, topik (select), nomor pesanan (opsional), pesan, checkbox persetujuan, `Send message` | **ya** |
| 3 | Info (kanan) | Alamat studio, jam buka, email, telepon, peta placeholder 3:2 berlabel | tidak |

**Detail form.** Field tanpa kotak penuh: latar `tint-100`, garis bawah 1px `brand`, label `--type-label` di atas, bantuan 14px `ink-soft`. Pesan error: garis `danger` 1px, teks error 14px `danger` + ikon, dihubungkan `aria-describedby`. Checkbox 18px, kotak `brand`, centang `paper`.

**Mobile.** Satu kolom: header → form → info → peta. Field tinggi 48px, tombol lebar penuh.

### 6.4 S4 — Terms of Service

**Desktop: daftar isi 280px menempel di kiri, isi 680px (68ch).**

| # | Blok | Isi | Primary? |
| --- | --- | --- | --- |
| 1 | Header | `h1` `Terms of Service`, versi, `Last updated`, estimasi baca | tidak |
| 2 | TOC | Delapan anchor, item aktif ditandai garis `brand` 2px | tidak |
| 3 | Isi | Delapan bagian bernomor, `h2` masing-masing, paragraf 18/30 | tidak |
| 4 | Penutup | Satu paragraf + `Talk to us` (tautan teks) | tidak |

**Kenapa ToS tidak punya primary action.** Memaksa tombol terisi di halaman yang tujuannya membaca akan melanggar P1 (aksi utama palsu) dan P2 (bujukan di tempat yang butuh ketenangan). Satu-satunya tautan keluar adalah `Talk to us` sebagai teks. Ini pengecualian yang disengaja, bukan kelalaian.

**Mobile.** TOC jadi accordion di bawah header, tertutup secara default, label `Contents · 8 sections`. Delapan bagian bertumpuk dengan nomor.

### 6.5 S5 — 404

Satu kolom, maksimal 640px, di tengah vertikal (min-height 60vh). `h1` `This page is not in the catalogue`, satu kalimat, dua tautan: `Back to the collection` (tombol terisi — satu-satunya bidang gelap) dan `Talk to us` (teks). Nav dan footer tetap ada.

### 6.6 C1 — Menu mobile (overlay)

Panel penuh dari bawah, latar `paper`, garis atas 1px `ink`, shadow `--shadow-overlay`. Isi: empat tautan 20px Archivo (Collection, How we choose, Team, Contact), garis pemisah, `Terms`, lalu `Shop the collection` sebagai tombol terisi lebar penuh. Wordmark kecil di atas. Tidak ada ikon sosial. Tinggi baris 56px.

---

## 7. Component library

Penamaan: `Nama/Varian/State`. Semua komponen punya `default`, `hover`, `focus-visible`, `disabled` bila relevan.

| # | Komponen | Varian | State | Catatan |
| --- | --- | --- | --- | --- |
| 1 | `Button` | primary (terisi `brand`), secondary (garis `brand`), ghost (teks), sm/md/lg | default, hover, active, focus, disabled, loading | Tinggi 52 (md), 40 (sm); padding 24; radius 0; label `--type-label` untuk sm, `--type-body-2` 500 untuk md |
| 2 | `Link` | inline (garis bawah 1px), arrow (teks + panah 4px) | default, hover, focus, visited | `visited` tetap `brand`, tidak ada ungu; garis bawah 1px selalu ada untuk inline |
| 3 | `Nav` | desktop (sticky), mobile (statis) | scrolled, top, menu-open | Tinggi 72/56; `aria-current="page"`; CTA berubah gaya setelah 200px |
| 4 | `MobileMenu` | — | closed, open | Fokus terkunci di panel, `Esc` menutup, fokus kembali ke pemicu |
| 5 | `Footer` | desktop 4 kolom, mobile bertumpuk | — | Wajib memuat catatan demo bila data fiktif |
| 6 | `SectionHeader` | dengan nomor, tanpa nomor | — | Nomor `--type-section-number`, judul Bodoni, garis `rule` selebar container |
| 7 | `ProductCard` | default, sold-out, minimal (kurang dari 3 produk) | default, hover, focus, sold-out | Seluruh kartu satu tautan; hover = foto `opacity .92` + nama bergaris bawah; tidak ada shadow |
| 8 | `ProductGallery` | 1 foto, multi foto | foto-1..4 aktif, gagal muat | Thumbnail 1:1 72px, aktif garis `brand` 2px; `alt` wajib |
| 9 | `VariantSelector` | radio chips, dropdown (>5 opsi) | default, selected, disabled, out-of-stock | Bila harga berubah, harga di PDP ikut berubah |
| 10 | `StickyBuyBar` | — | hidden, visible, sold-out | Muncul setelah CTA inline keluar viewport; hanya mobile |
| 11 | `Accordion` | single-open | closed, open, focus | Pakai `<details>`/`<summary>` supaya jalan tanpa JS |
| 12 | `Input` | text, email, tel, textarea | default, focus, filled, error, disabled, readonly | Latar `tint-100`, garis bawah `brand`; error garis `danger` |
| 13 | `Select` | native | default, focus, error | Tidak ada dropdown kustom di MVP |
| 14 | `Checkbox` | — | unchecked, checked, focus, error | 18px, kotak `brand`, centang `paper`; klik label ikut memilih |
| 15 | `FormField` | dengan bantuan, dengan counter | default, error, success | Label eksplisit; error via `aria-describedby`; counter pesan 0/2000 |
| 16 | `InlineMessage` | error, success, info | — | Ikon + teks + garis kiri 2px; tidak pernah warna saja |
| 17 | `StatusTag` | in-stock, sold-out | — | Huruf kapital kecil, garis 1px; `sold-out` memakai `ink-soft` + garis `rule`, bukan merah |
| 18 | `TeamCard` | — | default, foto-kosong | Foto 1:1, nama Bodoni 24, peran label, bio 14/22 |
| 19 | `Breadcrumb` | — | default | Pemisah `/`, item terakhir bukan tautan; `aria-label="Breadcrumb"` |
| 20 | `ToC` | sticky (desktop), accordion (mobile) | default, item-aktif | Anchor memakai slug heading |
| 21 | `EmptyState` | produk kosong, hasil 404 | — | Satu kalimat + satu tautan; tanpa ilustrasi |
| 22 | `SkipLink` | — | default, focus | Tersembunyi sampai fokus, muncul di kiri atas |
| 23 | `Figure` | 4:5, 3:2, 1:1 | loaded, error | `width`/`height` wajib supaya CLS 0 (nol) |
| 24 | `ValueItem` | bernomor, tanpa nomor | — | Nomor memakai `--type-section-number`, judul `display-4`, isi `body-2`, pemisah `rule` |
| 25 | `Prose` | paragraf, daftar, tautan | — | Maks 68ch, jarak antar blok `--space-6`; dipakai di ToS dan section nilai |

**Aturan komponen.** Tidak ada variasi warna di luar token. Tidak ada komponen yang menetapkan margin luar sendiri — jarak diatur oleh parent memakai skala spacing. Setiap komponen harus punya contoh di `kitchen-sink` sebelum dipakai di layar.

---

## 8. State

### 8.1 Matriks per layar

| Layar | Empty | Loading | Error | Success | Offline |
| --- | --- | --- | --- | --- | --- |
| S1 Landing | Tidak ada produk `published`: `EmptyState` + tautan contact. Grid rata kiri bila <6 | Font swap; gambar pakai blok `tint-100` rasio tetap; tidak ada skeleton halaman | Gambar gagal → `Figure/error`. JS gagal → nav, katalog, tautan tetap jalan | Tidak berlaku (tidak ada transaksi) | Halaman dari cache browser; tidak ada state khusus |
| S2 PDP | Tidak berlaku — produk tanpa data tidak boleh rilis (validasi data, bukan UI) | Blok galeri rasio tetap; harga tampil sebagai teks, bukan spinner | Slug tidak ada → 404. Varian tak tersedia → chip `disabled` + label. Checkout belum diset → tombol nonaktif + `Checkout not available yet` | Setelah `Add to cart` → keluar situs (di luar kendali desain, `OQ-04`) | Tidak ada state khusus |
| S3 Contact | Form kosong = `idle`, bukan empty state | Tombol `Sending…` + `aria-busy`, field `readonly`, tidak ada spinner penuh layar | Error per field + ringkasan; gagal jaringan mempertahankan isi; 429 netral | Panel konfirmasi menggantikan form, fokus pindah ke heading konfirmasi | Form tetap tampil; submit gagal dengan pesan jaringan + email alternatif |
| S4 ToS | Tidak berlaku — delapan bagian wajib terisi sebelum rilis | Teks langsung tampil; font swap tanpa pergeseran | Anchor salah = bug, bukan state. Dokumen belum ada → halaman tidak dirilis | Tidak berlaku | Teks dari cache browser tetap terbaca |
| S5 404 | — | — | Inti layar ini | — | Tetap tampil |
| C1 Menu | — | — | — | Tertutup setelah memilih tautan | — |

### 8.2 Keputusan state yang perlu dijelaskan

**Tidak ada skeleton screen.** Situs ini merender HTML dari server; tidak ada pengambilan data di klien. Skeleton untuk konten yang sudah ada di HTML adalah kebohongan visual dan menambah kode. Yang dipakai: `width`/`height` eksplisit pada gambar, `aspect-ratio`, latar `tint-100`, dan `font-display: swap`.

**Offline tidak didesain sebagai layar.** Tidak ada service worker atau PWA di MVP (`FR-12` hanya mengatur performa). Kalau jaringan mati, browser yang menampilkan halaman offline; kita tidak bisa menata halaman milik browser. Yang bisa dan wajib didesain hanya dua kegagalan: submit form gagal, dan gambar gagal dimuat. Menjanjikan lebih dari itu berarti menambah scope yang tidak diminta.

**Error tidak pernah hanya warna.** Setiap error = ikon + teks `danger` + garis/outline + `aria-invalid`. Ini syarat buta warna dan syarat monokrom.

**Sukses tidak hijau.** Panel konfirmasi memakai `brand` + ikon centang + judul tebal. Tidak ada warna baru masuk palet.

---

## 9. Responsive behavior

| Komponen | 1440 | 1024 | 768 | 480 / 390 | Aturan kunci |
| --- | --- | --- | --- | --- | --- |
| Nav | 72px, tautan + CTA terisi | 72px, tautan, CTA `sm` | 56px, hamburger | 56px, hamburger | Menu muncul <1024 karena 4 tautan + CTA tidak muat tanpa mengecilkan tap target |
| Container | 1240, margin 40 | 100%, margin 40 | 100%, margin 32 | 100%, margin 20 | Tidak ada `max-width` yang memaksa scroll horizontal |
| Hero | 7/5 kolom, H1 72 | 7/5, H1 60 | bertumpuk, foto di bawah CTA, H1 44 | H1 40, foto 4:5 | Urutan mobile: teks → CTA → foto |
| Grid produk | 3 kolom, gap 24 | 3 kolom, gap 20 | 2 kolom, gap 20 | 1 kolom, gap 40 | `grid-template-columns: repeat(auto-fit, minmax(...))` diganti breakpoint eksplisit supaya 2 kolom tidak pernah jadi 1,5 |
| PDP | 58/42 dua kolom | 56/44 | dua kolom, gap 32 | bertumpuk + sticky buy bar | Bar muncul setelah CTA inline keluar viewport |
| Section pad | 96 | 96 | 72 | 56 | Satu token, tiga nilai |
| ToS | TOC sticky 280 + isi 680 | sama | TOC accordion | TOC accordion | Isi maksimal 68ch di semua lebar |
| Contact | 60/40 | 60/40 | bertumpuk | bertumpuk, tombol penuh | Info setelah form di mobile |
| Footer | 4 kolom | 4 kolom | 2 kolom | 1 kolom | Urutan: Products, Company, Help, Studio |
| Tipografi | tabel 3.2 kolom desktop | display-1 turun ke 60 | display-1 44 | tabel kolom mobile | Body tidak pernah <16px |

**Wajib diuji:** 1440, 1280, 1024, 768, 480, 390, 360, 320. Di 320: tidak ada overflow, nav jadi menu, tombol selebar container, harga tidak pecah baris.

**Yang dicek di setiap lebar:** overflow horizontal, kata terpotong di H1, harga terpisah dari mata uang, tap target <44px, gambar gepeng, teks 200% zoom.

---

## 10. Accessibility

Target: WCAG 2.1 AA (`FR-09`), dikonfirmasi lewat `OQ-16`.

### 10.1 Kontras (diukur, bukan diperkirakan)

| Pasangan | Rasio | Lulus |
| --- | --- | --- |
| `ink` / `paper` | 15,90:1 | AA teks |
| `ink` / `tint-100` | 13,99:1 | AA teks |
| `ink` / `tint-300` | 8,47:1 | AA teks |
| `ink` / `accent` | 4,60:1 | AA teks |
| `paper` / `brand` | 8,21:1 | AA teks |
| `paper` / `brand-hover` | 10,95:1 | AA teks |
| `brand` / `paper` | 8,21:1 | AA teks |
| `brand` / `tint-100` | 7,23:1 | AA teks |
| `ink-soft` / `paper` | 7,30:1 | AA teks |
| `ink-soft` / `tint-100` | 6,43:1 | AA teks |
| `danger` / `paper` | 9,74:1 | AA teks |
| `accent` / `paper` | 3,46:1 | Hanya ≥24px atau elemen non-teks |
| `paper` / `accent` | 3,46:1 | **Gagal untuk teks.** Jangan dipakai |
| `brand` / `tint-300` | 4,37:1 | Hanya ≥24px (kurang 0,13 dari 4,5) |
| `rule` / `paper` | 1,42:1 | Dekoratif. Tidak untuk batas kontrol |

**Konsekuensi.** Batas input, checkbox, dan tombol bergaris memakai `brand` (8,21:1), bukan `rule`. `rule` hanya untuk garis pemisah yang tidak membawa informasi.

### 10.2 Urutan fokus

**S1 Landing:** skip link → wordmark (home) → Products → Team → Contact → cart → CTA nav → CTA hero → tautan sekunder hero → kartu 1..6 → tautan team → CTA penutup → tautan sekunder penutup → tautan footer (kiri ke kanan, atas ke bawah).

**S2 PDP:** skip link → nav (sama) → breadcrumb → thumbnail 1..4 → pilihan varian → CTA beli → tautan `Shipping & returns` → summary accordion 1..4 → tautan kembali.

**S3 Contact:** skip link → nav → field nama → email → topik → nomor pesanan → pesan → checkbox → tombol kirim → info → tautan footer. Setelah error: fokus ke ringkasan error, lalu field pertama yang salah.

**S4 ToS:** skip link → nav → TOC item 1..8 → isi (heading tidak difokus, hanya dibaca) → `Talk to us` → footer.

**C1 Menu terbuka:** fokus masuk ke tautan pertama panel, terkurung di panel, `Esc` menutup dan mengembalikan fokus ke tombol menu.

### 10.3 Navigasi keyboard

| Komponen | Tombol | Perilaku |
| --- | --- | --- |
| Semua tautan/tombol | `Tab` / `Shift+Tab` | Fokus berurutan, cincin dua lapis selalu terlihat |
| Skip link | `Enter` | Lompat ke `<main>`, fokus pindah ke `main` |
| Menu mobile | `Enter`/`Space`, `Esc` | Buka/tutup; fokus terkunci selama terbuka |
| Galeri | `Tab` + `Enter`/`Space` | Thumbnail aktif berganti, foto utama diperbarui, `aria-live="polite"` mengumumkan nomor foto |
| Variant chips | panah kiri/kanan, `Space` | Pola radiogroup |
| Accordion | `Enter`/`Space` pada `summary` | Buka/tutup native, tanpa JS |
| Form | `Tab`, `Enter` submit | `Enter` di textarea membuat baris baru, tidak submit |
| TOC | `Tab` + `Enter` | Bergulir ke heading, heading menerima fokus (`tabindex="-1"`) |
| Sticky buy bar | `Tab` | Muncul di urutan setelah CTA inline, bukan di akhir dokumen |

Tidak ada `tabindex` positif. Tidak ada trap fokus selain panel menu. Tidak ada interaksi hover-only — semua yang muncul saat hover juga muncul saat fokus.

### 10.4 Kebutuhan ARIA

| Elemen | Atribut | Catatan |
| --- | --- | --- |
| Nav utama | `<nav aria-label="Main">` | Satu saja per halaman |
| Halaman aktif | `aria-current="page"` | Di nav dan footer |
| Menu mobile | `button[aria-expanded][aria-controls]`, panel `role="dialog" aria-modal="true" aria-label="Menu"` | Fokus terkunci, `Esc` menutup |
| Skip link | `<a class="skip" href="#main">` | Target `<main id="main" tabindex="-1">` |
| Breadcrumb | `<nav aria-label="Breadcrumb">` + `ol` | Item terakhir `aria-current="page"` |
| Galeri | `figure`, `figcaption` opsional, thumbnail `aria-label="View photo 2 of 4"` | Foto utama `aria-live="polite"` saat diganti |
| Varian | `fieldset` + `legend` + `input[type=radio]` | Jangan `div` dengan `role="radio"` |
| Accordion | `<details><summary>` | Native, jalan tanpa JS |
| Form | `label[for]` eksplisit | Placeholder bukan label |
| Error field | `aria-invalid="true"` + `aria-describedby` ke id pesan | Pesan error punya id unik |
| Ringkasan error | `role="alert"` + fokus dipindah | Setelah submit gagal |
| Tombol submit | `aria-busy="true"` saat mengirim, `disabled` | Label berubah, lebar tidak melompat |
| Status stok | Teks nyata, bukan hanya ikon | `Sold out` terbaca pembaca layar |
| Gambar | `alt` deskriptif untuk produk, `alt=""` untuk dekoratif | Alt produk menyebut bahan/warna, bukan "image" |
| Ikon | `aria-hidden="true"` bila teks sudah ada | Ikon cart tanpa teks butuh `aria-label` |
| Sticky buy bar | `<aside aria-label="Purchase">` | Bukan `position: fixed` yang menutupi fokus |
| Lang | `<html lang="en">` sementara | Menunggu `OQ-08` |
| Harga | `<data value="6400">$64</data>` | Membantu pembaca layar dan structured data |

### 10.5 Aturan tambahan

- Satu `h1` per halaman, level tidak melompat.
- Tap target ≥44×44px, termasuk ikon cart dan tombol tutup menu.
- Teks 200% zoom tanpa konten terpotong, tanpa scroll horizontal.
- `prefers-reduced-motion: reduce` mematikan transisi 120ms.
- Tidak ada `outline: none` tanpa pengganti.
- Link dalam paragraf punya garis bawah, bukan hanya warna — warna saja melanggar 1.4.1.
- Isi ToS terbaca tanpa JS; accordion memakai elemen native.

---

## 11. Keputusan yang bisa diperdebatkan

Daftar ini sengaja terbuka. Semua sudah diambil dengan alasan, semua bisa dibalik kalau klien punya dasar lain.

| ID | Keputusan | Alasan | Kalau dibalik, apa yang berubah |
| --- | --- | --- | --- |
| D-01 | Foto produk berwarna natural, bukan duotone | Pembeli menilai bahan dan glasir; duotone menghapus informasi keputusan. UI tetap monokrom, jadi permintaan klien tetap dipenuhi | Semua foto diganti; halaman terasa lebih "merek", tapi lebih sulit dipercaya |
| D-02 | Radius 0 di semua elemen | Bahasa cetak, bukan bahasa aplikasi; menghemat satu skala keputusan | 8 komponen berubah; halaman langsung terasa seperti template SaaS |
| D-03 | Tidak ada putih murni | Satu latar kertas menyatukan semua halaman dan membuat `tint-100` punya fungsi | Kartu perlu latar sendiri |
| D-04 | ToS tanpa CTA terisi | Membaca bukan membeli; memaksa tombol melanggar P1 | ToS terasa seperti halaman pemasaran |
| D-05 | Tidak ada dark mode | Satu palet oranye di atas kertas sudah jadi inti arah; dark mode menuntut palet kedua dan uji kontras ulang, tidak ada di PRD | Menambah 1–2 hari kerja, tidak ada di rencana |
| D-06 | Tidak ada skeleton loading | HTML dirender server, tidak ada fetch di klien | Menambah kode tanpa menambah kejelasan |
| D-07 | Offline tidak didesain | Tanpa service worker/PWA, halaman offline milik browser | Butuh scope PWA baru |
| D-08 | Sticky buy bar hanya mobile | Di desktop CTA sudah terlihat bersama info; bar akan menutupi footer | Desktop terasa lebih "app" |
| D-09 | `danger` rust sebagai satu-satunya warna di luar oranye | Error butuh pembeda yang tidak bisa ditipu oleh bentuk saja; rust masih satu keluarga hangat | Error jadi lebih sulit dipindai |
| D-10 | Tombol nav bergaris sampai scroll 200px | Menghormati P1 tanpa menghapus CTA dari nav | Dua bidang gelap di layar pertama |

### Pertanyaan desain yang belum terjawab

| ID | Pertanyaan | Terkait |
| --- | --- | --- |
| DB-01 | Apakah ada logo resmi, atau wordmark disusun dari Bodoni Moda? | `OQ-10` |
| DB-02 | Foto produk dan foto tim tersedia, atau perlu arahan produksi? Siapa yang difoto? | `OQ-10`, `OQ-14` |
| DB-03 | Nama "Marauder" dipertahankan di wordmark? | `OQ-13` |
| DB-04 | Bahasa situs Inggris, Indonesia, atau keduanya? Semua ukuran tipografi di atas mengasumsikan Inggris; bahasa Indonesia butuh line-height lebih longgar untuk kata panjang | `OQ-08` |
| DB-05 | Berapa jumlah produk sebenarnya? Enam mengasumsikan grid 3×2; kalau 4 atau 9, grid berubah | `OQ-03` |
| DB-06 | Checkout di situs, Shopify, atau tautan keluar? Menentukan apakah ada state "keranjang" yang perlu digambar | `OQ-04` |
| DB-07 | Perlu halaman listing produk terpisah kalau katalog melebihi 12 item? | `OQ-03` |
| DB-08 | Apakah ada kebutuhan cetak (kartu nama, label harga) sehingga token ini dipakai lintas media? | baru |

### Definisi selesai untuk desain

- Semua lima layar (S1–S5) ada di 1440 dan 390, plus C1.
- `kitchen-sink` memuat setiap komponen di semua state.
- Setiap pasangan teks/latar di tabel 10.1 dipakai sesuai batasnya; tidak ada teks `accent` <24px.
- Tidak ada overflow horizontal di 320–1440; tidak ada kata terpotong di H1.
- Uji keyboard selesai: dari URL sampai submit kontak tanpa mouse.
- ToS terbaca dengan JavaScript dimatikan.
- Font tidak lebih dari dua berkas utama (Bodoni 500, Archivo 400/500), subset latin, `woff2`.
- Setiap keputusan yang menyimpang dari daftar ini dicatat di bagian 11, bukan dilakukan diam-diam.
