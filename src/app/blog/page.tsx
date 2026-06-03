import type { Metadata } from 'next'
import { trainingContent } from '@/constants/training'
import { BlogService, type BlogPost } from '@/services/blog.service'
import { ButtonLink } from '@/shared/ui/button'
import { PageHero } from '@/shared/components/page-hero'

export const metadata: Metadata = {
  title: 'Artikel K3 & Sertifikasi | HSE SkillUp',
  description: trainingContent.blogPage.description,
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await BlogService.getBlogPosts(12)
    if (posts?.length) {
      return posts
    }
  } catch (error) {
    console.warn('WordPress blog fetch failed, falling back to static articles', error)
  }

  return trainingContent.articles.map((article) => ({
    title: article.title,
    slug: article.href.replace('/blog/', ''),
    excerpt: article.description,
    date: '',
  }))
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <PageHero {...trainingContent.blogPage} />
      <section className="py-12">
        <div className="container grid gap-5 md:grid-cols-3">
          {posts.map((article) => (
            <article key={article.slug} className="lift-card rounded-lg border bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-primary-700">
                {article.categories?.nodes?.[0]?.name ?? 'Artikel'}
              </p>
              <h2 className="mt-3 font-heading text-xl font-bold leading-7 text-slate-950">{article.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600" dangerouslySetInnerHTML={{ __html: article.excerpt }} />
              <ButtonLink href={`/blog/${article.slug}`} className="mt-5" variant="outline">
                Baca Artikel
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
