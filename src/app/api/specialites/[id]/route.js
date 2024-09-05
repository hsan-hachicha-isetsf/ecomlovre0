import connectDB from '@/lib/connectDB'
import Specialite from '@/models/Specialite'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function GET (_, { params }) {
  try {
    await connectDB()
    const specialite = await Specialite.findById(params.id)
    if (specialite) {
      return NextResponse.json({ success: true, specialite: specialite })
    }
    return NextResponse.json(
      { message: `Specialite ${params.id} not found` },
      { status: HttpStatusCode.NotFound }
    )
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    )
  }
}

export async function PUT (req, { params }) {
  try {
    await connectDB()
    const specialite = await Specialite.findById(params.id)
    if (specialite) {
      const body = await req.json()
      specialite.nomspecialite = body.nomspecialite
      specialite.save()
      return NextResponse.json({ specialite, message: "Specialite modifié avec succés" })
    }
    return NextResponse.json(
      { message: `Specialite ${params.id} n'existe pas` },
      { status: HttpStatusCode.NotFound }
    )
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    )
  }
}

export async function DELETE (_, { params }) {
  try {
    const specialite = await Specialite.findById(params.id)
    if (specialite) {
      await Specialite.findByIdAndDelete(specialite._id)
      return NextResponse.json({message: `Specialite ${params.id} supprimé avec succés`})
    }
    return NextResponse.json(
      { message: `Specialite ${params.id} n'existe pas` },
      { status: HttpStatusCode.NotFound }
    )
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: HttpStatusCode.BadRequest
    })
  }
}