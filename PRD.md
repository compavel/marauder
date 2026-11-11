# PRD — Website Marauder

| | |
| --- | --- |
| Produk | Situs web Marauder (landing, halaman produk, contact, terms of service) |
| Versi | 1.0 — menggantikan draf 0.1 di `_arsip/PRD-v0.1-draft.md` |
| Status | Draft untuk review klien |
| Tanggal | 10 November 2026 |
| Sumber | Brief klien. Tidak ada data tambahan di luar brief. |
| Aturan dokumen | Yang tidak tertulis di brief masuk ke bagian 10 sebagai pertanyaan terbuka, bukan asumsi. |

**Penanda yang dipakai:**

- `US-xx` user story, `FR-xx` functional requirement, `OQ-xx` open question.
- Target angka di bagian 9 ditandai **provisional** karena belum ada baseline.

---

## 1. Problem statement

Marauder menjual pengalaman belanja untuk pasangan dengan bantuan machine learning, tetapi brief tidak menyebut adanya situs yang bisa dipakai pembeli untuk melihat produk, menilai kecocokan, dan membeli. Tanpa permukaan itu, tiga pihak dirugikan.

**Pasangan sebagai pembeli.** Keputusan membeli perlengkapan rumah dilakukan berdua, tetapi situs retail umum dibangun untuk satu pembeli: satu harga besar, tombol beli, dan diskon sebagai daya tarik. Pasangan harus menyalin tautan, mengirim tangkapan layar, lalu membandingkan manual. Akibatnya pembelian sering tertunda atau salah pilih, dan biaya kesalahannya lebih besar karena barang rumah dipakai bertahun-tahun.

**Marauder sebagai bisnis.** Brief menempatkan machine learning sebagai pembeda utama, tetapi pembeda itu tidak bisa dilihat, dicoba, atau dipercaya lewat halaman yang hanya memuat daftar produk tanpa konteks. Tanpa halaman produk yang meyakinkan dan jalan menuju pembelian, brand hanya bersaing di harga dan promosi, bukan di nilai.

**Tim produk dan model.** Tanpa situs, tidak ada sinyal perilaku (produk apa yang dibuka, pasangan mana yang dipertimbangkan bersama, di titik mana pembeli berhenti). Model rekomendasi tidak punya data untuk memperbaiki diri, sehingga klaim "machine learning" tidak punya bukti operasional.

**Kerugian yang harus dicegah**

| Pihak | Kerugian | Gejala di situs |
| --- | --- | --- |
| Pasangan | Salah beli, keputusan tertunda, sulit membandingkan berdua | Tidak ada informasi bahan, ukuran, dan konsekuensi pembelian |
| Marauder | Tidak ada penjualan langsung, brand tidak terbaca | Pengunjung tidak menemukan CTA, tidak percaya pada kredibilitas |
| Tim model | Tidak ada data preferensi | Tidak ada event produk yang terekam |

**Yang belum diketahui dan tidak boleh diasumsikan**

- Situs ini baru atau menggantikan situs lama? Kalau lama, baseline perilaku bisa diambil. (`OQ-02`)
- Checkout milik Marauder atau platform lain? Ini menentukan apakah "beli" berarti transaksi di situs atau keluar situs. (`OQ-04`)
- Produk yang dijual apa, berapa harganya, dan dalam mata uang apa? (`OQ-03`)

---

## 2. Target user dan persona

**Target utama:** pasangan usia 28–40 yang sedang menyusun rumah bersama, baru menikah atau baru pindah, dengan daya beli menengah ke atas dan preferensi pada barang tahan lama dibanding barang murah.

> Kedua persona di bawah adalah **hipotesis kerja** dari deskripsi brief, bukan hasil riset. Wajib divalidasi lewat 5 wawancara singkat sebelum desain final. Detail di luar brief (pekerjaan, usia, kebiasaan) dipakai untuk menguji keputusan, bukan diklaim sebagai fakta.

**Bukan target MVP:** pembeli tunggal yang mencari barang termurah, pembeli grosir, dan pembeli yang hanya mengejar diskon.

### Persona 1 — Alya (30) & Dimas (32), "rumah pertama"

| | |
| --- | --- |
| Situasi | Menikah 8 bulan, pindah ke apartemen sewa di kota, mulai membeli peralatan rumah dari nol |
| Pekerjaan | Alya: analis keuangan. Dimas: engineer perangkat lunak. |
| Perangkat | 80% ponsel, 20% laptop saat akhir pekan |
| Kebiasaan beli | Membandingkan di Instagram dan marketplace, menyimpan tautan di chat, memutuskan bareng malam hari |
| Tujuan | Rumah terasa "milik kami", bukan kos-kosan. Barang tidak perlu banyak, tapi tidak murahan. |
| Frustrasi | Foto produk tidak konsisten, ukuran tidak jelas, harga suka berubah, dan tidak ada penjelasan kenapa barang cocok untuk dua orang |
| Pemicu | Pindah rumah, daftar nikah, hadiah pernikahan |
| Keberatan | "Kalau salah beli, mahal untuk mengganti." Takut terlihat seperti toko online biasa. |
| Yang dibutuhkan dari situs | Foto dan detail yang jujur, harga jelas, alasan pemilihan barang, jalan cepat ke pembelian |
| Ukuran sukses baginya | Menemukan satu barang dan menyelesaikan pembelian dalam satu sesi ponsel |

