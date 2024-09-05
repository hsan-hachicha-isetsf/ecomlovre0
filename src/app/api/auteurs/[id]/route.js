import connectDB from '@/lib/connectDB'
import Auteur from '@/models/Auteur'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function GET (_, { params }) {
  try {
    await connectDB()
    const auteur = await Auteur.findById(params.id)
    if (auteur) {
      return NextResponse.json({ success: true, auteur: auteur })
    }
    return NextResponse.json(
      { message: `Auteur ${params.id} not found` },
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
    const auteur = await Auteur.findById(params.id)
    if (auteur) {
      const body = await req.json()
      auteur.nomauteur = body.nomauteur
      auteur.email = body.email
      auteur.numtel = body.numtel
      auteur.save()
      return NextResponse.json({ auteur, message: "Auteur modifié avec succés" })
    }
    return NextResponse.json(
      { message: `Auteur ${params.id} n'existe pas` },
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
    const auteur = await Auteur.findById(params.id)
    if (auteur) {
      await Auteur.findByIdAndDelete(auteur._id)
      return NextResponse.json({message: `Auteur ${params.id} supprimé avec succés`})
    }
    return NextResponse.json(
      { message: `Auteur ${params.id} n'existe pas` },
      { status: HttpStatusCode.NotFound }
    )
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: HttpStatusCode.BadRequest
    })
  }
}