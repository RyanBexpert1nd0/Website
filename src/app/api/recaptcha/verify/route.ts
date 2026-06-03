// reCAPTCHA v3 verification API endpoint
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Token is required' },
        { status: 400 }
      )
    }

    // In production, you would verify with Google's API
    // For now, we'll simulate verification
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY

    if (!recaptchaSecretKey) {
      // Development mode - simulate verification
      console.log('reCAPTCHA verification skipped (development mode)')
      return NextResponse.json({
        success: true,
        score: 0.9,
        action: 'submit',
        timestamp: new Date().toISOString(),
      })
    }

    // Production verification with Google
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify'
    const response = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: recaptchaSecretKey,
        response: token,
      }),
    })

    const data = await response.json()

    return NextResponse.json({
      success: data.success,
      score: data.score,
      action: data.action,
      timestamp: data.challenge_ts,
      hostname: data.hostname,
    })

  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}