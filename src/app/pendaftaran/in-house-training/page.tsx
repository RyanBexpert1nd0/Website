import type { Metadata } from 'next'
import { Building2, Send } from 'lucide-react'
import { trainingContent } from '@/constants/training'
import { PageHero } from '@/shared/components/page-hero'

export const metadata: Metadata = {
  title: 'Request In-House Training | HSE SkillUp',
  description: trainingContent.inHousePage.description,
}

export default function InHouseTrainingPage() {
  return (
    <>
      <PageHero {...trainingContent.inHousePage} />
      <section className="py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <Building2 className="h-8 w-8 text-primary-600" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-2xl font-bold text-slate-950">Keunggulan in-house</h2>
            <div className="mt-5 grid gap-3">
              {trainingContent.inHousePage.benefits.map((benefit) => (
                <p key={benefit} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  {benefit}
                </p>
              ))}
            </div>
          </div>
          <form className="grid gap-5 rounded-lg border bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nama PIC" name="name" />
              <Field label="Nama perusahaan" name="company" />
              <Field label="Nomor WhatsApp" name="phone" />
              <Field label="Jumlah peserta" name="participants" />
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Kebutuhan training
              <textarea name="message" rows={6} className="rounded-lg border px-3 py-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600" />
            </label>
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-success-600 px-5 font-semibold text-white transition hover:bg-success-500">
              <Send className="h-4 w-4" aria-hidden="true" />
              Kirim Request
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

function Field({ label, name }: { label: string; name: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      {label}
      <input name={name} className="h-11 rounded-lg border px-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600" />
    </label>
  )
}
