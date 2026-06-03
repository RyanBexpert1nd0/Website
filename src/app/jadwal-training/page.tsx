import type { Metadata } from 'next'
import { trainingContent } from '@/constants/training'
import { SchedulePageLayout } from '@/shared/components/schedule/sections'

export const metadata: Metadata = {
  title: 'Jadwal Training K3 | HSE SkillUp',
  description: trainingContent.schedulePage.description,
}

export default function SchedulePage() {
  return <SchedulePageLayout page={trainingContent.schedulePage} schedules={trainingContent.schedules} />
}
