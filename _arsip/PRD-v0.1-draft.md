# PRD — Website Marauder

| | |
| --- | --- |
| Klien | Marauder (machine learning + retail) |
| Jenis pekerjaan | Desain website, 4 tipe halaman |
| Deliverable | Landing page, halaman produk, contact, terms of service |
| Deadline | 3 hari kerja |
| Versi dokumen | 0.1 — draf untuk direview |
| Tanggal | 10 November 2026 |

---

## 1. Masalah & peluang

Marauder menjual barang lewat kombinasi machine learning dan kemudahan pemakaian, dengan pasangan sebagai target utama. Masalahnya, klaim teknologi mudah jatuh jadi halaman startup yang dingin, sementara brief minta kesan **penting** dan **old-fashioned**. Dua hal itu gampang saling bertabrakan: "penting" bisa jadi kaku, "old-fashioned" bisa jadi usang.

Peluangnya justru di situ. Kalau teknologi disembunyikan di balik bahasa dan tata letak yang tenang, brand terasa seperti toko lama yang punya cara kerja modern. Halaman produk jadi katalog, bukan feed diskon.

**Tujuan**

1. Pengunjung paham Marauder menjual apa dalam satu layar pertama.
2. Daftar produk jadi fokus utama halaman, bukan hero yang menelan seluruh layar.
3. Ada satu aksi jelas menuju pembelian di setiap halaman.
4. Nilai brand (penting, old-fashioned, dibantu teknologi) terasa lewat visual dan copy, bukan lewat badge "AI-powered".

**Kriteria keberhasilan desain**

- CTA utama terlihat di 1440×900 dan 390×844 tanpa scroll.
- Minimal enam produk tampil dengan nama, harga, dan satu baris keterangan.
- Section About the Team ada di landing page dan tidak terdorong ke bawah halaman.
- Palet tetap monokrom oranye: tidak ada biru, hijau, atau abu-abu kebiruan di UI.
- Halaman ToS bisa dipindai lewat daftar isi, bukan dinding teks.

**Metrik produk setelah rilis** (indikatif)

| Metrik | Target awal |
| --- | --- |
| Klik CTA beli dari landing | ≥ 12% sesi |
| Scroll sampai daftar produk | ≥ 70% |
| Selesai pairing quiz | ≥ 35% yang mulai |
| Submit form kontak | ≥ 2% sesi |

---

## 2. Audiens

Pasangan usia 28–40, baru menikah atau baru pindah rumah bersama. Mereka belanja perlengkapan rumah, bukan barang diskon. Yang dicari: barang yang tahan lama, terasa dipilih, dan tidak sama dengan katalog massal.

Mereka membuka situs di ponsel saat santai dan di desktop saat membandingkan. Keputusan beli biasanya dibicarakan berdua, jadi halaman harus enak dibaca bersama, bukan cuma cepat diklik.

---

## 3. Asumsi (perlu dikonfirmasi sebelum final)

1. Deliverable berupa **desain** (Figma) untuk 4 halaman, bukan implementasi kode. Deadline 3 hari tidak cukup untuk membangun situs berfungsi.
2. Copy situs berbahasa **Inggris**, mengikuti nada brand. Dokumen ini berbahasa Indonesia.
3. Kategori produk: **perlengkapan rumah untuk dua orang** (keramik, linen, gelas, lilin). Brief tidak menyebut produknya.
4. Mata uang **USD**. Belum ada katalog resmi.
5. Machine learning ditampilkan sebagai **Pairing Room**: kuis lima pertanyaan yang memberi rekomendasi barang berpasangan. Tidak ada backend, jadi di desain hanya alur dan hasilnya.
6. Pembayaran dan cart berada di luar scope. CTA mengarah ke halaman produk, bukan checkout.
7. Nama tim, alamat, dan kontak masih fiktif dan ditandai sebagai demo di footer.

---

## 4. Scope

**Termasuk**

- Landing page (desktop + mobile): hero, daftar produk, cara kerja, nilai brand, About the Team, CTA, footer.
- Halaman produk: satu template, dipakai untuk tiga contoh produk.
- Contact page: form, alamat studio, jam buka, kanal lain.
- Terms of Service: daftar isi + delapan bagian.
- Komponen bersama: nav, footer, product card, tombol, form field, accordion, badge.
- Panduan gaya ringkas: palet, tipografi, spacing, aturan foto.

**Tidak termasuk**