### Persona 2 — Rani (38) & Theo (40), "rumah kedua"

| | |
| --- | --- |
| Situasi | Sudah mapan, pindah ke rumah sendiri, mengganti peralatan lama dengan pilihan yang lebih baik |
| Pekerjaan | Rani: konsultan desain interior. Theo: dokter gigi dengan praktik sendiri. |
| Perangkat | Laptop saat riset, ponsel saat memutuskan |
| Kebiasaan beli | Riset mendalam, membaca bahan dan asal barang, membeli lebih jarang dengan nilai lebih tinggi |
| Tujuan | Barang yang tahan 10 tahun, tidak terlihat trendi sesaat, bisa dijelaskan ke tamu |
| Frustrasi | Klaim "AI" tanpa penjelasan, syarat layanan yang tidak jelas soal retur, dan tim yang tidak dikenal |
| Pemicu | Renovasi, hadiah ulang tahun pernikahan |
| Keberatan | "Saya tidak mau beli dari toko anonim." Skeptis pada rekomendasi otomatis. |
| Yang dibutuhkan dari situs | Kredibilitas: tim, cara kerja rekomendasi, syarat retur yang terbaca, kontak yang dijawab manusia |
| Ukuran sukses baginya | Yakin pada satu produk dan pada penjualnya sebelum menekan tombol beli |

**Implikasi untuk desain:** halaman harus memuat bukti (bahan, ukuran, tim, syarat), bukan hanya foto dan promosi. Nada visual harus terbaca "penting" oleh Rani, tanpa membuat Alya merasa situsnya berat atau mahal.

---

## 3. Goals dan non-goals

### Goals

| ID | Goal | Ukuran |
| --- | --- | --- |
| G1 | Menyediakan empat tipe halaman yang memungkinkan pengunjung melihat produk, menilai, dan menuju pembelian | Landing, PDP, contact, ToS live dan saling terhubung |
| G2 | Menyampaikan tiga nilai brand: penting, old-fashioned, dibantu teknologi | Uji 5 detik dan uji atribut brand lulus (bagian 9) |
| G3 | Menempatkan pembelian sebagai aksi utama | CTA beli terlihat tanpa scroll di 1440×900 dan 390×844 |
| G4 | Menampilkan katalog sebagai fokus landing | Minimal 6 produk tampil dengan nama, harga, deskripsi satu baris |
| G5 | Menjaga konsistensi monokrom oranye yang tetap aksesibel | Semua warna dari satu keluarga hue; kontras teks ≥4,5:1 |
| G6 | Membangun kredibilitas lewat tim, syarat layanan, dan kontak | About the Team, ToS, dan contact tersedia dari setiap halaman |

### Non-goals

- Bukan marketplace: tidak ada penjual pihak ketiga, tidak ada onboarding seller.
- Bukan blog atau media: tidak ada artikel, jurnal, atau komentar publik.
- Bukan aplikasi mobile native.
- Tidak ada akun pengguna, wishlist, atau program loyalitas di MVP.
- Tidak ada multi-bahasa sampai `OQ-08` dijawab.
- Tidak ada personalisasi halaman per pengguna di MVP.
- Tidak ada A/B testing otomatis di MVP.
- Tidak ada live chat di MVP.

### Anti-goals

Situs dianggap gagal meski semua halaman ada, kalau:

- Terasa seperti toko dropship: badge diskon, hitung mundur, stok "tinggal 2", atau pop-up.
- Menjual "AI" sebagai hiasan: badge, animasi, atau klaim tanpa penjelasan.
- Monokrom dipakai sampai hierarki hilang: semua tombol dan semua teks terlihat sama penting.

---

## 4. User stories

Format: **Sebagai [peran], saya ingin [aksi], supaya [manfaat].**

### 4.1 Pengunjung dan pembeli

| ID | User story | Scope |
| --- | --- | --- |
| US-01 | Sebagai pengunjung baru, saya ingin tahu dalam satu layar bahwa Marauder menjual perlengkapan rumah untuk pasangan, supaya saya tidak perlu menebak isi situs. | MVP |
| US-02 | Sebagai pasangan, saya ingin melihat daftar produk lengkap dengan harga dan keterangan singkat di halaman utama, supaya kami bisa membandingkan tanpa membuka banyak tab. | MVP |
| US-03 | Sebagai pengunjung dari ponsel, saya ingin tombol beli terlihat tanpa scroll, supaya saya bisa melanjutkan saat sedang di luar. | MVP |
| US-04 | Sebagai calon pembeli, saya ingin membuka halaman produk dengan foto besar, bahan, ukuran, dan cara perawatan, supaya saya yakin barangnya sesuai. | MVP |
| US-05 | Sebagai calon pembeli, saya ingin tahu apa yang terjadi setelah menekan tombol beli, supaya saya tidak ragu di langkah terakhir. | MVP |
| US-06 | Sebagai calon pembeli yang belum siap, saya ingin menandai produk untuk dibicarakan dulu dengan pasangan, supaya pilihan tidak hilang. | V2 |
| US-07 | Sebagai calon pembeli, saya ingin membaca syarat pembayaran, pengiriman, dan retur sebelum membeli, supaya saya tahu hak dan kewajiban saya. | MVP |
| US-08 | Sebagai calon pembeli dengan pertanyaan khusus, saya ingin mengirim pesan dan tahu kapan akan dibalas, supaya saya tidak menunggu tanpa kepastian. | MVP |
| US-09 | Sebagai pengunjung yang menilai kredibilitas, saya ingin melihat siapa tim di balik Marauder, supaya saya percaya ini bukan toko anonim. | MVP |
| US-10 | Sebagai pengunjung, saya ingin paham bagaimana machine learning dipakai di Marauder, supaya saya tidak merasa dibohongi oleh kata "AI". | MVP |
| US-11 | Sebagai pasangan, saya ingin mendapat saran barang yang cocok dipasangkan, supaya kami tidak salah kombinasi. | V2 |
| US-12 | Sebagai calon pembeli, saya ingin produk yang tidak tersedia ditandai jelas, supaya saya tidak mencoba membeli barang yang tidak ada. | MVP |
| US-13 | Sebagai pengguna keyboard atau pembaca layar, saya ingin bisa menjelajah, membaca, dan menghubungi Marauder, supaya saya setara dengan pengguna lain. | MVP |
| US-14 | Sebagai pengunjung dengan koneksi lambat, saya ingin halaman tetap terbaca dan tombol tetap bisa dipakai, supaya saya tidak menyerah menunggu. | MVP |
| US-15 | Sebagai pembeli, saya ingin mendapat konfirmasi setelah mengirim pesan, supaya saya yakin pesan terkirim. | MVP |
| US-16 | Sebagai pengunjung, saya ingin halaman tidak mengubah tata letak saat gambar dimuat, supaya saya tidak salah menekan tombol. | MVP |
| US-17 | Sebagai pasangan yang sudah pernah membeli, saya ingin melihat status pesanan saya, supaya saya tidak perlu bertanya lewat email. | Nanti |

### 4.2 Internal Marauder

| ID | User story | Scope |
| --- | --- | --- |
| US-18 | Sebagai pemilik bisnis, saya ingin melihat produk mana yang paling sering dibuka dan CTA mana yang dipakai, supaya saya bisa memperbaiki halaman. | MVP (bersyarat `OQ-15`) |
| US-19 | Sebagai pengelola konten, saya ingin menambah produk dan mengubah isi ToS tanpa deploy ulang, supaya perubahan tidak menunggu developer. | V2 |
| US-20 | Sebagai pengelola konten, saya ingin menandai produk habis atau menyembunyikannya, supaya katalog tidak pernah menampilkan barang yang tidak bisa dijual. | MVP (bersyarat `OQ-05`) |
| US-21 | Sebagai tim customer service, saya ingin pesan dari form masuk ke satu kotak masuk yang tercatat, supaya tidak ada pesan yang hilang. | MVP (bersyarat `OQ-07`) |

---

## 5. Daftar fitur

### 5.1 MVP

| ID | Fitur | Nilai | Ketergantungan |
| --- | --- | --- | --- |
| F-01 | Navigasi global dan footer | Akses ke semua halaman, CTA selalu tersedia | — |
| F-02 | Hero landing + CTA pembelian | Menjelaskan siapa Marauder dan mengarahkan ke katalog | — |
| F-03 | Daftar produk di landing | Fokus utama brief: katalog terlihat | `OQ-03` |
| F-04 | Halaman produk (satu template) | Tempat menilai produk dan menekan beli | `OQ-03`, `OQ-04`, `OQ-05` |
| F-05 | About the Team | Kredibilitas dan nilai brand | `OQ-14` |
| F-06 | Contact page + form | Pertanyaan pra-pembelian dan pasca-pembelian | `OQ-07` |
| F-07 | Terms of Service + daftar isi | Kepatuhan dan kepercayaan | `OQ-09`, `OQ-21` |
| F-08 | Responsif 320–1440 | Mayoritas traffic datang dari ponsel | — |
| F-09 | Aksesibilitas dasar | Semua pengguna bisa bertransaksi | `OQ-16` |
| F-10 | SEO dan metadata | Produk ditemukan lewat pencarian | `OQ-18` |
| F-11 | Event analytics | Mengukur funnel dan memberi data model | `OQ-15` |
| F-12 | Anggaran performa | Konversi tidak hilang karena halaman berat | — |
| F-13 | Sistem visual (token warna, tipografi, spacing, komponen) | Menjaga monokrom tetap konsisten dan aksesibel | `OQ-11`, `OQ-12` |
| F-14 | Section nilai brand + penjelasan teknologi | Menyampaikan "penting, old-fashioned, dibantu teknologi" tanpa klaim berlebihan | `OQ-13` |

