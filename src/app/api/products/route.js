import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Product from '@/models/Product'

export async function GET() {
  await dbConnect()
  const products = await Product.find()
  return NextResponse.json(products)
}

export async function POST(req) {
  try {
    await dbConnect()
    
    const body = await req.json()

    if (!body.name || !body.price || !body.description || !body.image) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const product = new Product({
      name: body.name,
      price: body.price,
      description: body.description,
      category: body.category,
      image: body.image
    })

    const savedProduct = await product.save()

    return NextResponse.json({ success: true, data: savedProduct }, { status: 201 })

  } catch (error) {
    console.error('POST /api/products error:', error)
    return NextResponse.json({ error: 'Failed to create product', detail: error.message }, { status: 500 })
  }
}
