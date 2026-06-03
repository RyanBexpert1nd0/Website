export const trainingContent = {
  programPage: {
    eyebrow: 'Katalog program',
    title: 'Program Pelatihan & Sertifikasi K3',
    description:
      'Pilih jalur sertifikasi berdasarkan bidang kerja, lembaga penerbit, durasi, dan kebutuhan kompetensi tim.',
    filters: ['Semua', 'K3 Umum', 'K3 Migas', 'Lingkungan', 'Konstruksi'],
  },
  schedulePage: {
    eyebrow: 'Jadwal training',
    title: 'Batch Training Terdekat',
    description:
      'Pantau jadwal reguler, lokasi pelaksanaan, biaya, dan status kuota sebelum mengirim pendaftaran.',
  },
  registrationPage: {
    eyebrow: 'Pendaftaran',
    title: 'Daftar Training Regular',
    description:
      'Isi data awal peserta dan program yang diminati. Tim HSE SkillUp akan menghubungi Anda untuk konfirmasi jadwal dan administrasi.',
    steps: ['Pilih program', 'Isi data peserta', 'Konfirmasi via marketing'],
  },
  inHousePage: {
    eyebrow: 'Corporate training',
    title: 'Request In-House Training',
    description:
      'Sampaikan kebutuhan kompetensi, jumlah peserta, lokasi, dan target waktu pelaksanaan untuk mendapatkan proposal khusus perusahaan.',
    benefits: ['Silabus dapat disesuaikan', 'Jadwal mengikuti operasional', 'Proposal untuk kebutuhan tender'],
  },
  contactPage: {
    eyebrow: 'Kontak',
    title: 'Konsultasikan Kebutuhan Training Anda',
    description:
      'Hubungi tim HSE SkillUp untuk rekomendasi program, jadwal, penawaran in-house training, atau pertanyaan administratif.',
  },
  blogPage: {
    eyebrow: 'Content hub',
    title: 'Artikel K3 & Sertifikasi',
    description:
      'Panduan ringkas untuk membantu profesional dan perusahaan memahami jalur sertifikasi, regulasi, dan praktik keselamatan kerja.',
  },
  programs: [
    {
      slug: 'ahli-k3-umum',
      title: 'Ahli K3 Umum',
      category: 'K3 Umum',
      agency: 'Kemnaker',
      duration: '12 hari',
      price: 'Rp 7.500.000',
      status: 'Tersedia',
      intro:
        'Program Ahli K3 Umum dirancang untuk memenuhi kebutuhan kompetensi dasar hingga praktik pengawasan keselamatan kerja di perusahaan.',
      outcomes: ['Memahami regulasi K3 nasional', 'Menyusun program pengawasan K3', 'Mendukung kepatuhan audit internal'],
    },
    {
      slug: 'supervisor-k3',
      title: 'Supervisor K3',
      category: 'K3 Umum',
      agency: 'BNSP',
      duration: '3 hari',
      price: 'Rp 3.250.000',
      status: 'Terbatas',
      intro:
        'Sertifikasi Supervisor K3 membantu pengawas lapangan mengelola risiko, inspeksi rutin, dan komunikasi keselamatan kerja.',
      outcomes: ['Mengawasi aktivitas kerja aman', 'Melakukan identifikasi bahaya', 'Membuat laporan inspeksi K3'],
    },
    {
      slug: 'k3-migas',
      title: 'K3 Migas',
      category: 'K3 Migas',
      agency: 'BNSP',
      duration: '5 hari',
      price: 'Rp 5.900.000',
      status: 'Tersedia',
      intro:
        'Program K3 Migas ditujukan untuk pekerja dan perusahaan energi yang membutuhkan kompetensi keselamatan di lingkungan migas.',
      outcomes: ['Mengelola risiko operasi migas', 'Memahami prosedur area berbahaya', 'Meningkatkan kesiapan dokumen kompetensi'],
    },
    {
      slug: 'pengelolaan-limbah-b3',
      title: 'Pengelolaan Limbah B3',
      category: 'Lingkungan',
      agency: 'Kemnaker',
      duration: '4 hari',
      price: 'Rp 4.750.000',
      status: 'Tersedia',
      intro:
        'Program ini membantu tim operasional memahami tata kelola limbah B3, dokumentasi, dan praktik pengendalian lingkungan.',
      outcomes: ['Memahami alur pengelolaan limbah B3', 'Menyusun dokumentasi operasional', 'Mendukung kepatuhan lingkungan'],
    },
  ],
  schedules: [
    {
      program: 'Ahli K3 Umum',
      slug: 'ahli-k3-umum',
      date: '10-22 Juni 2026',
      location: 'Jakarta',
      format: 'Offline',
      price: 'Rp 7.500.000',
      quota: '12 kursi',
      status: 'Tersedia',
    },
    {
      program: 'Supervisor K3',
      slug: 'supervisor-k3',
      date: '17-19 Juni 2026',
      location: 'Online',
      format: 'Live online',
      price: 'Rp 3.250.000',
      quota: '5 kursi',
      status: 'Terbatas',
    },
    {
      program: 'K3 Migas',
      slug: 'k3-migas',
      date: '24-28 Juni 2026',
      location: 'Balikpapan',
      format: 'Offline',
      price: 'Rp 5.900.000',
      quota: '14 kursi',
      status: 'Tersedia',
    },
    {
      program: 'Pengelolaan Limbah B3',
      slug: 'pengelolaan-limbah-b3',
      date: '1-4 Juli 2026',
      location: 'Bandung',
      format: 'Offline',
      price: 'Rp 4.750.000',
      quota: '9 kursi',
      status: 'Tersedia',
    },
  ],
  articles: [
    {
      title: 'Apa Itu AK3U dan Siapa yang Membutuhkannya?',
      category: 'Sertifikasi K3',
      description: 'Penjelasan singkat tentang fungsi Ahli K3 Umum dan kapan perusahaan membutuhkannya.',
      href: '/blog/apa-itu-ak3u',
    },
    {
      title: 'Perbedaan Sertifikasi Kemnaker dan BNSP',
      category: 'Panduan',
      description: 'Cara memahami perbedaan lembaga sertifikasi agar peserta memilih program yang tepat.',
      href: '/blog/kemnaker-vs-bnsp',
    },
    {
      title: 'Checklist Memilih Lembaga Pelatihan K3',
      category: 'Tips',
      description: 'Daftar aspek yang perlu diperiksa sebelum mendaftarkan karyawan atau peserta individu.',
      href: '/blog/checklist-lembaga-pelatihan-k3',
    },
  ],
} as const
