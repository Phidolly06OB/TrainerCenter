import mongoose from "mongoose";

const conectarDB = async () =>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        console.log(`Conectado a la base de datos ${connectionDB.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default conectarDB