type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="hero-shell border-b">
      <div className="container py-12 md:py-16">
        <div className="fade-in-up max-w-3xl">
          <p className="inline-flex rounded-full border border-primary-200 bg-white px-3 py-1 text-sm font-semibold text-primary-700 shadow-sm">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </div>
    </section>
  )
}
