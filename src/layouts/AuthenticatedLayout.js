import AuthenticatedFooter from '@/components/AuthenticatedFooter'
import { AuthenticatedNavbar } from '@/components/AuthenticatedTopbar'
import React from 'react'

export const AuthenticatedLayout = ({ children }) => {
    return (
        <>
            <AuthenticatedNavbar />
            <main>{children}</main>
            <AuthenticatedFooter />
        </>
    )
}
