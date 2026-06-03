import { Menu, Phone } from 'lucide-react'
import { siteConfig } from '@/constants/site'
import { ButtonLink } from '@/shared/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3 font-heading text-lg font-bold text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm text-white">
            HSE
          </span>
          <span>{siteConfig.name}</span>
        </a>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/kontak" variant="outline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Hubungi Kami
          </ButtonLink>
          <ButtonLink href="/pendaftaran">Daftar Training</ButtonLink>
        </div>
        <button
          type="button"
          aria-label="Buka menu navigasi"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-white text-slate-800 lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