### 5.2 V2

| Fitur | Alasan ditunda |
| --- | --- |
| Pairing Room (kuis 5 pertanyaan + rekomendasi) | Butuh data dan model; MVP cukup menjelaskan konsepnya secara statis |
| Wishlist / simpan untuk dibicarakan | Butuh akun atau penyimpanan lokal; layak setelah funnel dasar terukur |
| Filter dan sortir katalog | Katalog MVP kecil (≤12 produk); belum perlu |
| CMS untuk produk, tim, dan ToS | Menambah biaya; bisa manual dulu |
| Newsletter capture | Butuh alat email dan kebijakan privasi |
| Ulasan pelanggan | Butuh data transaksi nyata dan moderasi |
| Sinkronisasi stok otomatis | Tergantung platform commerce (`OQ-04`) |
| Multi-mata uang | Tergantung pasar (`OQ-03`) |

### 5.3 Nanti

- Checkout native di situs.
- Akun pelanggan dan riwayat pesanan.
- Personalisasi rekomendasi berbasis riwayat.
- Gift registry dan gift card.
- Jurnal editorial.
- Program loyalitas.
- Multi-bahasa.
- A/B testing.
- Store locator.

---

## 6. Functional requirements (MVP)

### FR-01 Navigasi global dan footer

- Wordmark Marauder, tautan Products, Team, Contact, ikon cart, dan CTA "Shop the collection".
- CTA di nav selalu mengarah ke bagian katalog di landing (`/#products`).
- Halaman aktif ditandai dengan `aria-current="page"`.
- Nav sticky di desktop ≥1024px, statis di bawah itu.
- Menu mobile: tombol dengan `aria-expanded`, tertutup dengan `Esc` dan klik di luar, fokus kembali ke tombol setelah ditutup.
- Footer wajib memuat: wordmark, tautan Products/Team/Contact/Terms, alamat studio, email, copyright, dan catatan bahwa data demo bila relevan.
- Ikon cart tampil tanpa badge jumlah. Klik mengarah ke perilaku yang ditentukan `OQ-04`.

**Acceptance:** semua tautan nav dan footer menuju halaman yang ada dan tidak menghasilkan 404.

### FR-02 Hero landing

- H1 maksimal dua baris di 1440px; menyebut kategori produk dan target pasangan.
- Satu paragraf pendukung maksimal 25 kata.
- Satu CTA utama menuju katalog; satu tautan sekunder menuju contact.
- Foto produk sebagai elemen utama, bukan ilustrasi abstrak.
- Tanpa video autoplay dan tanpa carousel.
- CTA harus terlihat penuh di 1440×900 dan 390×844.
- Ada CTA penutup sebelum footer dengan label dan tujuan yang sama.

**Acceptance:** CTA terukur berada di dalam viewport pertama pada dua ukuran tersebut.

### FR-03 Daftar produk di landing

- Menampilkan minimal 6 produk berstatus `published`.
- Setiap kartu wajib memuat: foto, nama, harga beserta mata uang, dan satu baris keterangan maksimal 80 karakter.
- Urutan mengikuti field `sort_order`; jika kosong, urutkan `is_featured` lalu `created_at` terbaru.
- Klik kartu membuka `/product/{slug}`.
- Kartu wajib bisa difokus dan diaktifkan dengan keyboard.
- Produk `sold_out` tetap tampil dengan label jelas dan tanpa tautan beli.
- Bila produk kurang dari 6, grid tetap rata kiri tanpa merentangkan kartu.
- Bila tidak ada produk `published`, tampilkan empty state dengan tautan ke contact. Halaman tidak boleh kosong atau error.

**Acceptance:** 6 produk tampil dengan informasi lengkap; tidak ada kartu dengan harga kosong.

### FR-04 Halaman produk

- Rute `/product/{slug}`. Slug tidak ditemukan menghasilkan halaman 404 yang memuat nav dan tautan ke katalog.
- Elemen wajib: breadcrumb, nama, harga, deskripsi, galeri (1 foto utama + maksimal 4 thumbnail), pilihan varian bila ada, CTA beli, catatan pengiriman, dan tautan ke ToS.
- Thumbnail dapat dipilih dengan klik dan keyboard; foto utama punya `alt` deskriptif.
- Bila varian mengubah harga, harga wajib ikut berubah saat varian dipilih.
- CTA beli mengikuti aturan:
  - `in_stock` + tautan checkout tersedia: tombol aktif, label "Add to cart".
  - `sold_out`: tombol tidak aktif, label "Sold out", disertai tautan "Notify me" hanya bila `OQ-05` menyetujui.
  - Tautan checkout belum ditentukan: tombol tidak boleh aktif dan wajib menampilkan status "Checkout belum tersedia".
