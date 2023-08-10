import mongoose from "mongoose";

const rolesSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    }
})

const Roles = mongoose.model('role', rolesSchema)

export default Roles