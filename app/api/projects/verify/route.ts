import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/projects'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const authorized = process.env.ADMIN_PASSWORD ? true : false
  if (!authorized) {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD is not configured on the server' },
      { status: 501 },
    )
  }
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }
  return NextResponse.json({ ok: true })
}
