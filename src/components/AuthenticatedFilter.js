'use client'

import { useState } from "react"
import AuthenticatedProductModal from "./AuthenticatedProductModal"

export default function AuthenticatedFilter({ onSearchChange }) {
    const [keyword, setKeyword] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleChange = (e) => {
        setKeyword(e.target.value)
        onSearchChange(e.target.value)
    }

    const handleCreate = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <div className="container relative mt-16 z-1">
                <div className="grid grid-cols-1">
                    <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
                        <div className="registration-form text-dark text-start">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="md:col-span-2">
                                    <label htmlFor="search" className="form-label font-medium text-slate-900 dark:text-white">
                                        Search : <span className="text-red-600">*</span>
                                    </label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <i className="uil uil-search icons" />
                                        <input
                                            type="text"
                                            id="search"
                                            name="search"
                                            onChange={handleChange}
                                            value={keyword}
                                            className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                                            placeholder="Search your keywords"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-end">
                                    <button
                                        type="button"
                                        onClick={handleCreate}
                                        className="btn bg-green-600 hover:bg-green-700 text-white w-full h-12 rounded"
                                    >
                                        + Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {isModalOpen && (
                <AuthenticatedProductModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={() => {
                        setIsModalOpen(false)
                    }}
                />
            )}
        </>
    )
}