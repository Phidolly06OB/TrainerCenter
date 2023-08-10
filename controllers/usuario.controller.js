import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs"


const getUsuarios = async (req, res) =>{
    try {

        res.json({
            msg: "bien"
        })
    } catch (error) {
        console.log(error);
    }
}

const newUser = async (req, res) =>{
    try {

        //se destructura
        const {nombre, email, password, rol} = req.body
        const newUsuario = await new Usuario({nombre, email, password, rol})

        //verificar si existe el email
        const existEmail = await Usuario.findOne({email})
        if(existEmail){
            return res.json({
                msg: "Email ya existe"
            })
        }

        //encryptar la contraseña
        const salt = bcryptjs.genSaltSync();
        newUsuario.password = bcryptjs.hashSync(password, salt)


        newUsuario.save()

        res.json({
            newUsuario
        })

    } catch (error) {
        console.log(error);
    }
}

export {
    getUsuarios,
    newUser
}