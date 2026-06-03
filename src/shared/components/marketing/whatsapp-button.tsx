import { MessageCircle } from 'lucide-react'

type FloatingWhatsAppProps = {
  phoneNumber: string
  message: string
}

export function FloatingWhatsApp({ phoneNumber, message }: FloatingWhatsAppProps) {
  const normalizedPhone = phoneNumber.replace(/[^\d]/g, '')
  const href = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi HSE SkillUp via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success-600 text-white shadow-lg transition-colors hover:bg-success-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success-600 focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  )
}
