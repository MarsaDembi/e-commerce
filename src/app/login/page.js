'use client'

import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GuestLayout } from '@/layouts/GuestLayout'

export default function LoginPage() {
    const { data: session, status } = useSession()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard')
        }
    }, [status, router])

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const res = await signIn('credentials', {
            redirect: false,
            username,
            password,
        })

        if (res.ok) {
            router.push('/dashboard')
        } else {
            setLoading(false)
            setError('Username atau password salah!')
        }
    }

    return (
        <>
            {status === "loading" ? (
                <GuestLayout>
                    <section className="relative mt-30 text-center bg-gray-50 dark:bg-slate-800">
                        <div className="container">
                            <h3 className="text-4xl font-bold">Loading...</h3>
                        </div>
                    </section>
                </GuestLayout>
            ) : (
                <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
                    <div className="absolute inset-0 image-wrap z-1 bg-[url('/assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover" />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
                        id="particles-snow"
                    />
                    <div className="container relative z-3">
                        <div className="flex justify-center">
                            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                                <Link href="/" className="flex items-center justify-center">
                                    <i className="uil uil-shopping-bag text-7xl text-green-600" />
                                </Link>
                                <h5 className="my-6 text-xl font-semibold text-center">Login</h5>
                                {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
                                <form onSubmit={handleLogin} className="text-start">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-medium" htmlFor="username">
                                                Username
                                            </label>
                                            <input
                                                id="username"
                                                type="text"
                                                className="form-input mt-3"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="font-medium" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-input mt-3"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className={`btn w-full rounded ${loading
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-green-600 hover:bg-green-700 text-white'
                                                    }`}
                                            >
                                                {loading ? 'Loading...' : 'Login'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
