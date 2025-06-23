import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const { pathname } = req.nextUrl

    if (pathname === '/login' || pathname === '/' || pathname.startsWith('/_next')) {
        return NextResponse.next()
    }

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (pathname.startsWith('/admin') && token.role !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/dashboard', '/admin/:path*'],
}
