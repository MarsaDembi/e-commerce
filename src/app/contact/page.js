'use client'

import { GuestLayout } from "@/layouts/GuestLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const featherScript = document.createElement('script')
    featherScript.src = '/assets/libs/feather-icons/feather.min.js'
    featherScript.onload = () => {
      if (window.feather) window.feather.replace()
    }
    document.body.appendChild(featherScript)
  }, [])

  if (!isClient) return null

  return (
    <GuestLayout>
      <section className="relative my-30 text-center bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <h3 className="text-4xl font-bold">Contact</h3>
          <p className="text-slate-500 mt-4">Feel free to reach out to me through any of the following channels.</p>
        </div>
        <div className="container relative lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <i data-feather="hexagon" className="size-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/3 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-whatsapp" />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">
                  Whatsapp
                </h5>
                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                <div className="mt-5">
                  <Link
                    href="https://wa.me/6287714533014"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                    target="_blank"
                  >
                    +62 877-1453-3014
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <i data-feather="hexagon" className="size-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/3 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-instagram" />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">
                  Instagram
                </h5>
                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                <div className="mt-5">
                  <Link
                    href="https://instagram.com/marsaadm_"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                    target="_blank"
                  >
                    marsaadm_
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <i data-feather="hexagon" className="size-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/3 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-envelope" />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">
                  Email
                </h5>
                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                <div className="mt-5">
                  <Link
                    href="mailto:marsadembi@gmail.com"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                  >
                    marsadembi@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
