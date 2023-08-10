import mongoose, { Schema } from "mongoose";

const rutaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim:true
    },
    centro:{
        type:Schema.Types.ObjectId,
        required:true,
        trim:true
    }
})

const Ruta = mongoose.model('ruta', rutaSchema)

export default Ruta