export const homepageContent = {
  hero: {
    eyebrow: 'Provider pelatihan K3 dan lingkungan',
    title: 'Tingkatkan Kompetensi K3 Tim Anda dengan Sertifikasi Resmi',
    description:
      'Temukan program training Kemnaker, BNSP, Kemenhub, dan lingkungan yang terstruktur untuk kebutuhan individu, HR, HSE Manager, dan perusahaan.',
    primaryCta: { label: 'Lihat Program', href: '/program' },
    secondaryCta: { label: 'Konsultasi Training', href: '/kontak' },
    trustItems: ['Kemnaker', 'BNSP', 'Kemenhub', 'In-house training'],
  },
  accreditations: ['Kemnaker', 'BNSP', 'Kemenhub', 'ISO 14001', 'ISO 45001'],
  featuredPrograms: [
    {
      title: 'Ahli K3 Umum',
      agency: 'Kemnaker',
      duration: '12 hari',
      description: 'Program untuk calon ahli K3 yang membutuhkan kompetensi kepatuhan dan praktik keselamatan kerja.',
      href: '/program/ahli-k3-umum',
    },
    {
      title: 'Supervisor K3',
      agency: 'BNSP',
      duration: '3 hari',
      description: 'Sertifikasi kompetensi untuk pengawasan operasional K3 di area kerja.',
      href: '/program/supervisor-k3',
    },
    {
      title: 'K3 Migas',
      agency: 'BNSP',
      duration: '5 hari',
      description: 'Pelatihan keselamatan kerja untuk kebutuhan industri migas dan sektor energi.',
      href: '/program/k3-migas',
    },
    {
      title: 'Pengelolaan Limbah B3',
      agency: 'Kemnaker',
      duration: '4 hari',
      description: 'Program lingkungan untuk pengelolaan limbah B3 sesuai kebutuhan operasional perusahaan.',
      href: '/program/pengelolaan-limbah-b3',
    },
  ],
  schedules: [
    {
      program: 'Ahli K3 Umum',
      date: '10-22 Juni 2026',
      location: 'Jakarta',
      price: 'Rp 7.500.000',
      status: 'Tersedia',
      href: '/pendaftaran?program=ahli-k3-umum',
    },
    {
      program: 'Supervisor K3',
      date: '17-19 Juni 2026',
      location: 'Online',
      price: 'Rp 3.250.000',
      status: 'Terbatas',
      href: '/pendaftaran?program=supervisor-k3',
    },
    {
      program: 'K3 Migas',
      date: '24-28 Juni 2026',
      location: 'Balikpapan',
      price: 'Rp 5.900.000',
      status: 'Tersedia',
      href: '/pendaftaran?program=k3-migas',
    },
  ],
  stats: [
    { value: '5.000+', label: 'Peserta dilatih' },
    { value: '50+', label: 'Program kompetensi' },
    { value: '200+', label: 'Batch training' },
    { value: '10+', label: 'Tahun pengalaman' },
  ],
  testimonials: [
    {
      quote:
        'Materi tersusun rapi dan tim responsif membantu proses pendaftaran peserta perusahaan kami.',
      name: 'Rudi',
      role: 'HR Manager',
    },
    {
      quote:
        'Saya jadi lebih paham jalur sertifikasi K3 yang sesuai untuk karir safety officer.',
      name: 'Sari',
      role: 'Safety Officer',
    },
  ],
  articles: [
    {
      title: 'Apa Itu AK3U dan Siapa yang Membutuhkannya?',
      category: 'Sertifikasi K3',
      href: '/blog/apa-itu-ak3u',
    },
    {
      title: 'Perbedaan Sertifikasi Kemnaker dan BNSP',
      category: 'Panduan',
      href: '/blog/kemnaker-vs-bnsp',
    },
    {
      title: 'Checklist Memilih Lembaga Pelatihan K3',
      category: 'Tips',
      href: '/blog/checklist-lembaga-pelatihan-k3',
    },
  ],
  cta: {
    title: 'Butuh training khusus untuk perusahaan?',
    description:
      'Kirim kebutuhan tim Anda dan kami bantu susun program in-house training yang sesuai target kompetensi, lokasi, dan jadwal operasional.',
    href: '/pendaftaran/in-house-training',
    label: 'Request In-House Training',
  },
} as const
