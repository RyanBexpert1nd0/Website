import type { Metadata } from 'next'
import { trainingContent } from '@/constants/training'
import { ButtonLink } from '@/shared/ui/button'
import { PageHero } from '@/shared/components/page-hero'

export const metadata: Metadata = {
  title: 'Artikel K3 & Sertifikasi | HSE SkillUp',
  description: trainingContent.blogPage.description,
}

export default function BlogPage() {
  return (
    <>
      <PageHero {...trainingContent.blogPage} />
      <section className="py-12">
        <div className="container grid gap-5 md:grid-cols-3">
          {trainingContent.articles.map((article) => (
            <article key={article.href} className="lift-card rounded-lg border bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-primary-700">{article.category}</p>
              <h2 className="mt-3 font-heading text-xl font-bold leading-7 text-slate-950">{article.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p>
              <ButtonLink href={article.href} className="mt-5" variant="outline">
                Baca Artikel
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
