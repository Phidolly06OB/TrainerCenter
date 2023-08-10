import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    rol:{
        type:String,
        enum:["trainerRol", "gerenteRol"],
        trim:true
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario