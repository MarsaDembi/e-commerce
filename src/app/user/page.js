'use client'

import { useSession } from 'next-auth/react'
import { GuestLayout } from '@/layouts/GuestLayout'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function UserPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login')
        } else if (status === 'authenticated' && session?.user?.role === 'admin') {
            router.push('/dashboard')
        }
    }, [status, session, router])

    if (status === 'loading' || !session) {
        return (
            <GuestLayout>
                <div className="container text-center mt-20">
                    <h1 className="text-xl font-medium text-gray-600">Loading...</h1>
                </div>
            </GuestLayout>
        )
    }

    return (
        <GuestLayout>
            <div className="container text-center mt-20">
                <h1 className="text-4xl font-bold text-green-600">User Panel</h1>
                <p className="mt-4 text-gray-600">Welcome, {session?.user?.name}</p>
            </div>
        </GuestLayout>
    )
}
