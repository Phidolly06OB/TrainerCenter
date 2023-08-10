import { response } from "express"
import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs"
import generateJWT from "../helpers/generarJWT.js";

const get = async (req, res) =>{
    try {
        res.json({
            msg: "bien"
        })
    } catch (error) {
        
    }
}

const login = async (req, res = response)=>{
    const {email, password} = req.body
    try {

        //verificar el email

        const usuario = await Usuario.findOne({email})

        if(!usuario){
            return res.status(400).json("Email no existe")
        }


        //verificar si el password is correct
        const passwordValido = bcryptjs.compareSync(password, usuario.password)
        if(!passwordValido){
            return res.status(400).json("Password is not valid")
        }

        //generar el token

        const token = await generateJWT(usuario.id)

        res.json({
           usuario,
            token
        })
        
    } catch (error) {
        console.log(error);
    }
}

export {
    login
}