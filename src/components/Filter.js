'use client'

import { useState } from "react"

export default function Filter({ onSearchChange }) {
    const [keyword, setKeyword] = useState('')

    const handleChange = (e) => {
        setKeyword(e.target.value)
        onSearchChange(e.target.value)
    }

    return (
        <div className="container relative mt-16 z-1">
            <div className="grid grid-cols-1">
                <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
                    <div className="registration-form text-dark text-start">
                        <div className="grid grid-cols-1">
                            <div>
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
                            <div className="lg:mt-6">
                                <input
                                    type="submit"
                                    id="search-buy"
                                    name="search"
                                    className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded"
                                    defaultValue="Search"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}