'use client'

import CardProduct from '@/components/CardProduct'
import Filter from '@/components/Filter'
import { GuestLayout } from '@/layouts/GuestLayout'
import React, { useEffect, useState } from 'react'

export const dynamic = 'force-dynamic'

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
}

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        getProducts().then((data) => {
            setAllProducts(data)
            setFiltered(data)
        })
    }, [])

    useEffect(() => {
        const newFiltered = allProducts.filter((p) =>
            p.title.toLowerCase().includes(keyword.toLowerCase())
        )
        setFiltered(newFiltered)
    }, [keyword, allProducts])

    return (
        <GuestLayout>
            <section className="relative mt-30 text-center bg-gray-50 dark:bg-slate-800">
                <Filter onSearchChange={setKeyword} />

                <section className="relative lg:py-24 py-16">
                    <div className="container relative">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            {filtered.length > 0 ? (
                                filtered.map((product) => (
                                    <CardProduct key={product.id} data={product} />
                                ))
                            ) : (
                                <h4 className="text-4xl font-semibold mt-4">No products found</h4>
                            )}
                        </div>
                    </div>
                </section>

            </section>
        </GuestLayout>
    )
}

export default ProductPage