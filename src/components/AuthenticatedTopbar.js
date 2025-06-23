'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const AuthenticatedNavbar = () => {
  const { data: session, status } = useSession()
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
    const featherScript = document.createElement('script')
    featherScript.src = '/assets/libs/feather-icons/feather.min.js'
    featherScript.onload = () => {
      if (window.feather) window.feather.replace()
    }
    document.body.appendChild(featherScript)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  if (!isClient) return null

  return (
    <nav id="topnav" className="defaultscroll is-sticky w-full z-50 border-b border-gray-200 dark:border-gray-700 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="logo flex items-center space-x-2">
          <i className="uil uil-shopping-bag text-4xl me-2 text-green-600" /> Shopifly
        </Link>

        {/* Navigation Menu */}
        <div
          id="navigation"
          className={`${isOpen ? 'block' : 'hidden'
            } flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0 navigation-menu`}
        >
          <Link href="/" className={pathname === '/' ? 'text-green-600' : 'hover:text-green-600'}>Home</Link>
          {status === "authenticated" && (
            <>
              {session?.user?.role === 'admin' && (
                <Link href="/admin" className={pathname === '/admin' ? 'text-green-600' : 'hover:text-green-600'}>
                  Admin
                </Link>
              )}
            </>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {status === "authenticated" ? (
            <button
              className="btn btn-icon bg-red-600 hover:bg-red-700 border-red-600 text-white rounded-full p-2"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              <i data-feather="log-out" className="w-4 h-4 stroke-[3]" />
            </button>
          ) : (
            <Link
              href="/login"
              className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 text-white rounded-full p-2"
            >
              <i data-feather="log-in" className="w-4 h-4 stroke-[3]" />
            </Link>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="text-slate-800 md:hidden ml-2"
            aria-label="Toggle Menu"
          >
            <i data-feather="menu" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
