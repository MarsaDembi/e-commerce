'use client'

import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { GuestLayout } from '@/layouts/GuestLayout'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <GuestLayout>
        <section className="relative mt-30 text-center bg-gray-50 dark:bg-slate-800">
          <h3 className="text-4xl font-bold">Loading...</h3>
        </section>
      </GuestLayout>
    )
  }

  if (!session) return null

  return (
    <GuestLayout>
      <section className="relative my-30 text-center bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <h3 className="text-4xl font-bold">Welcome, {session.user.name}...</h3>
          <p className="text-slate-500 mt-4">
            Role: <strong className="uppercase">{session.user.role || 'user'}</strong>
          </p>
          <p className="text-slate-500 mt-4 italic">
            Please click on the page <strong className="underline capitalize">{session.user.role || 'user'}</strong> to view page details.
          </p>
        </div>
      </section>
    </GuestLayout>
  );
}
