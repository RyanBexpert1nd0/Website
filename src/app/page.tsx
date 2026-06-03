import { ArrowRight, Award, CalendarDays, CheckCircle2, Download, MapPin, ShieldCheck, Users } from 'lucide-react'
import { homepageContent } from '@/constants/homepage'
import { ButtonLink } from '@/shared/ui/button'

export const revalidate = 3600

export default function HomePage() {
  return (
    <>
      <section className="hero-shell relative overflow-hidden border-b">
        <div className="surface-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="fade-in-up">
            <p className="inline-flex rounded-full border border-primary-200 bg-white px-3 py-1 text-sm font-semibold text-primary-700 shadow-sm">
              {homepageContent.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              {homepageContent.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {homepageContent.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={homepageContent.hero.primaryCta.href} size="lg">
                {homepageContent.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={homepageContent.hero.secondaryCta.href} variant="outline" size="lg">
                {homepageContent.hero.secondaryCta.label}
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 fade-in-up delay-200">
              {homepageContent.hero.trustItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-success-600" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative fade-in-up delay-300">
            <div className="absolute -right-4 top-6 h-28 w-28 rounded-full bg-success-200/60 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-5 -left-4 h-32 w-32 rounded-full bg-primary-200/70 blur-2xl" aria-hidden="true" />
            <div className="glass-panel float-card relative grid gap-4 rounded-lg p-4">
              <div className="relative overflow-hidden rounded-lg bg-slate-950 p-5 text-white">
                <span className="scan-line absolute left-0 top-0 h-full w-24 bg-white/10 blur-md" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-warning-500" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-slate-300">Training readiness</p>
                    <p className="font-heading text-2xl font-bold">K3 Compliance Track</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-slate-300">
                  <span className="rounded-md bg-white/10 px-3 py-2">Risk audit</span>
                  <span className="rounded-md bg-white/10 px-3 py-2">SOP check</span>
                  <span className="rounded-md bg-white/10 px-3 py-2">Certificate</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {homepageContent.stats.map((stat) => (
                  <div key={stat.label} className="lift-card rounded-lg border bg-white p-4">
                    <p className="font-heading text-2xl font-bold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 rounded-lg border bg-slate-50 p-4 sm:grid-cols-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <CalendarDays className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  Jadwal aktif
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MapPin className="h-4 w-4 text-success-600" aria-hidden="true" />
                  Online & onsite
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Users className="h-4 w-4 text-warning-500" aria-hidden="true" />
                  Corporate ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-8">
        <div className="container flex flex-wrap items-center justify-center gap-3">
          {homepageContent.accreditations.map((item, index) => (
            <span key={item} className="fade-in-up rounded-lg border bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm" style={{ animationDelay: `${index * 70}ms` }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <SectionHeader eyebrow="Program unggulan" title="Jalur sertifikasi untuk kebutuhan operasional K3" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homepageContent.featuredPrograms.map((program) => (
              <article key={program.href} className="lift-card rounded-lg border bg-white p-5 shadow-sm">
                <Award className="h-7 w-7 text-primary-600" aria-hidden="true" />
                <p className="mt-4 font-heading text-lg font-bold text-slate-950">{program.title}</p>
                <p className="mt-1 text-sm font-semibold text-success-700">
                  {program.agency} / {program.duration}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
                <a href={program.href} className="mt-4 inline-flex text-sm font-semibold text-primary-700 hover:text-primary-800">
                  Lihat detail
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container">
          <SectionHeader eyebrow="Jadwal terdekat" title="Batch training yang siap diikuti" />
          <div className="mt-8 overflow-hidden rounded-lg border bg-white">
            <div className="hidden grid-cols-[1.2fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr] border-b bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 md:grid">
              <span>Program</span>
              <span>Tanggal</span>
              <span>Lokasi</span>
              <span>Biaya</span>
              <span>Kuota</span>
              <span>Aksi</span>
            </div>
            {homepageContent.schedules.map((schedule) => (
              <div key={`${schedule.program}-${schedule.date}`} className="grid gap-3 border-b px-5 py-4 transition-colors last:border-b-0 hover:bg-slate-50 md:grid-cols-[1.2fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr] md:items-center">
                <p className="font-semibold text-slate-950">{schedule.program}</p>
                <p className="text-sm text-slate-600">{schedule.date}</p>
                <p className="text-sm text-slate-600">{schedule.location}</p>
                <p className="text-sm font-semibold text-slate-800">{schedule.price}</p>
                <span className="w-fit rounded-full bg-success-600 px-3 py-1 text-xs font-semibold text-white">
                  {schedule.status}
                </span>
                <a href={schedule.href} className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                  Daftar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Testimoni alumni" title="Dipilih oleh profesional dan tim perusahaan" />
          <div className="grid gap-4 md:grid-cols-2">
            {homepageContent.testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="lift-card rounded-lg border bg-white p-5 shadow-sm">
                <blockquote className="text-sm leading-6 text-slate-700">{testimonial.quote}</blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container">
          <SectionHeader eyebrow="Artikel terbaru" title="Panduan praktis seputar K3 dan sertifikasi" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {homepageContent.articles.map((article) => (
              <article key={article.href} className="lift-card rounded-lg border bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-primary-700">{article.category}</p>
                <h2 className="mt-3 font-heading text-xl font-bold leading-7 text-slate-950">{article.title}</h2>
                <a href={article.href} className="mt-5 inline-flex text-sm font-semibold text-primary-700 hover:text-primary-800">
                  Baca artikel
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="grid gap-6 rounded-lg bg-slate-950 p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h2 className="font-heading text-2xl font-bold">{homepageContent.cta.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{homepageContent.cta.description}</p>
            </div>
            <ButtonLink href={homepageContent.cta.href} variant="secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              {homepageContent.cta.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase text-primary-700">{eyebrow}</p>
      <h2 className="mt-2 max-w-2xl font-heading text-3xl font-bold leading-tight text-slate-950">{title}</h2>
    </div>
  )
}
