import type { Metadata } from 'next'
import { BlogService } from '@/services/blog.service'
import { PageHero } from '@/shared/components/page-hero'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await BlogService.getBlogPostBySlug(params.slug)

  return {
    title: post?.title ?? 'Artikel Blog | HSE SkillUp',
    description: post?.excerpt?.replace(/<[^>]+>/g, '') ?? 'Artikel terbaru seputar K3 dan sertifikasi.',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await BlogService.getBlogPostBySlug(params.slug)

  if (!post) {
    return (
      <main className="container py-16">
        <h1 className="font-heading text-3xl font-bold text-slate-900">Artikel tidak ditemukan</h1>
        <p className="mt-4 text-slate-600">Maaf, artikel yang Anda cari tidak tersedia atau belum disinkronkan dari WordPress.</p>
      </main>
    )
  }

  return (
    <>
      <PageHero eyebrow={post.categories?.nodes?.[0]?.name ?? 'Artikel'} title={post.title} description={post.excerpt.replace(/<[^>]+>/g, '')} />
      <main className="container py-12">
        {post.featuredImage?.node?.sourceUrl ? (
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText ?? post.title}
            className="mb-8 w-full rounded-lg object-cover"
          />
        ) : null}
        <article className="prose max-w-none prose-slate">
          <div dangerouslySetInnerHTML={{ __html: post.content ?? post.excerpt }} />
        </article>
      </main>
    </>
  )
}
