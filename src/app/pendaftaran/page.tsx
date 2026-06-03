import type { Metadata } from 'next'
import { trainingContent } from '@/constants/training'
import { RegistrationPageLayout } from '@/shared/components/registration/sections'

export const metadata: Metadata = {
  title: 'Pendaftaran Training K3 | HSE SkillUp',
  description: trainingContent.registrationPage.description,
}

export default function RegistrationPage() {
  return <RegistrationPageLayout page={trainingContent.registrationPage} programs={trainingContent.programs} />
}
