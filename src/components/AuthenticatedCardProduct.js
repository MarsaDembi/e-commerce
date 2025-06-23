/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const AuthenticatedCardProduct = ({ data, onEdit, onDelete }) => {
    return (
        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
            <div className="relative">
                <img src={data.image} alt={data.name} className="h-72 w-full object-contain" />
                <div className="absolute top-6 end-4">
                    <button
                        onClick={onEdit}
                        className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 text-white rounded-full p-2 me-2"
                    >
                        <i className="mdi mdi-pencil text-[20px]" />
                    </button>
                    <button
                        onClick={onDelete}
                        className="btn btn-icon bg-red-600 hover:bg-red-700 border-red-600 text-white rounded-full p-2"
                    >
                        <i className="mdi mdi-trash-can text-[20px]" />
                    </button>
                </div>
            </div>
            <div className="p-6">
                <div className="pb-6">
                    <Link
                        href={`/admin/${data._id}`}
                        className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                    >
                        {data.name}
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

export default AuthenticatedCardProduct