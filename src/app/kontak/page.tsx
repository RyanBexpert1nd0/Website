import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { siteConfig } from '@/constants/site'
import { trainingContent } from '@/constants/training'
import { PageHero } from '@/shared/components/page-hero'

export const metadata: Metadata = {
  title: 'Kontak HSE SkillUp',
  description: trainingContent.contactPage.description,
}

export default function ContactPage() {
  return (
    <>
      <PageHero {...trainingContent.contactPage} />
      <section className="py-12">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <form className="grid gap-5 rounded-lg border bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nama" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Nomor WhatsApp" name="phone" />
            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Pesan
              <textarea name="message" rows={6} className="rounded-lg border px-3 py-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600" />
            </label>
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 font-semibold text-white transition hover:bg-primary-700">
              <Send className="h-4 w-4" aria-hidden="true" />
              Kirim Pesan
            </button>
          </form>
          <div className="grid gap-4">
            <InfoCard icon={<MapPin className="h-5 w-5" aria-hidden="true" />} title="Alamat" value={siteConfig.contact.address} />
            <InfoCard icon={<Phone className="h-5 w-5" aria-hidden="true" />} title="WhatsApp" value={siteConfig.contact.phone} />
            <InfoCard icon={<Mail className="h-5 w-5" aria-hidden="true" />} title="Email" value={siteConfig.contact.email} />
            <div className="min-h-64 rounded-lg border bg-slate-950 p-6 text-white shadow-lg">
              <p className="font-heading text-2xl font-bold">Area layanan nasional</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Training dapat diselenggarakan secara online, onsite, atau in-house sesuai kebutuhan perusahaan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      {label}
      <input name={name} type={type} className="h-11 rounded-lg border px-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600" />
    </label>
  )
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="lift-card flex items-center gap-4 rounded-lg border bg-white p-5 shadow-sm">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-700">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <p className="mt-1 font-heading text-lg font-bold text-slate-950">{value}</p>
      </div>
    </div>
  )
}
