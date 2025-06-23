'use client'

import { useSession } from 'next-auth/react'
import { AuthenticatedLayout } from '@/layouts/AuthenticatedLayout'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import AuthenticatedFilter from '@/components/AuthenticatedFilter'
import AuthenticatedCardProduct from '@/components/AuthenticatedCardProduct'
import AuthenticatedProductModal from '@/components/AuthenticatedProductModal'

export default function AdminPage() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const { data: session, status } = useSession()
    const router = useRouter()

    const fetchProducts = useCallback(async () => {
        try {
            const res = await fetch('/api/products')
            const data = await res.json()
            setProducts(data)
        } catch (err) {
            console.error('Failed to fetch products:', err)
        }
    }, []);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login')
        } else if (status === 'authenticated' && session?.user?.role === 'user') {
            router.push('/dashboard')
        }
    }, [status, session, router])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    useEffect(() => {
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered)
    }, [products, keyword])

    const handleDelete = async (id) => {
        if (confirm('Yakin ingin menghapus produk ini?')) {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' })
        
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data?.error || 'Failed to delete product')
            }

            alert(`Product has been deleted`)
            fetchProducts()
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product)
        setModalOpen(true)
    };

    const handleSuccess = () => {
        fetchProducts()
        setModalOpen(false)
        setSelectedProduct(null)
    };

    if (status === 'loading' || !session) {
        return (
            <AuthenticatedLayout>
                <div className="container text-center mt-20">
                    <h1 className="text-xl font-medium text-gray-600">Loading...</h1>
                </div>
            </AuthenticatedLayout>
        )
    }

    return (
        <AuthenticatedLayout>
            <div className="container text-center mt-30">
                <h1 className="text-4xl font-bold text-green-600">Admin Panel</h1>
                <p className="mt-4 text-gray-600">Welcome, {session?.user?.name}</p>
            </div>

            <div className="relative mt-20 mb-30 text-center">
                <AuthenticatedFilter onSearchChange={setKeyword} />

                <div className="relative lg:pt-24 pt-16">
                    <div className="container relative">
                        {filteredProducts.length > 0 ? (
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                                {filteredProducts.map((product) => (
                                    <AuthenticatedCardProduct
                                        key={product._id}
                                        data={product}
                                        onDelete={() => handleDelete(product._id)}
                                        onEdit={() => handleEdit(product)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <h4 className="text-4xl font-semibold mt-4">No products found</h4>
                        )}
                    </div>
                </div>

            </div>

            {modalOpen && (
                <AuthenticatedProductModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSuccess={handleSuccess}
                    existingProduct={selectedProduct}
                />
            )}
        </AuthenticatedLayout>
    )
}