- Detail bahan, ukuran, dan perawatan berada dalam accordion yang bisa dioperasikan keyboard.
- Harga ditampilkan tanpa angka palsu dan tanpa coretan harga promo.

**Acceptance:** tiga produk contoh dapat dibuka, masing-masing menampilkan harga dan CTA sesuai status stok.

### FR-05 About the Team

- Section berada di landing dengan anchor `#team`, bukan halaman terpisah.
- Memuat minimal 3 anggota: foto, nama, peran, dan bio maksimal 40 kata.
- Satu paragraf pengantar tentang cara tim memilih produk.
- Tautan ke contact page.
- Bila foto tim belum tersedia, gunakan placeholder yang tidak merusak tata letak dan tandai sebagai demo.

**Acceptance:** section lengkap, dapat dicapai dari nav, dan tidak memuat teks lorem ipsum.

### FR-06 Contact page dan form

- Field: nama (2–80 karakter), email (format valid, maks 254), topik (enum: order, product, press, partnership, other), nomor pesanan (opsional, maks 40), pesan (20–2000 karakter), checkbox persetujuan (wajib).
- Validasi di klien dan server. Pesan error spesifik per field, bukan "terjadi kesalahan".
- State form: idle, submitting, success, error.
- Saat submitting, tombol nonaktif untuk mencegah kiriman ganda.
- Jika gagal, isi form tidak boleh hilang; tampilkan cara mencoba lagi dan alamat email alternatif.
- Setelah sukses, tampilkan konfirmasi berisi estimasi waktu balasan.
- Perlindungan spam: honeypot + rate limit 5 kiriman per jam per IP. Data mentah IP tidak disimpan; simpan hash.
- Tujuan pengiriman pesan mengikuti `OQ-07`.

**Acceptance:** submit valid menampilkan sukses; email salah, pesan 10 karakter, dan checkbox kosong menampilkan error yang tepat.

### FR-07 Terms of Service

- Rute `/terms`, dapat diakses dari footer dan dari halaman produk.
- Wajib memuat tanggal berlaku dan versi dokumen.
- Daftar isi dengan tautan anchor ke setiap bagian.
- Bagian minimum: orders & payment, shipping, returns & exchanges, privacy, intellectual property, liability, changes to terms. Isi final menunggu `OQ-09` dan `OQ-21`.
- Di mobile, daftar isi menjadi accordion.
- Isi harus bisa dibaca tanpa JavaScript.

**Acceptance:** semua tautan daftar isi menggulir ke bagian yang benar; tidak ada bagian kosong.

### FR-08 Responsif

- Breakpoint acuan: 1440, 1024, 768, 390. Wajib diuji juga pada 360 dan 320.
- Tidak boleh ada horizontal overflow pada semua lebar.
- Tap target minimal 44×44px.
- Body text minimal 16px di mobile.
- Grid produk: 3 kolom di ≥1024, 2 kolom di 768–1023, 1 kolom di <768.
- Gambar produk tidak boleh gepeng; gunakan rasio tetap 4:5.

**Acceptance:** tidak ada overflow di 320–1440; tidak ada teks terpotong.

### FR-09 Aksesibilitas

- Target minimum WCAG 2.1 AA, menunggu konfirmasi `OQ-16`.
- Kontras teks normal ≥4,5:1; teks besar ≥3:1.
- Semua elemen interaktif dapat dicapai dengan Tab dan punya focus ring yang terlihat.
- Form memakai `label` eksplisit, error terhubung lewat `aria-describedby`.
- Gambar punya `alt`; gambar dekoratif memakai `alt=""`.
- Struktur heading satu `h1` per halaman, tanpa melompati level.
- Ada skip link ke konten utama.
- `prefers-reduced-motion` mematikan animasi non-esensial.

**Acceptance:** audit keyboard dan pembaca layar dasar lulus tanpa hambatan memblokir.

### FR-10 SEO dan metadata

- Judul unik dan meta description untuk setiap halaman dan produk.
- URL produk memakai slug, tanpa ID numerik.
- Open Graph dan Twitter card, dengan gambar 1200×630.
- Structured data `Product` untuk halaman produk: nama, gambar, deskripsi, harga, mata uang, ketersediaan.
- `sitemap.xml` dan `robots.txt`.
- Halaman 404 kustom dengan tautan ke katalog.
- Bahasa halaman mengikuti `OQ-08` dan konsisten di seluruh situs.

**Acceptance:** rich result test tidak menemukan error pada halaman produk.

### FR-11 Event analytics

