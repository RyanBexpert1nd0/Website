import type { Metadata } from 'next'
import { CalendarDays, MapPin } from 'lucide-react'
import { trainingContent } from '@/constants/training'
import { ButtonLink } from '@/shared/ui/button'
import { PageHero } from '@/shared/components/page-hero'

export const metadata: Metadata = {
  title: 'Jadwal Training K3 | HSE SkillUp',
  description: trainingContent.schedulePage.description,
}

export default function SchedulePage() {
  return (
    <>
      <PageHero {...trainingContent.schedulePage} />
      <section className="py-12">
        <div className="container">
          <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="hidden grid-cols-[1fr_1fr_0.8fr_0.8fr_0.8fr_0.7fr] border-b bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 lg:grid">
              <span>Program</span>
              <span>Tanggal</span>
              <span>Lokasi</span>
              <span>Format</span>
              <span>Kuota</span>
              <span>Aksi</span>
            </div>
            {trainingContent.schedules.map((schedule) => (
              <article key={`${schedule.slug}-${schedule.date}`} className="grid gap-4 border-b px-5 py-5 transition hover:bg-slate-50 last:border-b-0 lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_0.8fr_0.7fr] lg:items-center">
                <div>
                  <h2 className="font-heading text-lg font-bold text-slate-950">{schedule.program}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary-700">{schedule.price}</p>
                </div>
                <p className="flex items-center gap-2 text-sm text-slate-600">
                  <CalendarDays className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  {schedule.date}
                </p>
                <p className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-success-600" aria-hidden="true" />
                  {schedule.location}
                </p>
                <p className="text-sm text-slate-600">{schedule.format}</p>
                <span className="w-fit rounded-full bg-success-50 px-3 py-1 text-xs font-bold text-success-700">
                  {schedule.quota}
                </span>
                <ButtonLink href={`/pendaftaran?program=${schedule.slug}`} size="sm">
                  Daftar
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
