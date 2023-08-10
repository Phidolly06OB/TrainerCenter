import mongoose, { Schema } from "mongoose";

const levelSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    ruta:{
        type:Schema.Types.ObjectId,
        required:true,
        trim:true
    },
    duracion:{
        type:String,
        required:true,
        trim:true
    }
})

const Level = mongoose.model('level', levelSchema)

export default Level