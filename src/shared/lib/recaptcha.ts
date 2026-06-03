// Google reCAPTCHA v3 Utility for HSE SkillUp
'use client'

declare global {
  interface Window {
    grecaptcha: any
  }
}

export interface RecaptchaOptions {
  action?: string
  timeout?: number
}

export class RecaptchaService {
  private static SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  private static VERIFY_URL = '/api/recaptcha/verify'

  static async loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        resolve()
        return
      }

      if (window.grecaptcha) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${this.SITE_KEY}`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'))
      document.head.appendChild(script)
    })
  }

  static async getToken(options?: RecaptchaOptions): Promise<string> {
    if (!this.SITE_KEY) {
      console.warn('reCAPTCHA site key is not configured')
      return 'MOCK_TOKEN_FOR_DEVELOPMENT'
    }

    await this.loadScript()

    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error('reCAPTCHA not loaded'))
        return
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(this.SITE_KEY, { action: options?.action || 'submit' })
          .then((token: string) => {
            resolve(token)
          })
          .catch((error: Error) => {
            reject(error)
          })
      })
    })
  }

  static async verifyToken(token: string): Promise<boolean> {
    if (!this.SITE_KEY) {
      // Skip verification in development
      return true
    }

    try {
      const response = await fetch(this.VERIFY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      if (!response.ok) {
        throw new Error(`reCAPTCHA verification failed: ${response.status}`)
      }

      const data = await response.json()
      return data.success === true && data.score >= 0.5 // Minimum score threshold
    } catch (error) {
      console.error('reCAPTCHA verification error:', error)
      return false
    }
  }

  static async executeWithRecaptcha(
    callback: () => Promise<void> | void,
    options?: RecaptchaOptions
  ): Promise<void> {
    const token = await this.getToken(options)
    const isValid = await this.verifyToken(token)

    if (!isValid) {
      throw new Error('reCAPTCHA verification failed')
    }

    await callback()
  }
}