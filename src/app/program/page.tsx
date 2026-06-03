import type { Metadata } from 'next'
import { Award, Clock, Filter, ShieldCheck } from 'lucide-react'
import { trainingContent } from '@/constants/training'
import { ButtonLink } from '@/shared/ui/button'
import { PageHero } from '@/shared/components/page-hero'

export const metadata: Metadata = {
  title: 'Program Pelatihan & Sertifikasi K3 | HSE SkillUp',
  description: trainingContent.programPage.description,
}

export default function ProgramPage() {
  return (
    <>
      <PageHero {...trainingContent.programPage} />
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Filter className="h-4 w-4 text-primary-600" aria-hidden="true" />
              Filter cepat
            </span>
            {trainingContent.programPage.filters.map((filter) => (
              <button key={filter} type="button" className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trainingContent.programs.map((program) => (
              <article key={program.slug} className="lift-card flex min-h-full flex-col rounded-lg border bg-white p-5 shadow-sm">
                <Award className="h-7 w-7 text-primary-600" aria-hidden="true" />
                <h2 className="mt-4 font-heading text-xl font-bold text-slate-950">{program.title}</h2>
                <p className="mt-2 text-sm font-semibold text-success-700">{program.agency}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {program.duration}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{program.intro}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-success-50 px-3 py-1 text-xs font-bold text-success-700">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {program.status}
                  </span>
                  <span className="text-sm font-bold text-slate-950">{program.price}</span>
                </div>
                <ButtonLink href={`/program/${program.slug}`} className="mt-5 w-full" variant="outline">
                  Lihat Detail
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
