/* eslint-disable @next/next/no-img-element */
import { AuthenticatedLayout } from '@/layouts/AuthenticatedLayout'
import { headers } from 'next/headers'
import React from 'react'

export const dynamic = 'force-dynamic'

async function getProductDetail(id) {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = headersList.get('x-forwarded-proto') || 'http'
    const baseUrl = `${protocol}://${host}`

    const res = await fetch(`${baseUrl}/api/products/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) throw new Error('Failed to fetch product')

    return res.json()
}

const ProductDetailAdminPage = async ({ params }) => {
    const product = await getProductDetail(params.id)

    return (
        <AuthenticatedLayout>
            <section className="relative md:pb-24 pb-16 mt-20">
                <div className="container md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7">
                            <div className="group relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt=""
                                    className="h-72 w-full object-contain"
                                />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out" />
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <a
                                        href={product.image}
                                        className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                                    >
                                        <i className="uil uil-camera" />
                                    </a>
                                </div>
                            </div>
                            <h4 className="text-2xl font-medium mt-8">
                                {product.name}
                            </h4>
                            <ul className="py-6 flex items-center list-none">
                                <li className="flex items-center lg:me-6 me-4">
                                    <i className="uil uil-slack-alt lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">
                                        {product.category}
                                    </span>
                                </li>
                            </ul>
                            <p className="text-slate-400">
                                {product.description}
                            </p>
                        </div>
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="sticky top-20">
                                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                                    <div className="p-6">
                                        <h5 className="text-2xl font-medium">Price:</h5>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-xl font-medium">$ {product.price}</span>
                                            <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                                                For Sale
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 text-center">
                                    <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">
                                        Have Question ? Get in touch!
                                    </h3>
                                    <div className="mt-6">
                                        <a
                                            href="https://wa.me/6287714533014"
                                            className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"
                                        >
                                            <i className="uil uil-phone align-middle me-2" /> Contact us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}

export default ProductDetailAdminPage