import type { Metadata } from 'next'
import { Send } from 'lucide-react'
import { trainingContent } from '@/constants/training'
import { PageHero } from '@/shared/components/page-hero'

export const metadata: Metadata = {
  title: 'Pendaftaran Training K3 | HSE SkillUp',
  description: trainingContent.registrationPage.description,
}

export default function RegistrationPage() {
  return (
    <>
      <PageHero {...trainingContent.registrationPage} />
      <section className="py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-lg border bg-slate-950 p-6 text-white shadow-lg">
            <p className="text-sm text-slate-300">Alur pendaftaran</p>
            <div className="mt-5 grid gap-4">
              {trainingContent.registrationPage.steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </aside>
          <form className="grid gap-5 rounded-lg border bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nama lengkap" name="name" />
              <Field label="Nomor WhatsApp" name="phone" />
              <Field label="Email" name="email" type="email" />
              <Field label="Perusahaan" name="company" />
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Program yang diminati
              <select name="program" className="h-11 rounded-lg border bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600">
                {trainingContent.programs.map((program) => (
                  <option key={program.slug} value={program.slug}>
                    {program.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Catatan kebutuhan
              <textarea name="message" rows={5} className="rounded-lg border px-3 py-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600" />
            </label>
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 font-semibold text-white transition hover:bg-primary-700">
              <Send className="h-4 w-4" aria-hidden="true" />
              Kirim Pendaftaran
            </button>
          </form>
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
