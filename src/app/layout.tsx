import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/features/homepage/components/header'
import { Footer } from '@/features/homepage/components/footer'
import { FloatingWhatsApp } from '@/shared/components/marketing/whatsapp-button'
import { Analytics } from '@/shared/components/analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'HSE SkillUp - Pelatihan & Sertifikasi K3 Bersertifikat Resmi',
  description: 'Pelatihan dan sertifikasi K3 (Keselamatan & Kesehatan Kerja) bersertifikat resmi dari Kemnaker, BNSP, dan Kemenhub. Tingkatkan kompetensi tim Anda dengan training profesional.',
  keywords: 'pelatihan K3, sertifikasi K3, training K3, ahli K3, BNSP, Kemnaker, keselamatan kerja, kesehatan kerja',
  authors: [{ name: 'HSE SkillUp' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://hseskillup.id',
    title: 'HSE SkillUp - Pelatihan & Sertifikasi K3 Bersertifikat Resmi',
    description: 'Pelatihan dan sertifikasi K3 bersertifikat resmi dari Kemnaker, BNSP, dan Kemenhub.',
    siteName: 'HSE SkillUp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSE SkillUp - Pelatihan & Sertifikasi K3 Bersertifikat Resmi',
    description: 'Pelatihan dan sertifikasi K3 bersertifikat resmi dari Kemnaker, BNSP, dan Kemenhub.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp
          phoneNumber="+6281234567890"
          message="Halo, saya tertarik dengan program pelatihan K3 di HSE SkillUp"
        />
        <Analytics />
      </body>
    </html>
  )
}