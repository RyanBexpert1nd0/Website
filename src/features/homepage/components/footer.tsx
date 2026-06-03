import { siteConfig } from '@/constants/site'

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-200">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-heading text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{siteConfig.description}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Navigasi</p>
          <div className="mt-3 grid gap-2 text-sm">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Kontak</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <span>{siteConfig.contact.address}</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
              {siteConfig.contact.email}
            </a>
            <span>{siteConfig.contact.hours}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container flex flex-col gap-3 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.footerLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