- Cart, checkout, akun, halaman pembayaran.
- Halaman kategori/listing terpisah (daftar produk ada di landing).
- Journal/blog, FAQ terpisah, halaman karier.
- Backend kuis, integrasi CMS, implementasi HTML/CSS.
- Versi tablet khusus. Layout tablet mengikuti aturan responsif, tidak didesain frame sendiri.

---

## 5. Struktur situs

```
/                 Landing: produk + About the Team + CTA
/product/{slug}   Halaman produk (template, 3 contoh)
/contact          Kontak
/terms            Terms of Service
```

Navigasi utama: Products, Team, Contact. Di kanan: cart (ikon, nonaktif), CTA "Shop the collection".

URL produk memakai slug: `coupe-plate-set`, `two-handled-vessel`, `the-pairing-box`.

---

## 6. Landing page

Urutan section dan isi:

1. **Navigation** — wordmark Marauder, tiga tautan, ikon cart, CTA. Tinggi maksimal 72px, garis bawah tipis.
2. **Hero** — judul dua baris, satu paragraf pendek, CTA "Shop the collection", dan satu foto produk besar. Fokus utama tetap produk: foto harus barang nyata, bukan ilustrasi abstrak.
3. **Product list** — grid 3×2 di desktop, 1 kolom di mobile. Enam produk, masing-masing: foto, nama, harga, satu baris keterangan. Ada tautan "View all" hanya kalau nanti ada halaman listing; untuk sekarang dihilangkan.
4. **The Pairing Room** — penjelasan kuis ML dalam tiga langkah: jawab lima pertanyaan, model mencocokkan, terima saran barang. Tombol "Start the pairing". Ini satu-satunya tempat kata "machine learning" muncul sebagai penjelas, bukan badge.
5. **Why Marauder** — tiga nilai brand: objek yang dibuat untuk dipakai lama, pilihan yang tidak ramai, dan bantuan teknologi yang tidak berisik.
6. **About the Team** — foto tim, tiga orang dengan nama dan peran, satu paragraf tentang cara mereka memilih barang. Ada tautan ke contact.
7. **Closing CTA** — satu kalimat, tombol "Shop the collection", tautan sekunder "Talk to us".
8. **Footer** — wordmark, kolom Products / Company / Help, alamat studio, copyright, catatan demo.

Aturan hierarki: hero tidak boleh lebih dari 70vh. Daftar produk harus mulai terlihat di layar pertama desktop.

**Copy kunci (draf)**

- H1: "Objects for the life you're building."
- Sub: "Considered pieces for couples, chosen by hand and paired with care. Our model learns what belongs together; we pack it and send it to your door."
- CTA utama: "Shop the collection". Sekunder: "Talk to us".
- Pairing Room: "Five questions. One room of objects that fit."
- About the Team: "We are three people who believe a home is assembled slowly."
- Tim (fiktif): Ines Marchetti, Founder & Creative Director; Theo Aranda, Head of Objects; Priya Raman, Machine Learning Lead.

---

## 7. Halaman produk

Satu template, tiga instance.

1. **Breadcrumb** — Home / Products / nama produk.
2. **Galeri** — satu foto utama 4:5, dua thumbnail. Klik thumbnail mengganti foto utama.
3. **Info** — nama, harga, satu paragraf deskripsi, pilihan varian (warna/warna kemasan) bila ada, tombol "Add to cart", tautan sekunder "Add to registry", catatan pengiriman.
4. **Paired with** — dua kartu rekomendasi dari Pairing Room, dengan alasan singkat ("sering dipilih bersama X").
5. **Details** — accordion: bahan, ukuran, perawatan, pengiriman & retur.
6. **Closing CTA** — kembali ke daftar produk.

Produk contoh:

| Slug | Nama | Harga | Keterangan |
| --- | --- | --- | --- |
| `coupe-plate-set` | Coupe Plate Set No. 01 | $64 | Stoneware, empat piring, glasir matte |
| `two-handled-vessel` | Two-Handled Vessel | $82 | Vas keramik, dibuat di studio kecil |
| `the-pairing-box` | The Pairing Box | $120 | Kotak hadiah berisi tiga objek pilihan model |

---

## 8. Contact page

- Judul dan satu paragraf: siapa yang akan membalas dan dalam berapa lama.
- Form: nama, email, topik (dropdown: order, registry, press, other), pesan, checkbox persetujuan. Semua wajib kecuali nomor pesanan.
- Info studio: alamat, jam buka, email, nomor telepon (format internasional).
- Peta: placeholder abu-abu dengan label, bukan embed.
- Catatan demo: form ini tidak mengirim data.

---

## 9. Terms of Service

