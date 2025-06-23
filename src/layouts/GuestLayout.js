import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export const GuestLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