- Event minimum: `view_home`, `view_product` (product_id, slug), `click_product_card`, `click_cta` (location: nav, hero, closing, pdp), `view_terms`, `submit_contact` (topic), `form_error` (field).
- Tidak ada data pribadi di properti event.
- Event dikirim hanya setelah persetujuan pengguna bila diwajibkan `OQ-15`.
- Dashboard minimum: funnel home → produk → CTA, dan jumlah submit kontak.

**Acceptance:** setiap event tercatat sekali per aksi dan dapat difilter per halaman.

### FR-12 Performa

- LCP ≤2,5 detik pada p75 koneksi 4G; CLS ≤0,1; INP ≤200ms.
- Gambar memakai `srcset`/`sizes`, format modern, dan `loading="lazy"` kecuali gambar hero.
- Font memakai `font-display: swap` dan maksimal dua keluarga.
- Tidak ada JavaScript pihak ketiga yang memblokir render.
- Halaman ToS dan contact harus bisa dibaca dengan JavaScript dimatikan.

**Acceptance:** Lighthouse mobile ≥90 untuk Performance, ≥95 untuk Accessibility.

### FR-13 Sistem visual

- Satu keluarga hue oranye untuk seluruh UI, termasuk state error dan sukses. Membedakan status memakai ikon, teks, dan bobot, bukan warna baru.
- Token minimum: 6 tint/shade oranye, 1 warna latar paper, 1 warna teks utama.
- Semua pasangan teks/latar wajib lolos kontras sebelum dipakai.
- Tipografi maksimal dua keluarga: satu display, satu untuk teks dan UI.
- Spacing memakai skala 4/8/12/16/24/32/48/64/96.
- Komponen bersama wajib punya state default, hover, focus, disabled.
- Definisi "monokrom" dan "old-fashioned" menunggu `OQ-11` dan `OQ-12`.

**Acceptance:** style guide memuat token, contoh penerapan, dan pasangan warna yang lolos kontras.

### FR-14 Section nilai brand dan penjelasan teknologi

- Landing wajib punya satu blok yang menyatakan tiga nilai brand: penting, old-fashioned, dibantu teknologi.
- Penjelasan teknologi maksimal 80 kata, menyebut fungsi nyata (membantu memilih atau memasangkan produk), bukan klaim abstrak.
- Dilarang memakai badge "AI", "powered by AI", animasi partikel, atau angka akurasi tanpa sumber.
- Bila `OQ-13` belum terjawab, copy memakai placeholder yang ditandai dan tidak boleh tayang.
- Blok ini tidak memuat CTA baru; CTA pembelian tetap di hero dan penutup.

**Acceptance:** tiga nilai brand tertulis eksplisit; tidak ada klaim teknologi tanpa penjelasan fungsi.

---

## 7. Sketsa data model

Stack belum ditentukan (`OQ-01`), jadi tipe ditulis logis. Semua tabel punya `created_at` dan `updated_at`.

### product

| Field | Tipe | Aturan |
| --- | --- | --- |
| id | PK | — |
| slug | string(80) | unik, huruf kecil, tanda hubung, dipakai di URL |
| name | string(120) | wajib |
| tagline | string(160) | wajib, maks 80 karakter tampil |
| description | text | wajib |
| price_minor | integer | harga dalam satuan terkecil; wajib > 0 |
| currency | char(3) | ISO 4217; menunggu `OQ-03` |
| status | enum | `draft`, `published`, `archived` |
| stock_status | enum | `in_stock`, `low_stock`, `sold_out`, `unknown`; aktualisasi menunggu `OQ-05` |
| is_featured | boolean | default false |
| sort_order | integer | nullable |
| checkout_url | string(2048) | nullable; diisi bila checkout eksternal (`OQ-04`) |

**Index:** `slug` unik, `status`, `sort_order`.

### product_image

| Field | Tipe | Aturan |
| --- | --- | --- |
| id | PK | — |
| product_id | FK → product | on delete cascade |
| path | string(2048) | wajib |
| alt | string(160) | wajib, deskriptif |
| width, height | integer | wajib, mencegah layout shift |
| sort_order | integer | urutan tampil |

**Index:** `(product_id, sort_order)`.

### product_variant

| Field | Tipe | Aturan |
| --- | --- | --- |
| id | PK | — |
| product_id | FK → product | on delete cascade |
| label | string(60) | wajib, mis. nama warna |
| sku | string(60) | unik, nullable |
| price_minor | integer | nullable; kosong berarti ikut harga produk |
| stock_status | enum | sama dengan product |
| sort_order | integer | — |

Dipakai hanya kalau produk punya varian. Menunggu `OQ-05`.

### team_member

| Field | Tipe | Aturan |
| --- | --- | --- |
| id | PK | — |
| name | string(80) | wajib |
| role | string(80) | wajib |
| bio | string(280) | wajib, maks 40 kata |
| photo_path | string(2048) | nullable |
| photo_alt | string(160) | wajib bila ada foto |
| sort_order | integer | — |
| is_active | boolean | default true |

