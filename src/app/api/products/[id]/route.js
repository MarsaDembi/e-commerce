import dbConnect from '@/lib/mongodb'
import Product from '@/models/Product'
import { NextResponse } from 'next/server'

export async function GET(_, { params }) {
    await dbConnect()

    try {
        const product = await Product.findById(params.id)

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 })
        }

        return NextResponse.json(product)
    } catch (err) {
        console.error('GET /api/products/[id] error:', err)
        return NextResponse.json({ error: 'Failed to fetch product', detail: err.message }, { status: 500 })
    }
}

export async function PUT(req, { params }) {
    await dbConnect()

    try {
        const body = await req.json()
        const product = await Product.findByIdAndUpdate(params.id, body, { new: true })

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: product })
    } catch (error) {
        console.error('PUT /api/products/[id] error:', error)
        return NextResponse.json({ error: 'Failed to update product', detail: error.message }, { status: 500 })
    }
}

export async function DELETE(_, { params }) {
    await dbConnect()
    await Product.findByIdAndDelete(params.id)
    return NextResponse.json({ success: true })
}
