import { CalendarDays, MapPin } from 'lucide-react'
import { ButtonLink } from '@/shared/ui/button'
import { PageHero } from '@/shared/components/page-hero'
import type { TrainingContent } from '@/constants/training'

export function SchedulePageLayout({ page, schedules }: { page: TrainingContent['schedulePage']; schedules: TrainingContent['schedules'] }) {
  return (
    <>
      <PageHero {...page} />
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
            {schedules.map((schedule) => (
              <ScheduleRow key={`${schedule.slug}-${schedule.date}`} schedule={schedule} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ScheduleRow({ schedule }: { schedule: TrainingContent['schedules'][number] }) {
  return (
    <article className="grid gap-4 border-b px-5 py-5 transition hover:bg-slate-50 last:border-b-0 lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_0.8fr_0.7fr] lg:items-center">
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
      <span className="w-fit rounded-full bg-success-50 px-3 py-1 text-xs font-bold text-success-700">{schedule.quota}</span>
      <ButtonLink href={`/pendaftaran?program=${schedule.slug}`} size="sm">
        Daftar
      </ButtonLink>
    </article>
  )
}