### contact_submission

| Field | Tipe | Aturan |
| --- | --- | --- |
| id | PK | — |
| name | string(80) | wajib |
| email | string(254) | wajib, format valid |
| topic | enum | order, product, press, partnership, other |
| order_ref | string(40) | nullable |
| message | text | 20–2000 karakter |
| consent_at | timestamp | wajib, waktu persetujuan |
| status | enum | `new`, `read`, `replied`, `closed` |
| ip_hash | string(64) | untuk rate limit, bukan IP mentah |

**Index:** `created_at`, `status`.

### legal_document

| Field | Tipe | Aturan |
| --- | --- | --- |
| id | PK | — |
| slug | string(40) | unik, mis. `terms` |
| title | string(120) | wajib |
| body_md | text | markdown, wajib |
| version | string(20) | wajib |
| effective_at | date | wajib |

### pairing_session (V2, belum dibangun)

| Field | Tipe | Aturan |
| --- | --- | --- |
| id | PK | — |
| answers | jsonb | lima jawaban, tanpa data pribadi |
| recommended_product_ids | array | hasil rekomendasi |
| created_at | timestamp | dipakai untuk evaluasi model |

### Entitas yang sengaja belum dibuat

- `order`, `customer`, `cart`: bergantung `OQ-04`.
- `category`: katalog MVP tunggal, tanpa kategori.
- `review`: butuh transaksi nyata dan moderasi.
- `page` generik: hanya ToS yang dibutuhkan di MVP; CMS menyusul.

---

## 8. Edge case dan failure state

| Kondisi | Perilaku wajib |
| --- | --- |
| Katalog kosong atau semua produk `draft` | Landing menampilkan empty state + tautan contact; tidak error |
| Produk kurang dari 6 | Grid rata kiri, kartu tidak direntangkan |
| Produk `sold_out` dibuka langsung dari URL | Halaman tetap tampil, CTA nonaktif bertuliskan "Sold out", harga tetap terlihat |
| Harga kosong atau 0 | Produk tidak boleh `published`; validasi di level data, bukan sekadar sembunyikan UI |
| Slug produk berubah | URL lama mengarah 301 ke slug baru, atau 404 kustom bila tidak ada pemetaan |
| Gambar gagal dimuat | Tampilkan placeholder dengan teks alternatif; ruang gambar tetap, tidak ada layout shift |
| Nama produk 120 karakter | Maksimal tiga baris, ellipsis setelahnya; harga tetap sejajar |
| JavaScript mati | Konten, nav, dan tautan tetap berfungsi; accordion memakai elemen native |
| Form kontak dikirim ganda | Tombol nonaktif selama submit; kiriman kedua diabaikan server |
| Form kontak gagal jaringan | Isi form dipertahankan, pesan error jelas, email alternatif ditampilkan |
| Email tidak valid / pesan terlalu pendek | Error spesifik per field, fokus pindah ke field pertama yang salah |
| Spam atau rate limit terlampaui | Balasan 429 dengan pesan netral, tanpa membocorkan aturan internal |
| Checkout belum dikonfigurasi (`OQ-04`) | Tombol beli nonaktif + status "Checkout belum tersedia"; tidak boleh menaut ke halaman kosong |
| Checkout eksternal menolak atau gagal | Pengguna kembali ke PDP dengan pesan; tidak kehilangan pilihan varian |
| Varian dengan harga berbeda | Harga dan structured data ikut berubah saat varian dipilih |
| ToS diperbarui | Versi dan tanggal berubah; pengguna lama tidak dipaksa menyetujui ulang di MVP |
| Anchor ToS salah | Tautan daftar isi memakai slug heading; link mati dianggap bug |
| Layar 320px | Tidak ada overflow; nav jadi menu; tombol selebar container |
| Teks diperbesar 200% | Tidak ada konten terpotong; tombol tetap dapat ditekan |
| Pengguna hanya keyboard | Semua alur sampai submit kontak dan buka PDP selesai tanpa mouse |
| Gambar tim belum ada | Placeholder netral dan ditandai demo; tata letak tidak berubah |
| Halaman 404 | Ada nav, penjelasan singkat, dan tautan ke katalog/contact |
| Analytics diblokir | Situs tetap berfungsi penuh; tidak ada error di console |

---

## 9. Success metrics

Semua target **provisional** sampai `OQ-02` dan `OQ-15` dijawab. Tanpa analytics, metrik tidak dapat diukur dan bagian ini tidak berlaku.

### 9.1 Funnel

| Metrik | Definisi | Target awal |
| --- | --- | --- |
| Scroll ke katalog | Sesi yang mencapai `#products` / sesi landing | ≥70% |
| Klik produk | `click_product_card` / sesi landing | ≥25% |
| PDP → CTA | `click_cta` di PDP / `view_product` | ≥12% |
| CTA → checkout | Checkout start / klik CTA beli | ≥35% (bila `OQ-04` jelas) |
| Submit kontak | `submit_contact` / `view_contact` | ≥2% |
| Buka ToS dari PDP | `view_terms` dengan referer produk / `view_product` | 5–15% |

