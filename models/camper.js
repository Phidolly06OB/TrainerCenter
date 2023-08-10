import mongoose, { Schema } from "mongoose";

const camperSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    tipoIdentificacion:{
        type:String,
        enum:["T.I", "C.C"],
        trim:true
    },
    numeroIdentificacion:{
        type:Number,
        required:true,
        tirm:true
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
    level:{
        type:Schema.Types.ObjectId,
        required:true,
        trim:true
    },
    levelState:{
        type:String,
        required:true,
        enum:['PENDIENTE', 'FINALIZADO'],
        trim:true
    },
    estado:{
        type:String,
        default: 'true'
    },
    rol:{
        type:String,
        default: 'camperRol'
    },
    promedio:{
        //Profe Me dijo que lo pusiera en string :D
        type:String,
        required:true,
        tirm:true
    }
})

const Camper = mongoose.model('camper', camperSchema)

export default Camper