import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const leadSchema = z.object({
  source: z.string().min(1),
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  company: z.string().optional().default(''),
  program: z.string().optional().default(''),
  participants: z.string().optional().default(''),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Data formulir tidak valid' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      receivedAt: new Date().toISOString(),
      source: parsed.data.source,
    })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
