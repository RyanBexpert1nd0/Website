import { homepageContent } from '@/constants/homepage'
import {
  AccreditationsSection,
  ArticlesSection,
  FeaturedProgramsSection,
  HeroSection,
  HomepageCtaSection,
  ScheduleSection,
  TestimonialsSection,
} from '@/shared/components/homepage/sections'

export const revalidate = 3600

export default function HomePage() {
  return (
    <>
      <HeroSection hero={homepageContent.hero} cta={homepageContent.cta} />
      <AccreditationsSection items={homepageContent.accreditations} />
      <FeaturedProgramsSection programs={homepageContent.featuredPrograms} />
      <ScheduleSection schedules={homepageContent.schedules} />
      <TestimonialsSection testimonials={homepageContent.testimonials} />
      <ArticlesSection articles={homepageContent.articles} />
      <HomepageCtaSection cta={homepageContent.cta} />
    </>
  )
}
