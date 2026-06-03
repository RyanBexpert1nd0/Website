import { PageHero } from '@/shared/components/page-hero'
import { LeadForm } from '@/shared/components/forms/lead-form'
import { ButtonLink } from '@/shared/ui/button'
import type { TrainingContent } from '@/constants/training'

export function RegistrationPageLayout({ page, programs }: { page: TrainingContent['registrationPage']; programs: TrainingContent['programs'] }) {
  return (
    <>
      <PageHero {...page} />
      <section className="py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-lg border bg-slate-950 p-6 text-white shadow-lg">
            <p className="text-sm text-slate-300">Alur pendaftaran</p>
            <div className="mt-5 grid gap-4">
              {page.steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </aside>
          <LeadForm
            title="Form pendaftaran"
            description="Isi data utama peserta dan pilih program yang ingin diikuti."
            submitLabel="Kirim Pendaftaran"
            source="registration"
            fields={[
              { label: 'Nama lengkap', name: 'name' },
              { label: 'Nomor WhatsApp', name: 'phone', type: 'tel' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Perusahaan', name: 'company' },
            ]}
            extraField={(
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Program yang diminati
                <select
                  name="program"
                  required
                  className="h-11 rounded-lg border bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:ring-2 focus:ring-primary-600"
                >
                  {programs.map((program) => (
                    <option key={program.slug} value={program.slug}>
                      {program.title}
                    </option>
                  ))}
                </select>
              </label>
            )}
          />
        </div>
      </section>
    </>
  )
}

export function InHouseTrainingPageLayout({ page }: { page: TrainingContent['inHousePage'] }) {
  return (
    <>
      <PageHero {...page} />
      <section className="py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-primary-700">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">🏢</span>
              <h2 className="font-heading text-2xl font-bold text-slate-950">Keunggulan in-house</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {page.benefits.map((benefit) => (
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
              <textarea
                name="message"
                rows={6}
                className="rounded-lg border px-3 py-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600"
              />
            </label>
            <ButtonLink href="#" variant="secondary">
              Kirim Request
            </ButtonLink>
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
      <input
        name={name}
        className="h-11 rounded-lg border px-3 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary-600"
      />
    </label>
  )
}
