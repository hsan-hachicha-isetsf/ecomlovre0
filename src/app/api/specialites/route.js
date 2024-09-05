import connectDB from '@/lib/connectDB'
import Specialite from '@/models/Specialite'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function POST (req) {
  try {
    await connectDB()
    const body = await req.json()
    const specialite = await Specialite.create(body)
    return NextResponse.json(
      { success: true, specialite, message: 'Specialité crée avec succès' },
      { status: HttpStatusCode.Created }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error },
      { status: HttpStatusCode.BadRequest }
    )
  }
}

export async function GET () {
  try {
    await connectDB()
    const specialites = await Specialite.find({}, null, {sort: {'_id': -1}})
    return NextResponse.json({ success: true, specialites: specialites })
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: HttpStatusCode.BadRequest
    })
  }
}