// Mobile Navigation Component
'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'

interface MobileNavigationProps {
  navigation: Array<{ name: string; href: string }>
}

export function MobileNavigation({ navigation }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg">
            <div className="flex h-16 items-center justify-between border-b px-4">
              <span className="font-bold text-lg">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 space-y-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="border-t p-4 space-y-3">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  window.open('https://wa.me/62xxxxxxxxx', '_blank')
                  setIsOpen(false)
                }}
              >
                Chat via WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  window.location.href = 'tel:+62xxxxxxxxx'
                  setIsOpen(false)
                }}
              >
                Telepon Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}