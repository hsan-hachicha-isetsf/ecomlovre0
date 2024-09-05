import connectDB from '@/lib/connectDB'
import Editeur from '@/models/Editeur'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function POST (req) {
  try {
    await connectDB()
    const body = await req.json()
    const editeur = await Editeur.create(body)
    return NextResponse.json(
      { success: true, editeur, message: 'Editeur crée avec succés' },
      { status: HttpStatusCode.Created }
    )
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: HttpStatusCode.BadRequest }
    )
  }
}

export async function GET () {
  try {
    await connectDB()
    const editeurs = await Editeur.find()
    return NextResponse.json({ success: true, editeurs: editeurs })
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: HttpStatusCode.BadRequest
    })
  }
}
