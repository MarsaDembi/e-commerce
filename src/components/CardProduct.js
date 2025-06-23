/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const CardProduct = ({ data }) => {
    return (
        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
            <div className="relative">
                <img src={data.image} alt={data.title} className="h-72 w-full object-contain" />
                <div className="absolute top-4 end-4">
                    <a
                        href="javascript:void(0)"
                        className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                    >
                        <i className="mdi mdi-cart-plus text-[20px]" />
                    </a>
                </div>
            </div>
            <div className="p-6">
                <div className="pb-6">
                    <Link
                        href={`/product/${data.id}`}
                        className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                    >
                        {data.title}
                    </Link>
                </div>
                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                    <li className="flex items-center me-4">
                        <i className="uil uil-slack-alt text-2xl me-2 text-green-600" />
                        <span>{data.category}</span>
                    </li>
                    <li className="flex items-center me-4">
                        <i className="uil uil-dollar-alt text-2xl me-2 text-green-600" />
                        <span>{data.price}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardProduct