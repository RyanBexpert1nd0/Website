import type { Metadata } from 'next'
import { trainingContent } from '@/constants/training'
import { ProgramPageLayout } from '@/shared/components/program/sections'

export const metadata: Metadata = {
  title: 'Program Pelatihan & Sertifikasi K3 | HSE SkillUp',
  description: trainingContent.programPage.description,
}

export default function ProgramPage() {
  return <ProgramPageLayout page={trainingContent.programPage} programs={trainingContent.programs} />
}