### 9.2 Kualitas halaman

| Metrik | Target |
| --- | --- |
| Bounce rate landing | <55% |
| LCP p75 mobile | ≤2,5 detik |
| CLS | ≤0,1 |
| Error rate form kontak | <10% submit |
| 404 rate | <1% sesi |
| Console error | 0 di semua halaman |

### 9.3 Uji persepsi brand (5 peserta, moderasi ringan)

| Uji | Lulus bila |
| --- | --- |
| 5 detik: "Marauder menjual apa?" | ≥4 dari 5 menyebut perlengkapan rumah untuk pasangan |
| Atribut: pilih 3 kata | ≥3 dari 5 memilih "terpercaya/klasik/terpilih", bukan "murah/modern/generik" |
| Monokrom | 5 dari 5 menyebut palet oranye, tanpa warna lain |
| CTA | ≥4 dari 5 dapat menyebut aksi utama setelah melihat layar pertama |

---

## 10. Open questions

| ID | Pertanyaan | Kenapa penting | Memblokir |
| --- | --- | --- | --- |
| OQ-01 | Deliverable berupa desain saja, situs statis, atau situs dengan backend? | Menentukan seluruh arsitektur dan estimasi | Semua FR |
| OQ-02 | Situs baru atau menggantikan situs lama? Ada data analytics baseline? | Menentukan target metrik dan strategi migrasi URL | Bagian 1, 9 |
| OQ-03 | Produk yang dijual apa, berapa jumlah SKU, harga, dan mata uangnya? | Tanpa katalog nyata, FR-03/FR-04 tidak bisa diuji | F-03, F-04, data model |
| OQ-04 | Checkout milik siapa: native, Shopify, atau tautan eksternal? | Menentukan arti "beli" dan keberadaan cart/order | FR-04, data model |
| OQ-05 | Apakah stok dan varian dilacak? Dari mana sumbernya? | Menentukan state sold out dan pilihan varian | FR-03, FR-04 |
| OQ-06 | Apakah produk dan isi halaman dikelola lewat CMS? | Menentukan kebutuhan admin dan biaya | F-03, F-04, US-19 |
| OQ-07 | Form kontak dikirim ke mana: email, helpdesk, atau CRM? | Menentukan integrasi dan SLA balasan | FR-06, US-21 |
| OQ-08 | Bahasa situs: Inggris, Indonesia, atau dua-duanya? | Menentukan copy, SEO, dan struktur URL | Semua halaman |
| OQ-09 | Entitas legal mana yang menerbitkan syarat layanan? Perlukah kebijakan privasi terpisah? | Menentukan isi ToS dan kepatuhan | FR-07 |
| OQ-10 | Apakah logo, foto produk, dan foto tim tersedia? | Menentukan kebutuhan produksi aset | FR-02, FR-05 |
| OQ-11 | "Monokrom" berarti satu hue dengan tint/shade, atau benar-benar satu warna? | Menentukan palet dan kontras | FR-13 |
| OQ-12 | Gaya "old-fashioned" mengacu ke era atau referensi apa? | Menentukan tipografi dan ornamen | FR-13 |
| OQ-13 | Klaim machine learning mana yang boleh ditulis? Ada bukti yang bisa dirujuk? | Menghindari klaim menyesatkan | FR-02, copy landing |
| OQ-14 | Anggota tim yang ditampilkan nyata atau fiktif? | Menentukan kebutuhan foto dan persetujuan | FR-05 |
| OQ-15 | Alat analytics apa yang dipakai, dan perlukah banner persetujuan? | Menentukan pengukuran dan kepatuhan | FR-11, bagian 9 |
| OQ-16 | Target aksesibilitas: WCAG 2.1 AA atau cukup praktik terbaik? | Menentukan cakupan audit dan perbaikan | FR-09 |
| OQ-17 | Browser dan perangkat minimum yang didukung? | Menentukan baseline CSS/JS | FR-08 |
| OQ-18 | Domain, hosting, dan siapa yang mengelola? | Menentukan deployment dan SEO | FR-10 |
| OQ-19 | Deadline dan kapasitas kerja untuk versi ini? | Menentukan urutan potong scope | Rencana kerja |
| OQ-20 | Harga yang tampil sudah termasuk pajak dan ongkir atau belum? | Menghindari kejutan harga dan masalah kepatuhan | FR-04, FR-07 |
| OQ-21 | Siapa yang meninjau dan menyetujui isi ToS? | Menentukan risiko legal | FR-07 |
| OQ-22 | Apakah "purchase" boleh dimulai dari wishlist/registri, atau harus langsung checkout? | Menentukan prioritas V2 | US-06, F-04 |
