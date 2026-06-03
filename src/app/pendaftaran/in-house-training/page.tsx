import type { Metadata } from 'next'
import { trainingContent } from '@/constants/training'
import { InHouseTrainingPageLayout } from '@/shared/components/registration/sections'

export const metadata: Metadata = {
  title: 'Request In-House Training | HSE SkillUp',
  description: trainingContent.inHousePage.description,
}

export default function InHouseTrainingPage() {
  return <InHouseTrainingPageLayout page={trainingContent.inHousePage} />
}
