export const siteConfig = {
  name: 'HSE SkillUp',
  url: 'https://hseskillup.com',
  description:
    'Pelatihan dan sertifikasi K3 bersertifikat resmi untuk profesional, perusahaan, dan tim operasional di Indonesia.',
  contact: {
    phone: '+6285328883511',
    email: 'info@hseskillup.com',
    address: 'Jl Patangpuluhan No26A Wirobrajan Yogyakarta',
    hours: 'Senin-Jumat, 08.00-17.00 WIB',
    whatsappMessage: 'Halo, saya tertarik dengan program pelatihan K3 di HSE SkillUp',
  },
  navigation: [
    { label: 'Program', href: '/program' },
    { label: 'Jadwal', href: '/jadwal-training' },
    { label: 'Pendaftaran', href: '/pendaftaran' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/kontak' },
  ],
  footerLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Syarat & Ketentuan', href: '/syarat-ketentuan' },
    { label: 'Karir', href: '/karir' },
  ],
} as const
