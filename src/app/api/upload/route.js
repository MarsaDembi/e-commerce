import { v2 as cloudinary } from 'cloudinary'
import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { nanoid } from 'nanoid'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req) {
    try {
        const formData = await req.formData()
        const file = formData.get('file')

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
        }

        const arrayBuffer = await file.arrayBuffer()
        const base64 = Buffer.from(arrayBuffer).toString('base64')
        const mimeType = file.type
        const dataUri = `data:${mimeType};base64,${base64}`

        const tmpPath = path.join(tmpDir, nanoid() + '.jpg')
        await fs.writeFile(tmpPath, buffer)

        const result = await cloudinary.uploader.upload(dataUri, {
            folder: 'products',
        })

        return NextResponse.json({ url: result.secure_url })
    } catch (error) {
        console.error('Upload error:', error)
        return NextResponse.json({ error: 'Upload failed', detail: error.message }, { status: 500 })
    }
}