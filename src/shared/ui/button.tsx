import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600',
  secondary: 'bg-success-600 text-white hover:bg-success-500 focus-visible:ring-success-600',
  outline: 'border bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-primary-600',
  ghost: 'text-slate-700 hover:bg-slate-100 focus-visible:ring-primary-600',
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

export function ButtonLink({
  href,
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