- Meta: "Last updated 10 November 2026" + estimasi waktu baca.
- Daftar isi menempel di kiri pada desktop, accordion di mobile.
- Delapan bagian: Orders & payment, Shipping, Returns & exchanges, Gift registry, Privacy, Intellectual property, Liability, Changes to these terms.
- Nada bahasa manusia, kalimat pendek. Bukan salinan template hukum.
- Satu tautan kembali ke contact di bagian bawah.

---

## 10. Arah visual

### 10.1 Warna (monokrom oranye)

| Token | Hex | Pemakaian |
| --- | --- | --- |
| Ember 900 | `#3B1602` | Teks utama, garis tegas |
| Ember 800 | `#5A2306` | Judul sekunder, hover |
| Ember 700 | `#7C3208` | Tombol utama, tautan |
| Ember 600 | `#A64B12` | Aksen, label kecil |
| Orange 500 | `#C95B1A` | Ilustrasi, badge, garis dekoratif |
| Orange 300 | `#E9A876` | Latar blok, hover state |
| Orange 100 | `#F9E4D2` | Latar section, kartu |
| Paper | `#FCF6EF` | Latar halaman |
| White | `#FFFFFF` | Hanya untuk kartu di atas paper |

Aturan:

- Tidak ada warna di luar keluarga oranye. Status error memakai Ember 900 + ikon + teks tebal, bukan merah.
- Teks kecil tidak boleh pakai Orange 500 di atas Paper (kontras ±3,2:1). Orange 500 hanya untuk elemen dekoratif atau teks ≥ 24px bold.
- Tombol utama: latar Ember 700, teks Paper. Hover Ember 800.
- Foto dibuat duotone oranye atau dibiarkan hangat dengan overlay tipis, supaya halaman tetap monokrom.

### 10.2 Tipografi

Dua keluarga, kontras jelas antara "lama" dan "sekarang":

- **Judul:** Bodoni Moda, weight 500/600. Serif dengan kontras tinggi, terasa seperti katalog department store lama.
- **Isi & UI:** Inter, weight 400/500/600.

| Peran | Desktop | Mobile | Line height |
| --- | --- | --- | --- |
| H1 | 64/66 | 40/44 | 1.05 |
| H2 | 40/46 | 30/36 | 1.15 |
| Judul produk | 22/28 | 20/26 | 1.25 |
| Harga | 18/24 | 17/22 | 1.2 |
| Body | 17/28 | 16/26 | 1.6 |
| Label kecil (small caps) | 12/16, tracking .12em | 11/15 | 1.2 |

Aturan: maksimal dua bobot serif, tidak ada italic dekoratif di tombol. Small caps hanya untuk label, bukan paragraf.

### 10.3 Spacing, garis, dan bentuk

- Skala 4/8/12/16/24/32/48/64/96/128.
- Container 1240px, gutter 24px desktop dan 20px mobile.
- Section padding 96px desktop, 56px mobile.
- Radius minimal: 4px untuk tombol dan kartu, 0 untuk foto dan tabel. Kesan lama datang dari garis tipis, bukan sudut bulat.
- Garis 1px Ember 900 dengan opacity 20% untuk pemisah.
- Shadow hampir tidak dipakai. Kalau perlu, satu level tipis.
- Detail old-fashioned: nomor section (`01 — Collection`), garis ganda di bawah hero, label small caps, dan stempel "Est. 2026" di footer. Maksimal tiga elemen dekoratif per halaman.

### 10.4 Foto

Gaya editorial, cahaya alami, latar paper. Tangan, meja, dan ruang rumah lebih baik daripada model tersenyum. Duotone oranye dengan grain halus untuk menyatukan warna. Rasio 4:5 untuk produk, 3:2 untuk editorial, 1:1 untuk foto tim.

---

## 11. Komponen

| Komponen | Varian / state |
| --- | --- |
| Button | primary, secondary, ghost; default, hover, focus, disabled |
| Product card | default, hover, sold out |
| Product gallery | foto 1–3 aktif |
| Nav | desktop, mobile (menu tertutup/terbuka), cart kosong |
| Section header | dengan nomor dan tanpa nomor |
| Team card | foto, nama, peran |
| Form field | default, focus, error, terisi |
| Accordion | tertutup, terbuka |
| Badge | "New", "Pairing pick" |
| Footer | desktop 4 kolom, mobile bertumpuk |

Semua komponen pakai auto layout, penamaan `Nama/Varian/State`, dan tidak ada teks hardcode di dalam instance yang seharusnya bisa diganti.

---

## 12. Responsif

| Viewport | Perilaku |
| --- | --- |
| 1440 | Grid produk 3 kolom, galeri produk dua kolom (foto + info) |
| 1024 | Grid produk 3 kolom lebih rapat, spacing turun |
| 768 | Grid produk 2 kolom, galeri tetap dua kolom |
| 390 | Grid 1 kolom, galeri bertumpuk, nav jadi menu, tabel ToS jadi accordion, CTA lebar penuh |

Yang wajib dicek di 390: judul tidak memotong kata, harga tidak pecah baris, tombol tidak menempel tepi, dan foto produk tidak gepeng.

---

## 13. Deliverable & struktur file

**Frame Figma**

- `01 Cover`
- `02 Landing / Desktop 1440` (default, menu terbuka)
- `03 Landing / Mobile 390`
- `04 Product / Desktop 1440` (3 instance produk)
- `05 Product / Mobile 390`
- `06 Contact / Desktop + Mobile`
- `07 Terms / Desktop + Mobile`
- `08 Components`
- `09 Style guide`

**Ekspor untuk portofolio**

- Landing desktop dan mobile (PNG 2×).
- Satu halaman produk desktop.
- Contact dan ToS desktop.
- Style guide satu gambar.
- File Figma view-only.

---

## 14. Rencana 3 hari

| Hari | Pekerjaan | Output |
| --- | --- | --- |
| 1 pagi | Tetapkan palet, tipografi, copy produk, wireframe landing | Style tile + wireframe |
| 1 sore | High fidelity landing desktop, komponen nav/produk/footer | Frame landing desktop |
| 2 pagi | Halaman produk desktop + komponen galeri dan accordion | Frame produk |
| 2 sore | Contact + ToS desktop, komponen form | Frame contact & ToS |
| 3 pagi | Mobile landing, produk, contact, ToS | Empat frame mobile |
| 3 sore | QA kontras dan overflow, style guide, ekspor, rapikan file | File final |

Tidak ada buffer. Kalau molor, potong dengan urutan: mobile ToS → mobile contact → jumlah produk di landing (6 jadi 4).

---

## 15. Acceptance criteria

- [ ] Landing punya nav, hero, enam produk, Pairing Room, nilai brand, About the Team, CTA, footer.
- [ ] CTA beli terlihat di 1440×900 dan 390×844 tanpa scroll.
- [ ] Daftar produk mulai terlihat di layar pertama desktop.
- [ ] Tiga halaman produk memakai satu template yang konsisten.
- [ ] Contact punya form lengkap dengan state error dan sukses.
- [ ] ToS punya daftar isi dan delapan bagian, terbaca di desktop dan mobile.
- [ ] Semua warna berasal dari palet oranye; tidak ada aksen warna lain.
- [ ] Kontras teks minimal 4,5:1 untuk teks normal, 3:1 untuk teks besar.
- [ ] Tidak ada overflow horizontal di 390, dan tidak ada teks terpotong.
- [ ] Komponen punya state default, hover, focus, error di mana relevan.
- [ ] Copy memakai teks asli, bukan lorem ipsum.

---

## 16. Risiko

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Monokrom oranye bikin semua elemen setara | Hierarki hilang, CTA tidak menonjol | Bedakan lewat bobot, ukuran, dan garis, bukan warna baru |
| "Old-fashioned" jatuh ke kitsch | Brand terasa murah | Batasi ornamen, gunakan serif hanya untuk judul |
| Klaim ML terasa gimmick | Kepercayaan turun | Jelaskan sebagai alat bantu pilih, tanpa angka palsu |
| 3 hari untuk 4 halaman | Mobile ToS jadi korban | Kerjakan desktop dulu, mobile dengan komponen yang sama |
| Nama "Marauder" terdengar agresif | Bentrok dengan kesan penting dan tenang | Pakai wordmark serif dan copy tenang; konfirmasi ke klien |

---

## 17. Pertanyaan terbuka

1. Deliverable desain Figma atau situs jadi? (klien)
2. Produk yang benar-benar dijual apa, dan harganya berapa? (klien)
3. Bahasa situs: Inggris atau Indonesia? (klien)
4. Ada logo, foto produk, dan foto tim resmi? (klien)
5. Perlu halaman listing produk terpisah, atau cukup daftar di landing? (klien)
6. Cart dan checkout masuk scope atau tidak? (klien)
7. Nama "Marauder" memang disengaja? Kalau ya, saya pertahankan; kalau belum, ini momen untuk mengganti sebelum desain jalan.
