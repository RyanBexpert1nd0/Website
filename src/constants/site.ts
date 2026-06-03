export const siteConfig = {
  name: 'HSE SkillUp',
  url: 'https://hseskillup.id',
  description:
    'Pelatihan dan sertifikasi K3 bersertifikat resmi untuk profesional, perusahaan, dan tim operasional di Indonesia.',
  contact: {
    phone: '+6281234567890',
    email: 'info@hseskillup.id',
    address: 'Jakarta, Indonesia',
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
