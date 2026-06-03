import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2, Download } from 'lucide-react'
import { trainingContent } from '@/constants/training'
import { ButtonLink } from '@/shared/ui/button'
import { PageHero } from '@/shared/components/page-hero'

type ProgramDetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return trainingContent.programs.map((program) => ({ slug: program.slug }))
}

export async function generateMetadata({ params }: ProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const program = trainingContent.programs.find((item) => item.slug === slug)

  if (!program) {
    return {}
  }

  return {
    title: `${program.title} - ${program.agency} | HSE SkillUp`,
    description: program.intro,
  }
}

export default async function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const { slug } = await params
  const program = trainingContent.programs.find((item) => item.slug === slug)

  if (!program) {
    notFound()
  }

  const schedules = trainingContent.schedules.filter((schedule) => schedule.slug === program.slug)

  return (
    <>
      <PageHero eyebrow={program.category} title={program.title} description={program.intro} />
      <section className="py-12">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Hasil yang ditargetkan</h2>
              <div className="mt-5 grid gap-3">
                {program.outcomes.map((outcome) => (
                  <p key={outcome} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-600" aria-hidden="true" />
                    {outcome}
                  </p>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
              <div className="border-b bg-slate-50 px-6 py-4">
                <h2 className="font-heading text-2xl font-bold text-slate-950">Jadwal tersedia</h2>
              </div>
              {schedules.map((schedule) => (
                <div key={schedule.date} className="grid gap-3 border-b px-6 py-5 last:border-b-0 md:grid-cols-4 md:items-center">
                  <p className="font-semibold text-slate-950">{schedule.date}</p>
                  <p className="text-sm text-slate-600">{schedule.location}</p>
                  <p className="text-sm text-slate-600">{schedule.format}</p>
                  <ButtonLink href={`/pendaftaran?program=${program.slug}`} size="sm">
                    Daftar
                  </ButtonLink>
                </div>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-lg border bg-slate-950 p-6 text-white shadow-lg lg:sticky lg:top-24">
            <p className="text-sm text-slate-300">Ringkasan program</p>
            <dl className="mt-5 grid gap-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-300">Lembaga</dt>
                <dd className="font-semibold">{program.agency}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-300">Durasi</dt>
                <dd className="font-semibold">{program.duration}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-300">Biaya</dt>
                <dd className="font-semibold">{program.price}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-300">Kuota</dt>
                <dd className="font-semibold">{program.status}</dd>
              </div>
            </dl>
            <div className="mt-6 grid gap-3">
              <ButtonLink href={`/pendaftaran?program=${program.slug}`} variant="secondary">
                Daftar Sekarang
              </ButtonLink>
              <ButtonLink href="/kontak" variant="outline">
                <Download className="h-4 w-4" aria-hidden="true" />
                Minta Brosur
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
