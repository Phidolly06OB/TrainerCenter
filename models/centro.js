import mongoose from "mongoose";

const centroSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    },
    estado:{
        type:String,
        default: 'true'
    },
    ciudad:{
        type:String,
        required:true,
        trim:true
    }
})

const Centro = mongoose.model('centro', centroSchema)

export default Centro