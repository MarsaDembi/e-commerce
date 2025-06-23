'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export const Footer = () => {
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
    <>
      <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              <div className="relative w-full">
                <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="md:text-start text-center z-1">
                      <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
                        Let&apos;s Connect!
                      </h3>
                      <p className="text-slate-400 max-w-xl mx-auto">
                        Feel free to reach out to me through any of the following channels.
                      </p>
                    </div>
                    <div className="subcribe-form z-1">
                      <form className="relative max-w-lg items-center justify-center mb-10 lg:mb-0 me-25 lg:me-0">
                        <button
                          type="submit"
                          className="btn bg-green-600 hover:bg-green-700 text-white rounded-full"
                        >
                          Follow
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="absolute -top-5 -start-5">
                    <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45" />
                  </div>
                  <div className="absolute -bottom-5 -end-5">
                    <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90" />
                  </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link href="#" className="text-[22px] focus:outline-none tracking-[1px] text-gray-100 font-semibold flex items-center">
                      <i className="uil uil-shopping-bag text-5xl me-2 text-green-600" /> Shopifly
                    </Link>
                    <p className="mt-6 text-gray-300">
                      A great plateform to buy your fashion
                      without any reseller.
                    </p>
                  </div>
                  <div className="lg:col-span-3 md:col-span-6">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Usefull Links
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link
                          href="/"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1" /> Home
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/contact"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1" /> Contact
                        </Link>
                      </li>
                      <li className="mt-[10px]">
                        <Link
                          href="/product"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          <i className="uil uil-angle-right-b me-1" /> Product
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-4 md:col-span-6">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Contact Details
                    </h5>
                    <div className="flex mt-6">
                      <i
                        data-feather="map-pin"
                        className="size-5 text-green-600 me-3"
                      />
                      <div className="">
                        <h6 className="text-gray-300 mb-2">
                          Linggar, Rancaekek, <br /> Bandung, Jawa Barat, <br /> Indonesia - 40394
                        </h6>
                        <Link
                          href="https://maps.app.goo.gl/vxnByNCPTUXCMQbb6"
                          data-type="iframe"
                          className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox"
                          target="_blank"
                        >
                          View on Google map
                        </Link>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <i
                        data-feather="mail"
                        className="size-5 text-green-600 me-3"
                      />
                      <div className="">
                        <Link
                          href="mailto:marsadembi@gmail.com"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          marsadembi@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <i
                        data-feather="instagram"
                        className="size-5 text-green-600 me-3"
                      />
                      <div className="">
                        <Link
                          href="https://instagram.com/marsaadm_"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                          target="_blank"
                        >
                          @marsaadm_
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="md:text-start text-center">
                <p className="mb-0 text-gray-300">
                  © Design &amp; Develop with{" "}
                  <i className="mdi mdi-heart text-red-600" /> by{" "}
                  <Link
                    href="https://instagram.com/marsaadm_"
                    target="_blank"
                    className="text-reset hover:text-slate-900"
                  >
                    Marsa Dembi
                  </Link>
                  .
                </p>
              </div>
              <ul className="list-none md:text-end text-center">
                <li className="inline">
                  <Link
                    href="http://linkedin.com/marsaadm_"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="linkedin" className="size-4" />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://instagram.com/marsaadm_"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="instagram" className="size-4" />
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    href="https://twitter.com/marsaadm_"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <i data-feather="twitter" className="size-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
