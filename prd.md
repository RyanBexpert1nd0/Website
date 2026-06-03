# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Website Perusahaan HSE SkillUp

---

| **Dokumen** | **Detail** |
|---|---|
| **Nama Proyek** | Pengembangan Website HSE SkillUp |
| **Versi Dokumen** | v1.0 |
| **Tanggal** | Juli 2025 |
| **Status** | Draft |
| **Pemilik Produk** | HSE SkillUp Management |

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Tujuan & Metrik Keberhasilan](#2-tujuan--metrik-keberhasilan)
3. [Target Pengguna & Persona](#3-target-pengguna--persona)
4. [User Stories & Use Cases](#4-user-stories--use-cases)
5. [Functional Requirements](#5-functional-requirements)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Arsitektur Informasi & Sitemap](#7-arsitektur-informasi--sitemap)
8. [Wireframe & Deskripsi Halaman](#8-wireframe--deskripsi-halaman)
9. [Spesifikasi Teknis & CMS](#9-spesifikasi-teknis--cms)
10. [Strategi SEO & Digital Marketing](#10-strategi-seo--digital-marketing)
11. [Content Requirements](#11-content-requirements)
12. [Milestone & Timeline](#12-milestone--timeline)
13. [Risiko & Asumsi](#13-risiko--asumsi)
14. [Lampiran](#14-lampiran)

---

## 1. Ringkasan Eksekutif

### 1.1 Latar Belakang

HSE SkillUp adalah perusahaan jasa Pelatihan dan Sertifikasi Kompetensi yang berfokus pada bidang Keselamatan dan Kesehatan Kerja (K3) serta Lingkungan (Environment). Perusahaan menyediakan program pelatihan bersertifikasi resmi yang diakui oleh lembaga-lembaga nasional seperti Kementerian Ketenagakerjaan (Kemnaker), Badan Nasional Sertifikasi Profesi (BNSP), Kementerian Perhubungan (Kemenhub), dan badan sertifikasi lainnya.

Saat ini, HSE SkillUp memerlukan sebuah website profesional yang berfungsi sebagai **pusat informasi digital, media branding, dan platform penghasil leads** untuk menjangkau lebih banyak perusahaan, profesional, dan individu yang membutuhkan pelatihan kompetensi K3 dan Lingkungan.

### 1.2 Visi Produk

Menjadi platform digital terpercaya dan informatif yang merepresentasikan kredibilitas HSE SkillUp sebagai penyedia pelatihan K3 dan sertifikasi kompetensi terkemuka di Indonesia, sekaligus menjadi gerbang utama bagi calon peserta untuk menemukan, mempelajari, dan mendaftar program pelatihan.

### 1.3 Ringkasan Solusi

Website company profile modern dengan fitur-fitur:

- Katalog program pelatihan dan sertifikasi yang terstruktur
- Jadwal training dinamis yang mudah diperbarui
- Sistem pendaftaran online dan form inquiry
- Landing page yang dioptimasi untuk SEO dan konversi leads
- Integrasi WhatsApp dan kontak marketing
- Blog/content hub untuk artikel seputar K3 dan Lingkungan
- Halaman showcase sertifikasi dan akreditasi lembaga

---

## 2. Tujuan & Metrik Keberhasilan

### 2.1 Tujuan Bisnis

| **No** | **Tujuan** | **Prioritas** |
|---|---|---|
| B-01 | Meningkatkan branding dan kredibilitas perusahaan | Critical |
| B-02 | Menjadi media informasi lengkap program pelatihan & sertifikasi | Critical |
| B-03 | Menghasilkan leads dan pendaftaran peserta training | Critical |
| B-04 | Menampilkan jadwal training terbaru secara real-time | High |
| B-05 | Memudahkan calon peserta menghubungi tim marketing | High |
| B-06 | Mendukung strategi digital marketing dan SEO | High |
| B-07 | Membangun database peserta dan prospek | Medium |

### 2.2 Metrik Keberhasilan (KPI)

| **Metrik** | **Target (6 Bulan)** | **Cara Pengukuran** |
|---|---|---|
| Traffic organik bulanan | 2.000+ visitor | Google Analytics |
| Form inquiry terkirim | 50+ per bulan | WP Forms / CRM |
| Pendaftaran via website | 30+ per bulan | Tracking form submission |
| Peringkat SEO untuk keyword utama | Top 10 Google | Google Search Console |
| Pages per session | > 3 halaman | Google Analytics |
| Bounce rate | < 50% | Google Analytics |
| Waktu loading halaman | < 3 detik | PageSpeed Insights |
| Klik tombol WhatsApp/CTA | 200+ per bulan | Event tracking |

---

## 3. Target Pengguna & Persona

### 3.1 Segmen Pengguna

| **Segmen** | **Deskripsi** | **Kebutuhan Utama** |
|---|---|---|
| **HR & HSE Manager Perusahaan** | Profesional yang mencari pelatihan K3 untuk karyawan | Melihat jadwal, kurikulum, akreditasi; membandingkan program; mendaftarkan tim |
| **Profesional Individu** | Pekerja yang ingin meningkatkan sertifikasi diri | Mencari sertifikasi yang diakui, biaya, jadwal fleksibel, kemudahan daftar |
| **Fresh Graduate / Pencari Kerja** | Lulusan baru yang ingin menambah nilai CV | Mencari sertifikasi entry-level, biaya terjangkau, prospek karir |
| **Kontraktor / Vendor** | Perusahaan yang butuh kepatuhan regulasi | Sertifikasi wajib K3, dokumen tender, pelatihan cepat |
| **Instansi Pemerintah** | Dinas, BUMN, lembaga negara | Pelatihan berskala, MoU, penawaran khusus, legalitas lembaga |

### 3.2 Persona Utama

#### Persona 1 — Rudi, 38 tahun, HR Manager

- **Pain Points:** Sulit menemukan provider K3 yang terpercaya, butuh pelatihan untuk 20+ karyawan, budget ada tapi proses tender memakan waktu
- **Goals:** Menemukan provider terakreditasi, jadwal training jelas, bisa request penawaran khusus, verifikasi legalitas cepat

#### Persona 2 — Sari, 27 tahun, Safety Officer

- **Pain Points:** Bingung pilih sertifikasi yang tepat untuk jenjang karir, budget pribadi terbatas, butuh jadwal weekend
- **Goals:** Cari info lengkap program, bandingkan biaya, daftar online dengan mudah, dapat sertifikat resmi

---

## 4. User Stories & Use Cases

### 4.1 User Stories (Format: "Sebagai..., saya ingin..., sehingga...")

| **ID** | **User Story** | **Prioritas** | **Status** |
|---|---|---|---|
| US-01 | Sebagai calon peserta, saya ingin melihat daftar program pelatihan lengkap dengan deskripsi dan biaya, sehingga saya bisa memilih program yang sesuai kebutuhan | Critical | To-do |
| US-02 | Sebagai calon peserta, saya ingin melihat jadwal training terbaru dan kuota tersedia, sehingga saya bisa merencanakan pendaftaran | Critical | To-do |
| US-03 | Sebagai calon peserta, saya ingin mendaftar training langsung dari website, sehingga proses pendaftaran lebih cepat dan mudah | Critical | To-do |
| US-04 | Sebagai calon peserta, saya ingin menghubungi tim marketing via WhatsApp langsung dari website, sehingga saya bisa bertanya dengan cepat | High | To-do |
| US-05 | Sebagai HR Manager, saya ingin mengajukan permintaan penawaran khusus (in-house training), sehingga saya bisa mendapatkan harga khusus untuk tim saya | High | To-do |
| US-06 | Sebagai calon peserta, saya ingin membaca artikel dan informasi seputar K3 dan Lingkungan, sehingga wawasan saya bertambah | Medium | To-do |
| US-07 | Sebagai admin, saya ingin mengelola konten website (jadwal, program, artikel) dengan mudah melalui CMS, sehingga informasi selalu up-to-date | Critical | To-do |
| US-08 | Sebagai pengunjung, saya ingin melihat bukti akreditasi dan sertifikasi lembaga mitra, sehingga saya yakin dengan kredibilitas HSE SkillUp | High | To-do |
| US-09 | Sebagai calon peserta, saya ingin melihat testimoni alumni, sehingga saya mendapat gambaran kualitas pelatihan | Medium | To-do |
| US-10 | Sebagai pengunjung mobile, saya ingin website nyaman diakses dari smartphone, sehingga saya bisa mencari informasi kapan saja | Critical | To-do |

---

## 5. Functional Requirements

### 5.1 Modul: Homepage

| **ID** | **Fitur** | **Deskripsi** | **Prioritas** |
|---|---|---|---|
| F-01 | Hero Section | Banner utama dengan value proposition HSE SkillUp, CTA button, dan background visual profesional | Critical |
| F-02 | Logo Partner & Akreditasi | Menampilkan logo Kemnaker, BNSP, Kemenhub, dan lembaga mitra lainnya | Critical |
| F-03 | Program Unggulan | Tampilan grid/kartu 3-4 program pelatihan terpopuler dengan link ke halaman detail | Critical |
| F-04 | Jadwal Training Terdekat | Widget daftar training yang akan datang (max 5 item) dengan tombol "Daftar" | Critical |
| F-05 | Statistik Perusahaan | Counter angka (jumlah peserta, program, batch, tahun pengalaman) | High |
| F-06 | Testimoni Singkat | Slider testimoni alumni dengan foto dan nama (anonim jika diperlukan) | Medium |
| F-07 | CTA Floating | Tombol WhatsApp mengambang (floating button) di semua halaman | Critical |
| F-08 | Section Blog/Artikel Terbaru | 3 artikel terbaru dari blog | Medium |

### 5.2 Modul: Katalog Program Pelatihan

| **ID** | **Fitur** | **Deskripsi** | **Prioritas** |
|---|---|---|---|
| F-09 | Halaman Katalog | Daftar semua program pelatihan dengan filter berdasarkan kategori (K3 Umum, K3 Migas, Lingkungan, dll) dan lembaga sertifikasi | Critical |
| F-10 | Halaman Detail Program | Informasi lengkap: deskripsi, durasi, biaya, silabus, lembaga penerbit sertifikat, persyaratan peserta, metodologi | Critical |
| F-11 | Tombol Daftar | CTA di setiap halaman detail program yang mengarah ke form pendaftaran | Critical |
| F-12 | Jadwal Program | Tabel jadwal spesifik per program dengan status kuota (tersedia/penuh) | High |
| F-13 | Dokumen Downloadable | File PDF brosur, silabus lengkap, atau form pendaftaran offline yang bisa diunduh | Low |

### 5.3 Modul: Jadwal Training

| **ID** | **Fitur** | **Deskripsi** | **Prioritas** |
|---|---|---|---|
| F-14 | Halaman Jadwal | Kalender/daftar lengkap jadwal training dengan filter bulan, kategori, dan lokasi | Critical |
| F-15 | Detail Jadwal | Informasi: nama program, tanggal, durasi, lokasi, biaya, kuota, instruktur | Critical |
| F-16 | Status Kuota | Indikator real-time: "Tersedia", "Terbatas", "Penuh" | High |
| F-17 | Pendaftaran via Jadwal | Tombol daftar langsung dari baris jadwal | Critical |

### 5.4 Modul: Pendaftaran & Lead Generation

| **ID** | **Fitur** | **Deskripsi** | **Prioritas** |
|---|---|---|---|
| F-18 | Form Pendaftaran Training | Form multi-step: data diri → pilih program & jadwal → konfirmasi → submit | Critical |
| F-19 | Form In-House Training | Form khusus untuk request penawaran training internal perusahaan | High |
| F-20 | Form Kontak Umum | Form inquiry standar (nama, email, telepon, pesan) | High |
| F-21 | Auto-responder Email | Email konfirmasi otomatis setelah form terkirim | Medium |
| F-22 | Integrasi WhatsApp | Tombol/preview WA yang membawa data program yang sedang dilihat | Critical |
| F-23 | Notifikasi Admin | Notifikasi email/WA ke tim marketing setiap ada form masuk | Critical |
| F-24 | Tracking Source | Parameter UTM dan hidden field untuk tracking sumber leads | High |

### 5.5 Modul: Tentang Perusahaan

| **ID** | **Fitur** | **Deskripsi** | **Prioritas** |
|---|---|---|---|
| F-25 | Profil Perusahaan | Sejarah, visi, misi, nilai perusahaan | High |
| F-26 | Tim & Instruktur | Foto dan profil singkat instruktur/trainer | Medium |
| F-27 | Akreditasi & Sertifikasi | Halaman khusus menampilkan scan/logo sertifikat akreditasi dari lembaga mitra | Critical |
| F-28 | Galeri & Dokumentasi | Foto kegiatan training, acara, dokumentasi peserta | Medium |
| F-29 | Testimoni Alumni | Halaman kumpulan testimoni peserta yang sudah mengikuti training | Medium |
| F-30 | Klien & Partner | Daftar perusahaan yang pernah menggunakan jasa HSE SkillUp | High |

### 5.6 Modul: Blog / Artikel

| **ID** | **Fitur** | **Deskripsi** | **Prioritas** |
|---|---|---|---|
| F-31 | Halaman Blog | Daftar artikel dengan kategori, tag, pencarian | Medium |
| F-32 | Halaman Single Post | Artikel lengkap dengan share button, related posts, CTA | Medium |
| F-33 | Kategori Artikel | Taksonomi: K3, Lingkungan, Sertifikasi, Tips Karir, Regulasi | Medium |

### 5.7 Modul: Halaman Tambahan

| **ID** | **Fitur** | **Deskripsi** | **Prioritas** |
|---|---|---|---|
| F-34 | FAQ | Pertanyaan umum tentang pendaftaran, pembayaran, sertifikasi | Medium |
| F-35 | Halaman Kontak | Alamat lengkap, Google Maps embed, form kontak, info telepon/WA | Critical |
| F-36 | Halaman Karir | Informasi lowongan kerja (opsional untuk pengembangan SDM internal) | Low |
| F-37 | Privacy Policy & T&C | Halaman kebijakan privasi dan syarat ketentuan | Medium |

---

## 6. Non-Functional Requirements

### 6.1 Performa

| **ID** | **Requirement** | **Target** |
|---|---|---|
| NF-01 | Waktu loading halaman (First Contentful Paint) | < 1,5 detik |
| NF-02 | Waktu loading penuh (Full Load) | < 3 detik |
| NF-03 | Skor Google PageSpeed (Mobile) | > 80 |
| NF-04 | Skor Google PageSpeed (Desktop) | > 90 |
| NF-05 | Uptime | ≥ 99,5% |

### 6.2 Responsivitas & Kompatibilitas

| **ID** | **Requirement** | **Target** |
|---|---|---|
| NF-06 | Mobile-responsive | Full responsive, mobile-first approach |
| NF-07 | Browser support | Chrome, Firefox, Safari, Edge (2 versi terakhir) |
| NF-08 | Resolusi minimum | 320px (iPhone SE) hingga 1920px+ |

### 6.3 Keamanan

| **ID** | **Requirement** | **Deskripsi** |
|---|---|---|
| NF-09 | SSL Certificate | HTTPS enforced di semua halaman |
| NF-10 | Form Security | Google reCAPTCHA v3 di semua form |
| NF-11 | Data Protection | Form data dienkripsi; compliance dengan UU PDP |
| NF-12 | WordPress Security | Security plugin (Wordfence/Sucuri), limit login attempt, disable XML-RPC |
| NF-13 | Backup Otomatis | Daily backup ke cloud storage |

### 6.4 SEO

| **ID** | **Requirement** | **Deskripsi** |
|---|---|---|
| NF-14 | SEO On-page | Meta title, meta description, heading hierarchy (H1-H6), alt text gambar |
| NF-15 | Schema Markup | Organization schema, Article schema, Event schema, BreadcrumbList schema |
| NF-16 | XML Sitemap | Auto-generated sitemap.xml |
| NF-17 | Robots.txt | Konfigurasi yang tepat untuk indexing |
| NF-18 | URL Structure | SEO-friendly URL (slug Bahasa Indonesia) |
| NF-19 | Open Graph | OG tags untuk sharing di sosial media |
| NF-20 | Canonical URL | Menghindari duplicate content |

---

## 7. Arsitektur Informasi & Sitemap

```
Beranda (Homepage)
│
├── Program Pelatihan
│   ├── K3 Umum
│   │   ├── Ahli K3 Umum (AK3U) - Kemnaker
│   │   ├── Petugas K3 Umum - BNSP
│   │   ├── Supervisor K3 - BNSP
│   │   └── Operator K3 - BNSP
│   ├── K3 Migas
│   │   ├── Ahli K3 Migas - Kemnaker
│   │   └── Petugas K3 Migas - BNSP
│   ├── K3 Listrik
│   │   ├── Ahli K3 Listrik - Kemnaker
│   │   └── Teknisi K3 Listrik - BNSP
│   ├── K3 Konstruksi
│   │   ├── Ahli K3 Konstruksi - Kemnaker
│   │   └── Petugas K3 Konstruksi - BNSP
│   ├── Lingkungan
│   │   ├── Auditor Lingkungan - BNSP
│   │   ├── Pengelolaan Limbah B3 - Kemnaker
│   │   └── ISO 14001:2015
│   ├── Keselamatan Transportasi
│   │   ├── Manajer Keselamatan Transportasi - Kemenhub
│   │   └── Petugas Avsec - Kemenhub
│   └── Sertifikasi Lainnya
│       ├── Sertifikasi BNSP (Skema Lain)
│       └── Pelatihan Soft Skill
│
├── Jadwal Training
│   └── [Filter: Bulan, Kategori, Lokasi]
│
├── Pendaftaran
│   ├── Daftar Training Regular
│   └── Request In-House Training
│
├── Tentang Kami
│   ├── Profil Perusahaan
│   ├── Visi & Misi
│   ├── Tim Instruktur
│   ├── Akreditasi & Sertifikasi
│   ├── Klien & Partner
│   └── Galeri & Dokumentasi
│
├── Blog / Artikel
│   ├── Kategori: K3
│   ├── Kategori: Lingkungan
│   ├── Kategori: Sertifikasi
│   ├── Kategori: Regulasi
│   └── Kategori: Tips Karir
│
├── FAQ
│
├── Kontak Kami
│
└── [Footer Links]
    ├── Privacy Policy
    ├── Syarat & Ketentuan
    └── Karir
```

---

## 8. Wireframe & Deskripsi Halaman

### 8.1 Homepage

**Layout (Desktop):**

```
┌─────────────────────────────────────────────────┐
│  HEADER: Logo | Nav Menu | CTA Button | WA Icon  │
├─────────────────────────────────────────────────┤
│  HERO SECTION                                   │
│  Headline: "Tingkatkan Kompetensi K3 &          │
│   Lingkungan Anda Bersama HSE SkillUp"          │
│  Subheadline: "Pelatihan Bersertifikasi Resmi   │
│   Kemnaker • BNSP • Kemenhub"                   │
│  [CTA: Lihat Program] [CTA: Hubungi Kami]       │
├─────────────────────────────────────────────────┤
│  LOGO PARTNER: Kemnaker | BNSP | Kemenhub | ... │
├─────────────────────────────────────────────────┤
│  PROGRAM UNGGULAN (Grid 4 Kolom)                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│  │ AK3U │ │K3 Mgs│ │K3 Lis│ │Lingk.│           │
│  └──────┘ └──────┘ └──────┘ └──────┘           │
├─────────────────────────────────────────────────┤
│  JADWAL TERDEKAT (Tabel 5 Kolom)                │
│  Program | Tanggal | Durasi | Biaya | Daftar    │
├─────────────────────────────────────────────────┤
│  STATISTIK (Counter: 5000+ Peserta, 50+         │
│   Program, 200+ Batch, 10+ Tahun)                │
├─────────────────────────────────────────────────┤
│  TESTIMONI ALUMNI (Slider)                      │
├─────────────────────────────────────────────────┤
│  ARTIKEL TERBARU (Grid 3 Kolom)                 │
├─────────────────────────────────────────────────┤
│  CTA BANNER: "Butuh Training Khusus Perusahaan? │
│   Request In-House Training" [CTA]              │
├─────────────────────────────────────────────────┤
│  FOOTER: 4 Kolom | Copyright | Social Media     │
└─────────────────────────────────────────────────┘
```

### 8.2 Deskripsi Halaman Kunci

#### A. Halaman Katalog Program

- **Header:** Judul "Program Pelatihan & Sertifikasi"
- **Filter Bar:** Dropdown kategori, dropdown lembaga sertifikasi, search box
- **Grid Layout:** Kartu program (3 kolom desktop, 2 tablet, 1 mobile)
- **Setiap Kartu:** Ikon/thumbnail, nama program, lembaga, durasi singkat, badge "Tersedia"/"Penuh", tombol "Lihat Detail"
- **Pagination:** Load more atau numbered pagination

#### B. Halaman Detail Program

- **Breadcrumb:** Home > Program > Kategori > Nama Program
- **Hero:** Judul program, badge lembaga sertifikasi
- **Tab/Menu:** Deskripsi | Silabus | Jadwal | Persyaratan | FAQ
- **Sidebar (Sticky):** Info ringkas (durasi, biaya, lokasi), CTA "Daftar Sekarang", "Download Brosur", kontak WA
- **Related Programs:** Grid program terkait di bawah konten

#### C. Halaman Jadwal Training

- **Filter:** Bulan (dropdown), Kategori (dropdown), Kota/Lokasi (dropdown)
- **Tabel Jadwal:** Kolom: Program | Tanggal | Lokasi | Biaya | Kuota | Aksi (Daftar)
- **Mobile View:** Card layout, bukan tabel
- **Status Badge:** "Tersedia" (hijau), "Terbatas" (kuning), "Penuh" (merah)

#### D. Halaman Pendaftaran

- **Step 1:** Pilih Program → Pilih Jadwal
- **Step 2:** Isi Data Diri (nama lengkap, email, no. telepon, perusahaan, jabatan)
- **Step 3:** Konfirmasi (ringkasan pesanan, biaya)
- **Step 4:** Submit → Halaman "Terima Kasih" dengan info kontak lanjutan

#### E. Halaman Kontak

- **Layout 2 Kolom:** Kiri = Form kontak; Kanan = Info alamat + Google Maps
- **Info:** Alamat kantor, telepon, email, jam operasional, link WhatsApp

---

## 9. Spesifikasi Teknis & CMS

### 9.1 Platform & Teknologi

| **Komponen** | **Pilihan** | **Keterangan** |
|---|---|---|
| **CMS** | WordPress 6.x (latest stable) | Open-source, market leader, komunitas besar |
| **Page Builder** | Elementor Pro / Bricks Builder | Kemudahan drag-and-drop tanpa koding; Bricks lebih ringan |
| **Theme** | Hello Elementor / GeneratePress / Custom | Ringan, kompatibel dengan page builder, performa tinggi |
| **Hosting** | VPS/Cloud Hosting (Niagahoster, CloudKilat, atau AWS Lightsail) | Minimal 2 vCPU, 4GB RAM, SSD storage |
| **Web Server** | Nginx + PHP 8.x | Performa optimal untuk WordPress |
| **Database** | MySQL 8.0 / MariaDB | Standar WordPress |
| **CDN** | Cloudflare (Free/Pro) | Caching global, DDoS protection |
| **SSL** | Let's Encrypt / Cloudflare SSL | Wajib HTTPS |

### 9.2 Plugin WordPress (Rekomendasi)

| **Kategori** | **Plugin** | **Fungsi** |
|---|---|---|
| SEO | Rank Math Pro / Yoast SEO Premium | On-page SEO, schema, sitemap, redirection |
| Form Builder | WP Fluent Forms Pro / Gravity Forms | Form pendaftaran, inquiry, in-house training |
| Caching | WP Rocket / FlyingPress | Page caching, lazy load, file optimization |
| Security | Wordfence Premium / Solid Security | Firewall, malware scan, login protection |
| Backup | UpdraftPlus / BlogVault | Daily backup otomatis |
| Page Builder | Elementor Pro | Drag-and-drop design |
| Custom Post Type | ACF Pro (Advanced Custom Fields) | Custom fields untuk program, jadwal, instruktur |
| Multilingual (opsional) | WPML / Polylang | Jika butuh Bahasa Inggris |
| Analytics | Site Kit by Google | Google Analytics, Search Console, Tag Manager |
| SMTP | FluentSMTP / WP Mail SMTP | Email delivery reliability |
| Image Optimization | ShortPixel / Imagify | Kompresi gambar otomatis |
| Cookie Consent | Complianz | GDPR/cookie compliance |

### 9.3 Custom Post Types & Taxonomies

| **CPT** | **Slug** | **Deskripsi** |
|---|---|---|
| `program` | `/program/` | Program pelatihan (AK3U, K3 Migas, dll) |
| `jadwal` | `/jadwal/` | Jadwal training individual |
| `instruktur` | `/instruktur/` | Profil trainer/instruktur |
| `testimoni` | `/testimoni/` | Testimoni peserta |

| **Taxonomy** | **Slug** | **Untuk CPT** | **Deskripsi** |
|---|---|---|---|
| `kategori-program` | `/kategori-program/` | `program` | K3 Umum, K3 Migas, Lingkungan, dll |
| `lembaga` | `/lembaga/` | `program` | Kemnaker, BNSP, Kemenhub, dll |
| `lokasi` | `/lokasi/` | `jadwal` | Jakarta, Surabaya, Online, dll |

### 9.4 Custom Fields (via ACF)

**CPT: program**

- `kode_program` (text)
- `lembaga_sertifikasi` (taxonomy)
- `durasi` (text, e.g., "5 Hari (40 JP)")
- `biaya` (number atau text)
- `biaya_early_bird` (number)
- `silabus` (repeater: judul_modul, deskripsi_modul)
- `persyaratan` (wysiwyg)
- `metodologi` (wysiwyg)
- `file_brosur` (file upload)
- `badge_tersedia` (true/false)

**CPT: jadwal**

- `program_terkait` (post object → `program`)
- `tanggal_mulai` (date picker)
- `tanggal_selesai` (date picker)
- `lokasi_kota` (taxonomy)
- `tempat` (text)
- `kuota` (number)
- `kuota_tersisa` (number)
- `status` (select: tersedia/terbatas/penuh)
- `instruktur` (post object → `instruktur`)

### 9.5 Integrasi

| **Integrasi** | **Tujuan** | **Metode** |
|---|---|---|
| WhatsApp Business API / wa.me link | Klik-to-chat dari website | URL scheme `https://wa.me/62xxx?text=...` |
| Google Analytics 4 | Traffic & conversion tracking | Site Kit / manual GA4 tag |
| Google Tag Manager | Event tracking (klik CTA, form submit) | GTM container |
| Google Search Console | SEO monitoring | DNS verification |
| Email Marketing (Mailchimp/ConvertKit) | Newsletter, follow-up leads | API / embed form |
| CRM (opsional: HubSpot Free) | Lead management | Native WordPress plugin |
| Google Maps | Embedded location di halaman kontak | Embed iframe |

---

## 10. Strategi SEO & Digital Marketing

### 10.1 Keyword Strategy

| **Kategori Keyword** | **Contoh Keyword** | **Target Halaman** |
|---|---|---|
| Branded | "HSE SkillUp", "HSE SkillUp pelatihan K3" | Homepage |
| Program Spesifik | "pelatihan AK3U Kemnaker", "sertifikasi K3 umum BNSP" | Halaman detail program |
| Informasional | "cara mendapatkan sertifikat K3", "syarat jadi ahli K3 umum" | Blog post |
| Komersial | "biaya pelatihan K3", "training K3 murah bersertifikat" | Halaman program + jadwal |
| Lokal | "pelatihan K3 Jakarta", "training K3 Surabaya 2025" | Jadwal + landing page kota |

### 10.2 SEO On-Page Setup

- **Title Tag Format:** `{Nama Program} - Pelatihan Bersertifikasi {Lembaga} | HSE SkillUp`
- **Meta Description:** Unik per halaman, 140-160 karakter, mengandung keyword primer + CTA
- **Heading Structure:** 1 H1 per halaman, H2 untuk sub-seksi, H3 untuk detail
- **Image Alt Text:** Deskriptif, mengandung keyword (natural)
- **Internal Linking:** Program terkait, artikel terkait, CTA kontekstual

### 10.3 Content Marketing Plan

| **Tipe Konten** | **Frekuensi** | **Tujuan** |
|---|---|---|
| Artikel blog SEO | 2-4x per bulan | Menarik traffic organik, membangun otoritas |
| Update jadwal training | Real-time | Informasi selalu akurat |
| Studi kasus / Success story | 1x per bulan | Social proof |
| Landing page campaign | Sesuai campaign | Konversi paid ads |

### 10.4 Conversion Tracking

| **Event** | **Trigger** | **Label** |
|---|---|---|
| `form_submit_pendaftaran` | Form pendaftaran terkirim | Nama program |
| `form_submit_inhouse` | Form in-house terkirim | — |
| `click_whatsapp` | Klik tombol WA | Halaman sumber |
| `click_telpon` | Klik nomor telepon | Halaman sumber |
| `download_brosur` | Klik download brosur | Nama program |

---

## 11. Content Requirements

### 11.1 Konten yang Harus Disediakan Klien

| **No** | **Konten** | **Format** | **Keterangan** |
|---|---|---|---|
| C-01 | Profil perusahaan lengkap (visi, misi, sejarah) | Teks (Word/Google Docs) | |
| C-02 | Daftar lengkap program pelatihan & deskripsi | Spreadsheet / Docs | Nama, lembaga, durasi, biaya, silabus |
| C-03 | Jadwal training 3 bulan ke depan | Spreadsheet | Program, tanggal, lokasi, kuota |
| C-04 | Logo perusahaan & logo lembaga mitra | PNG/SVG (high-res, transparan) | |
| C-05 | Foto instruktur + bio singkat | JPG/PNG + teks | |
| C-06 | Foto kegiatan training & dokumentasi | JPG/PNG (min. 1200px) | |
| C-07 | Testimoni alumni (foto + teks) | Teks + foto | Butuh izin peserta |
| C-08 | Dokumen akreditasi (scan sertifikat) | PDF/JPG | Untuk halaman akreditasi |
| C-09 | Daftar klien/perusahaan | Spreadsheet / Docs | |
| C-10 | Kontak resmi, alamat, jam operasional | Teks | |
| C-11 | Link sosial media | URL | LinkedIn, Instagram, Facebook, YouTube |
| C-12 | Brand guidelines (warna, typography) | PDF/Docs | Jika sudah ada |

### 11.2 Strategi Konten Blog (6 Bulan Pertama)

| **Bulan** | **Topik Artikel** |
|---|---|
| Bulan 1 | "Apa Itu AK3U? Panduan Lengkap Sertifikasi Ahli K3 Umum Kemnaker" |
| Bulan 1 | "5 Sertifikasi K3 yang Paling Dicari Perusahaan di 2025" |
| Bulan 2 | "Perbedaan Sertifikasi Kemnaker vs BNSP: Mana yang Anda Butuhkan?" |
| Bulan 2 | "Cara Menjadi Auditor Lingkungan Bersertifikasi BNSP" |
| Bulan 3 | "Mengapa Setiap Perusahaan Wajib Punya Ahli K3?" |
| Bulan 3 | "Update Regulasi K3 Terbaru 2025 yang Perlu Anda Ketahui" |
| Bulan 4 | "Tips Memilih Lembaga Pelatihan K3 yang Terpercaya" |
| Bulan 4 | "Prospek Karir Safety Officer di Indonesia" |
| Bulan 5 | "Checklist Persiapan Mengikuti Sertifikasi K3" |
| Bulan 5 | "Studi Kasus: Implementasi K3 di Sektor Konstruksi" |
| Bulan 6 | "Panduan Lengkap In-House Training K3 untuk Perusahaan" |
| Bulan 6 | "Mengenal ISO 45001 dan Hubungannya dengan K3" |

---

## 12. Milestone & Timeline

### 12.1 Fase Proyek

| **Fase** | **Durasi** | **Deliverable** | **Ketergantungan** |
|---|---|---|---|
| **Fase 0: Discovery & Setup** | Minggu 1-2 | Brief final, setup hosting & WordPress, install plugin dasar | Konten dari klien mulai dikumpulkan |
| **Fase 1: Design** | Minggu 2-4 | Wireframe detail, UI design homepage & 3 halaman kunci, review & approval | Brand guidelines |
| **Fase 2: Development** | Minggu 4-8 | Development semua halaman, custom post types, form, integrasi | Design approved |
| **Fase 3: Content Population** | Minggu 6-9 | Input semua konten, setup SEO, optimasi gambar | Konten lengkap dari klien |
| **Fase 4: Testing & QA** | Minggu 9-10 | Cross-browser testing, mobile testing, form testing, speed optimization | Development selesai |
| **Fase 5: Launch** | Minggu 11 | Go-live, submit ke Google Search Console, setup analytics, monitoring | QA passed |
| **Fase 6: Post-Launch** | Minggu 11-12 | Training admin, dokumentasi, bug fixing minor, optimasi lanjutan | Website live |

**Total Estimasi:** 12 minggu (3 bulan)

### 12.2 Milestone Penting

| **Tanggal** | **Milestone** |
|---|---|
| Akhir Minggu 2 | Design homepage disetujui |
| Akhir Minggu 4 | Semua desain halaman disetujui |
| Akhir Minggu 8 | Development selesai, staging ready |
| Akhir Minggu 10 | QA selesai, semua bug fixed |
| Akhir Minggu 11 | **GO-LIVE** 🚀 |
| Akhir Minggu 12 | Handover & training admin |

---

## 13. Risiko & Asumsi

### 13.1 Risiko

| **Risiko** | **Probabilitas** | **Dampak** | **Mitigasi** |
|---|---|---|---|
| Keterlambatan konten dari klien | Sedang | Tinggi | Timeline paralel; template konten disediakan lebih awal; milestone konten dengan deadline jelas |
| Perubahan scope (scope creep) | Tinggi | Sedang | PRD disetujui sebelum mulai; setiap perubahan di luar scope dihitung sebagai addendum berbayar |
| Performa website buruk | Rendah | Tinggi | Pilih stack teknologi yang terbukti ringan; performance budget; testing berkala |
| Masalah kompatibilitas plugin | Rendah | Sedang | Gunakan plugin premium/reputable; testing di staging environment |
| Celah keamanan WordPress | Sedang | Tinggi | Security plugin premium, hardening, update rutin, backup harian |
| Klien kurang familiar WordPress | Sedang | Rendah | Training admin + video tutorial + dokumentasi tertulis |

### 13.2 Asumsi

1. Klien menyediakan konten sesuai timeline yang disepakati
2. Klien memiliki brand guidelines atau setidaknya preferensi warna dan logo
3. Domain dan hosting sudah tersedia atau akan dibantu disediakan
4. Tidak ada integrasi custom ke sistem eksternal (selain yang sudah disebutkan)
5. Website single bahasa (Bahasa Indonesia), multi-language tidak termasuk scope awal
6. Blog sudah terisi minimal 3-5 artikel saat launch

---

## 14. Lampiran

### Lampiran A: Referensi Kompetitor

| **Kompetitor** | **URL** | **Kelebihan** | **Hal yang Bisa Diadopsi** |
|---|---|---|---|
| [Contoh Provider K3] | — | Struktur program jelas | Kategorisasi program |
| [Contoh Provider K3] | — | Jadwal interaktif | Filter jadwal yang user-friendly |

*(Diisi saat fase discovery — tim melakukan analisis kompetitor)*

### Lampiran B: Checklist Pra-Launch

- [ ] Semua halaman terisi konten, tidak ada lorem ipsum
- [ ] Semua form berfungsi dan mengirim data
- [ ] SSL aktif, semua halaman redirect ke HTTPS
- [ ] XML Sitemap ter-generate dan disubmit ke Google Search Console
- [ ] robots.txt sudah dicek tidak memblokir halaman penting
- [ ] Google Analytics & Search Console terpasang
- [ ] Semua gambar terkompresi dan punya alt text
- [ ] Mobile responsiveness dicek di 5+ device
- [ ] Loading speed < 3 detik
- [ ] Semua link internal tidak ada yang broken (404)
- [ ] Favicon terpasang
- [ ] Social media preview (OG tags) berfungsi
- [ ] Privacy policy page published
- [ ] Backup system aktif dan teruji
- [ ] Admin sudah dilatih menggunakan CMS

### Lampiran C: Glosarium

| **Istilah** | **Definisi** |
|---|---|
| ACF | Advanced Custom Fields — plugin WordPress untuk membuat custom fields |
| BNSP | Badan Nasional Sertifikasi Profesi |
| CTA | Call to Action — ajakan/tombol untuk melakukan aksi tertentu |
| CPT | Custom Post Type — tipe konten kustom di WordPress |
| GA4 | Google Analytics 4 |
| K3 | Keselamatan dan Kesehatan Kerja |
| Kemnaker | Kementerian Ketenagakerjaan Republik Indonesia |
| Kemenhub | Kementerian Perhubungan |
| OG Tags | Open Graph Tags — metadata untuk preview di sosial media |
| UTM | Urchin Tracking Module — parameter URL untuk tracking campaign |

---

