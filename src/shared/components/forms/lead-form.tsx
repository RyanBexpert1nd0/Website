'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { Send, ShieldCheck, Loader2, CheckCircle2 } from 'lucide-react'
import { RecaptchaService } from '@/shared/lib/recaptcha'

type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel'
  placeholder?: string
}

type LeadFormProps = {
  title: string
  description: string
  submitLabel: string
  source: string
  fields: Field[]
  extraField?: ReactNode
}

export function LeadForm({ title, description, submitLabel, source, fields, extraField }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)
    setMessage(null)

    try {
      await RecaptchaService.executeWithRecaptcha(async () => {
        const payload = Object.fromEntries(formData.entries())

        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...payload,
            source,
          }),
        })

        const data = await response.json()

        if (!response.ok || !data.success) {
          throw new Error(data.error || 'Pengiriman gagal')
        }

        setMessage('Terima kasih. Tim kami akan menghubungi Anda segera.')
      }, { action: source })
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : 'Terjadi kesalahan saat mengirim formulir'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        void handleSubmit(new FormData(event.currentTarget))
      }}
      className="grid gap-5 rounded-lg border bg-white p-6 shadow-sm"
    >
      <div>
        <p className="text-sm font-bold uppercase text-primary-700">{title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <input type="hidden" name="source" value={source} />

      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-800">
            {field.label}
            <input
              name={field.name}
              type={field.type ?? 'text'}
              placeholder={field.placeholder}
              required
              className="h-11 rounded-lg border px-3 text-sm font-medium text-slate-700 outline-none transition focus:ring-2 focus:ring-primary-600"
            />
          </label>
        ))}
      </div>

      {extraField}

      <label className="grid gap-2 text-sm font-semibold text-slate-800">
        Catatan kebutuhan
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-lg border px-3 py-3 text-sm font-medium text-slate-700 outline-none transition focus:ring-2 focus:ring-primary-600"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
          {submitLabel}
        </button>
        <span className="inline-flex items-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="h-4 w-4 text-success-600" aria-hidden="true" />
          Protected by reCAPTCHA
        </span>
      </div>

      {message ? (
        <p className="flex items-center gap-2 rounded-lg border border-success-200 bg-success-50 px-4 py-3 text-sm font-medium text-success-800">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="rounded-lg border border-destructive/20 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </form>
  )
}
