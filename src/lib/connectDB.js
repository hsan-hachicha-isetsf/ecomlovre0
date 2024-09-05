import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connexion à la base de données réussie')
  } catch (error) {
    console.log('erreur de connexion a la base de données')
  }
}

export default connectDB;