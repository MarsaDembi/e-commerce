/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthenticatedProductModal({ isOpen, onClose, onSuccess, existingProduct }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (existingProduct) {
            setName(existingProduct.name || '')
            setPrice(existingProduct.price || '')
            setDescription(existingProduct.description || '')
            setCategory(existingProduct.category || '')
            setImagePreview(existingProduct.image || null)
        }
    }, [existingProduct])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = existingProduct?.image || ''

            if (image) {
                const formData = new FormData();
                formData.append('file', image);

                const uploadRes = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!uploadRes.ok) {
                    const text = await uploadRes.text()
                    throw new Error(`Upload failed: ${text}`)
                }

                const uploadData = await uploadRes.json()
                imageUrl = uploadData.url
            }

            const productData = {
                name,
                price,
                description,
                category,
                image: imageUrl,
            }

            const res = await fetch(
                existingProduct ? `/api/products/${existingProduct._id}` : '/api/products',
                {
                    method: existingProduct ? 'PUT' : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(productData),
                }
            );

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data?.error || 'Failed to create product')
            }

            alert(`Product has been ${existingProduct ? 'updated' : 'created'}`)
            onSuccess?.()
            onClose?.()

        } catch (err) {
            console.error(err);
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-white"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold mb-4">
                    {existingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 text-start">
                    <div className="mb-4">
                        <label className="font-medium" htmlFor="name">
                            Product Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name Product"
                            className="form-input mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-medium" htmlFor="price">
                            Product Price
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price"
                            className="form-input mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-medium" htmlFor="description">
                            Product Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            className="form-input mt-1"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="font-medium" htmlFor="category">
                            Product Category
                        </label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Category"
                            className="form-input mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="font-medium" htmlFor="category">
                            Product Photo
                        </label>
                        <input type="file" onChange={handleImageChange} accept="image/*" className="form-input mt-1" required />
                    </div>
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" className="w-full h-44 object-cover mt-2 rounded" />
                    )}

                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 border rounded text-gray-600">Cancel</button>
                        <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50">
                            {loading ? 'Saving...' : (existingProduct ? 'Update Product' : 'Create Product')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
