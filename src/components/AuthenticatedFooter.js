import Link from 'next/link'
import React from 'react'

const AuthenticatedFooter = () => {
  return (
    <footer className="shadow shadow-gray-700 bg-slate-900 px-6 py-4">
      <div className="container-fluid">
        <div className="grid grid-cols-1">
          <div className="sm:text-start text-center mx-md-2">
            <p className="mb-0 text-slate-400">
              © Design &amp; Develop with{" "}
              <i className="mdi mdi-heart text-red-600" /> by{" "}
              <Link
                href="https://instagram.com/marsaadm_"
                target="_blank"
                className="text-reset hover:text-white"
              >
                Marsa Dembi
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AuthenticatedFooter