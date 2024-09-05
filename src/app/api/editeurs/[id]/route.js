import connectDB from '@/lib/connectDB'
import Editeur from '@/models/Editeur'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function GET (_, { params }) {
  try {
    await connectDB()
    const editeur = await Editeur.findById(params.id)
    if (editeur) {
      return NextResponse.json({ success: true, editeur: editeur })
    }
    return NextResponse.json(
      { message: `Editeur ${params.id} not found` },
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
    const editeur = await Editeur.findById(params.id)
    if (editeur) {
      const body = await req.json()
      editeur.maisonedit = body.maisonedit
      editeur.siteweb = body.siteweb
      editeur.email = body.email
      editeur.save()
      return NextResponse.json({ editeur, message: "Editeur modifié avec succés" })
    }
    return NextResponse.json(
      { message: `Editeur ${params.id} n'existe pas` },
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
    const editeur = await Editeur.findById(params.id)
    if (editeur) {
      await Editeur.findByIdAndDelete(editeur._id)
      return NextResponse.json({message: `Editeur ${params.id} supprimé avec succés`})
    }
    return NextResponse.json(
      { message: `Editeur ${params.id} n'existe pas` },
      { status: HttpStatusCode.NotFound }
    )
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: HttpStatusCode.BadRequest
    })
  }
}